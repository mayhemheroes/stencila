// To iron out:
// - race conditions for node execution responses
// - cancelling execution
// - handling stale status for downstream node dependencies
// - what does a `documents.change` payload look like for HTML nodes?
// - How do we migrate old published documents
// - Attach Node IDs for required elements in published article HTML

import { CodeChunk, CodeExpression } from '@stencila/schema'
import { Document, Session } from '@stencila/stencila'
import { Client, ClientId, connect, disconnect } from './client'
import * as documents from './documents'
import { onDiscoverExecutableLanguages } from './events/kernels'
import { languages } from './kernels'
import * as sessions from './sessions'
import { ProjectId, SnapshotId } from './types'

export const main = (
  clientId: ClientId,
  projectId: ProjectId,
  snapshotId: SnapshotId,
  documentPath: documents.DocumentPath,
  origin?: string | null,
  token?: string | null
): (() => Promise<[Client, Document, Session]>) => {
  let client: Client | undefined
  let session: Session | undefined
  let document: Document | undefined

  // Start the client and session, if necessary
  // Returns early if already started up
  const startup = async (): Promise<[Client, Document, Session]> => {
    if (
      client !== undefined &&
      session !== undefined &&
      document !== undefined
    ) {
      return [client, document, session]
    }

    if (client === undefined) {
      client = await connect(projectId, clientId, origin, token)
    }

    if (session === undefined) {
      session = await sessions.start(client, projectId, snapshotId)
      sessions.subscribe(client, session.id, 'updated').catch((err) => {
        console.warn(`Couldn't subscribe to session updates`, err)
      })

      const kernels = await languages(client, session.id)
      // Inform components of the available kernels in this session
      // by emitting a custom event
      onDiscoverExecutableLanguages(kernels)

      // Don't subscribe to heartbeats during development because it generates
      // distracting WebSocket messages
      // if (process.env.NODE_ENV !== 'development') {
      //  sessions.subscribe(client, session.id, 'heartbeat').catch((err) => {
      //    console.warn(`Couldn't subscribe to session updates`, err)
      //  })
      // }
    }

    if (document === undefined) {
      document = await documents.open(client, documentPath)
      documents
        .subscribe(client, document.id, 'patched', (event) =>
          documents.receivePatch(clientId, event)
        )
        .catch((err) => {
          console.warn(`Couldn't subscribe to document 'patched'`, err)
        })
    }

    documents.listen(client, clientId, document.id)

    initComponents()

    return [client, document, session]
  }

  // Shutdown the session, if necessary
  const shutdown = async (): Promise<void> => {
    if (client !== undefined && session !== undefined) {
      await sessions.stop(client, session.id)
      session = undefined
    }
  }

  function initComponents(): void {
    window.removeEventListener('appload', initComponents)

    // `executeHandler` for `CodeChunk` and `CodeExpression` nodes
    window.document
      .querySelectorAll<
        HTMLStencilaCodeChunkElement | HTMLStencilaCodeExpressionElement
      >('stencila-code-chunk,stencila-code-expression')
      .forEach((elem) => {
        elem.executeHandler = async <C extends CodeChunk | CodeExpression>(
          node: C
        ): Promise<C> => {
          const [client, document] = await startup()
          await documents.execute(client, document.id, elem.id)
          // The WebComponent for a `CodeExpression` has a `isOutputEmpty` property
          // which is set based on the return value from this function and does not
          // change later when we actually update the output. So, here's a hack to
          // make that always true.
          return Promise.resolve({ ...node, output: '' })
        }
      })

    // Temporary functions for testing in the console
    // @ts-ignore
    window.stencilaExecute = async (nodeId: null | string, ordering: 'Single' | 'Appearance' | 'Topological') => {
      const [client, document] = await startup()
      await documents.execute(client, document.id, nodeId, ordering)
    }
    // @ts-ignore
    window.stencilaCancel = async (nodeId: null | string, scope: 'Single' | 'All') => {
      const [client, document] = await startup()
      await documents.cancel(client, document.id, nodeId, scope)
    }
    // @ts-ignore
    window.stencilaRestart = async () => {
      const [client, document] = await startup()
      await documents.restart(client, document.id)
    }
  }

  // Shutdown and disconnect on page unload
  window.addEventListener('unload', () => {
    if (client !== undefined) {
      shutdown().catch((err) => {
        console.warn(`Couldn't shut down the session`, err)
      })

      disconnect(client)
    }
  })

  return startup
}
