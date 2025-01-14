import { EntityId } from '@reduxjs/toolkit'
import type { Project, Result, ResultFailure, ResultSuccess } from 'stencila'
import { CHANNEL } from '../preload/channels'
import { AppConfigStore, ConfigPaths } from '../preload/types'

/**
 * Custom Error instance thrown by `unwrapOrThrow`.
 * Allows for matching against this error type, and having custom handler logic.
 */
export class RPCError extends Error {
  public errors: ResultFailure['errors']

  constructor(errors: ResultFailure['errors']) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(errors[0]?.message ?? errors[0]?.type ?? 'RPC Error')

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    Error.captureStackTrace(this, RPCError)

    this.name = 'RPCError'
    this.errors = errors
  }
}

/**
 * Takes the result of an RPC call, and refines the type to a success object.
 * In case of a failed execution, throws an error.
 * This allows for a `Promise`-like usage of the RPC calls.
 *
 * @example
 * window.api
 *  .invoke(CHANNEL.DOCUMENTS_OPEN, path, format)
 *  .then(unwrapOrThrow)
 *  .then(({value}) => value.id)
 *  .catch((err) => {
 *    if (isRPCError(err)) {
 *      // do something
 *    } else {
 *       // Generic error handler
 *    }
 *  })
 */
const unwrapOrThrow = <V>(result: Result<V>): ResultSuccess<V> => {
  if (result.ok) {
    return result
  } else {
    throw new RPCError(result.errors)
  }
}

export const isRPCError = (error: unknown): error is RPCError => {
  return error instanceof RPCError
}

// -----------------------------------------------------------------------------

