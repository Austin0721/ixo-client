import { createAction } from '../../lib/redux_utils/actions'
import { KeysafeResult, KEYSAFE_RESULT } from './keysafe_actions'

export function initKeysafe() {
  return (dispatch): void => {
    if (!window['ixoKs']) {
      dispatch(
        createAction<KeysafeResult>(KEYSAFE_RESULT.type, {
          keysafe: null,
          error: { error: 'Please install IXO Keysafe!' },
        }),
      )
    } else {
      const IxoInpageProvider = window['ixoKs']
      const keysafe = new IxoInpageProvider()

      if (keysafe) {
        dispatch(
          createAction<KeysafeResult>(KEYSAFE_RESULT.type, {
            keysafe: keysafe,
            error: {},
          }),
        )
      } else {
        dispatch(
          createAction<KeysafeResult>(KEYSAFE_RESULT.type, {
            keysafe: null,
            error: { error: 'Please log into IXO Keysafe' },
          }),
        )
      }
    }
  }
}

export function resetIxo() {
  return (dispatch): void => {
    dispatch(
      createAction<KeysafeResult>(KEYSAFE_RESULT.type, {
        keysafe: null,
        error: {},
      }),
    )
  }
}
