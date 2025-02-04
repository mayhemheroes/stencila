import { Toast } from '@stencila/components'
import { captureError } from '../../../preload/errors'
import { isRPCError } from '../../client'

const toastController = Toast.toastController({
  position: Toast.ToastPositions.bottomEnd,
  type: Toast.ToastTypes.neutral,
  dismissable: true,
  duration: 8_000,
})

export const errorToast = (error: unknown) => {
  let message = 'Something went wrong'

  if (isRPCError(error)) {
    message = error.errors[0]?.message ?? error.message
  } else if (error instanceof Error) {
    message = error.message
  } else if (typeof error === 'string') {
    message = error
  }

  toastController.present(message, {
    type: Toast.ToastTypes.danger,
  })
}

export const showAndCaptureError = (error: Error | PromiseRejectionEvent) => {
  captureError(error)
  if (error instanceof PromiseRejectionEvent) {
    errorToast(error.reason)
  } else {
    errorToast(error.message)
  }
}

export const showUnhandledErrors = () => {
  window.onunhandledrejection = (e: PromiseRejectionEvent) => {
    captureError(e)
    errorToast(e.reason)
  }
}