export const client = {
  app: {
    version: () =>
      window.api.invoke(CHANNEL.GET_APP_VERSION).then(unwrapOrThrow),
    utils: {
      openLinkInBrowser: (url: string) =>
        window.api
          .invoke(CHANNEL.OPEN_LINK_IN_DEFAULT_BROWSER, url)
          .then(unwrapOrThrow),
    },
    logs: {
      get: () => window.api.invoke(CHANNEL.LOGS_GET).then(unwrapOrThrow),
    },
  },
  config: {
    window: {
      open: () =>
        window.api.invoke(CHANNEL.CONFIG_WINDOW_OPEN).then(unwrapOrThrow),
    },
    getAll: () => window.api.invoke(CHANNEL.CONFIG_GET_ALL).then(unwrapOrThrow),
    set: <K extends ConfigPaths | keyof AppConfigStore>({
      key,
      value,
    }: {
      key: K
      value: K extends ConfigPaths
        ? string
        : K extends keyof AppConfigStore
        ? AppConfigStore[K]
        : never
    }) =>
      window.api
        .invoke(CHANNEL.CONFIG_SET, {
          key,
          value,
        })
        .then(unwrapOrThrow),
  },
  onboarding: {
    open: () =>
      window.api.invoke(CHANNEL.ONBOARDING_WINDOW_OPEN).then(unwrapOrThrow),
    close: () =>
      window.api.invoke(CHANNEL.ONBOARDING_WINDOW_CLOSE).then(unwrapOrThrow),
  },
  launcher: {
    open: () =>
      window.api.invoke(CHANNEL.LAUNCHER_WINDOW_OPEN).then(unwrapOrThrow),
    close: () =>
      window.api.invoke(CHANNEL.LAUNCHER_WINDOW_CLOSE).then(unwrapOrThrow),
  },
  documents: {
    open: (path: string, format?: string) =>
      window.api
        .invoke(CHANNEL.DOCUMENTS_OPEN, path, format)
        .then(unwrapOrThrow),
    alter: (docId: EntityId, path?: string, format?: string) =>
      window.api
        .invoke(CHANNEL.DOCUMENTS_ALTER, docId.toString(), path, format)
        .then(unwrapOrThrow),
    create: (path?: string, format?: string) =>
      window.api
        .invoke(CHANNEL.DOCUMENTS_CREATE, path, format)
        .then(unwrapOrThrow),
    createFilePath: () =>
      window.api.invoke(CHANNEL.DOCUMENTS_CREATE_FILE_PATH).then((result) => {
        if (result.ok) {
          return result
        } else {
          throw new RPCError(result.errors)
        }
      }),
    contents: (docId: EntityId) =>
      window.api
        .invoke(CHANNEL.DOCUMENTS_DUMP, docId.toString())
        .then(unwrapOrThrow),
    dump: (docId: EntityId, format?: string) =>
      window.api
        .invoke(CHANNEL.DOCUMENTS_DUMP, docId.toString(), format)
        .then(unwrapOrThrow),
    load: (docId: EntityId, contents: string, format?: string) =>
      window.api
        .invoke(CHANNEL.DOCUMENTS_LOAD, docId.toString(), contents, format)
        .then(unwrapOrThrow),
    get: (docId: EntityId) =>
      window.api
        .invoke(CHANNEL.DOCUMENTS_GET, docId.toString())
        .then(unwrapOrThrow),
    preview: (docId: EntityId) =>
      window.api
        .invoke(CHANNEL.DOCUMENTS_PREVIEW, docId.toString())
        .then(unwrapOrThrow),
    unsubscribe: ({
      documentId,
      topics,
    }: {
      documentId: EntityId
      topics: string[]
    }) =>
      window.api
        .invoke(CHANNEL.DOCUMENTS_UNSUBSCRIBE, documentId.toString(), topics)
        .then(unwrapOrThrow),
    write: ({
      documentId,
      content,
      format,
    }: {
      documentId: EntityId
      content: string
      format?: string
    }) =>
      window.api
        .invoke(CHANNEL.DOCUMENTS_WRITE, documentId.toString(), content, format)
        .then(unwrapOrThrow),
    writeAs: ({
      documentId,
      path,
      format,
      theme,
    }: {
      documentId: EntityId
      path: string
      format?: string
      theme?: string
    }) =>
      window.api
        .invoke(
          CHANNEL.DOCUMENTS_WRITE_AS,
          documentId.toString(),
          path,
          format,
          theme
        )
        .then(unwrapOrThrow),
  },
  projects: {
    open: (path: string) =>
      window.api.invoke(CHANNEL.PROJECTS_WINDOW_OPEN, path).then(unwrapOrThrow),
    graph: (path: string) =>
      window.api
        .invoke(CHANNEL.PROJECTS_GRAPH, path, 'json')
        .then(unwrapOrThrow),
    contents: (path: string) =>
      window.api.invoke(CHANNEL.PROJECTS_OPEN, path).then(unwrapOrThrow),
    openUsingPicker: () =>
      window.api
        .invoke(CHANNEL.PROJECTS_OPEN_FROM_FILE_PICKER)
        .then(unwrapOrThrow),
    new: () => window.api.invoke(CHANNEL.PROJECTS_NEW).then(unwrapOrThrow),
    write: (path: string, updates: Project) =>
      window.api
        .invoke(CHANNEL.PROJECTS_WRITE, path, updates)
        .then(unwrapOrThrow),
    unsubscribe: (path: string, topics: string[]) =>
      window.api
        .invoke(CHANNEL.PROJECTS_UNSUBSCRIBE, path, topics)
        .then(unwrapOrThrow),
    kernels: {
      languages: () =>
        window.api
          .invoke(CHANNEL.PROJECTS_KERNELS_LANGUAGES)
          .then(unwrapOrThrow),
    },
  },
  plugins: {
    install: (name: string) =>
      window.api.invoke(CHANNEL.PLUGINS_INSTALL, name).then(unwrapOrThrow),
    uninstall: (name: string) =>
      window.api.invoke(CHANNEL.PLUGINS_UNINSTALL, name).then(unwrapOrThrow),
    list: () => window.api.invoke(CHANNEL.PLUGINS_LIST).then(unwrapOrThrow),
    refresh: (plugins: string[] = []) =>
      window.api.invoke(CHANNEL.PLUGINS_REFRESH, plugins).then(unwrapOrThrow),
  },
}
