import { BrowserWindow } from 'electron'
import { launcherHandlers } from '.'
import { configHandlers } from '../config'
import { registerBaseMenu } from '../menu'
import { projectHandlers } from '../project'
import { createWindow } from '../window'
import { onUiLoaded } from '../window/windowUtils'

let launcherWindow: BrowserWindow | null

const launcherUrl = '/'

export const openLauncherWindow = () => {
  if (launcherWindow) {
    launcherWindow.show()
    return launcherWindow
  }

  launcherWindow = createWindow(launcherUrl, {
    height: 380,
    width: 760,
    maxHeight: 380,
    maxWidth: 960,
    minHeight: 310,
    minWidth: 600,
    center: true,
  })

  // The ID needs to be stored separately from the window object. Otherwise an error
  // is thrown because the time remove handlers are called the window object is already destroyed.
  const windowId = launcherWindow.id

  configHandlers.register(windowId)
  projectHandlers.register(windowId)
  launcherHandlers.register(windowId)

  launcherWindow.on('closed', () => {
    launcherHandlers.remove(windowId)
    configHandlers.remove(windowId)
    launcherWindow = null
  })

  onUiLoaded(launcherWindow.webContents)(() => {
    launcherWindow?.show()
  })

  launcherWindow.on('focus', () => {
    registerBaseMenu()
  })

  launcherWindow?.loadURL(launcherUrl)

  return launcherWindow
}

export const closeLauncherWindow = () => {
  launcherWindow?.close()
}
