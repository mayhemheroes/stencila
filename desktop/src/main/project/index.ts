import { ipcMain } from 'electron'
import { projects } from 'stencila'
import { CHANNEL } from '../../preload'
import { openProject } from './handlers'
import { openProjectWindow } from './window'

export const registerProjectHandlers = () => {
  ipcMain.handle(
    CHANNEL.SHOW_PROJECT_WINDOW,
    async (_event, directoryPath: string) => {
      return openProjectWindow(directoryPath)
    }
  )

  ipcMain.handle(CHANNEL.SELECT_PROJECT_DIR, async () => {
    openProject()
  })

  ipcMain.handle(
    CHANNEL.OPEN_PROJECT,
    async (_event, directoryPath: string) => {
      return openProjectWindow(directoryPath)
    }
  )

  ipcMain.handle(
    CHANNEL.GET_PROJECT_FILES,
    async (ipcEvent, directoryPath: string) => {
      return projects.open(directoryPath, (_topic, projectEvent) => {
        ipcEvent.sender.send(CHANNEL.GET_PROJECT_FILES, projectEvent)
      })
    }
  )
}
