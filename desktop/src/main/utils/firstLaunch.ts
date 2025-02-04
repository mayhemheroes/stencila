import { UnprotectedStoreKeys } from '../../preload/stores'
import { getConfig, setConfig } from '../config/handlers'

/**
 * Checks whether the app is being launched for the first time
 */
export const isFirstLaunch = (): boolean => {
  const config = getConfig().app[UnprotectedStoreKeys.FIRST_LAUNCH]
  return typeof config === 'boolean' ? config : true
}

export const setFirstLaunchState = (value: boolean) => {
  setConfig(UnprotectedStoreKeys.FIRST_LAUNCH, value)
}
