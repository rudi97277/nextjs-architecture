import { IModelDefinitions } from '@afx/interfaces/global.iface'
import { IPayloadLogin } from '@afx/interfaces/main/auth.service'
import {
  ExampleLogin
} from '@afx/services/main/auth.service'
import LynxStorages from '@afx/utils/storage.util'
import { notification } from 'antd'

export type IStateAuth = {}

export type IActionAuth = {
  exampleLogin: (
    params: IPayloadLogin,
    callback: (status: number) => void
  ) => void
}

const modelAuth: IModelDefinitions<IStateAuth, IActionAuth> = {
  name: 'auth',
  subscriptions:
    (getStates, useActions) =>
      ({ pathname }) => { },
  model: (put, getState, useActions) => ({
    state: {},
    actions: {
      async exampleLogin(params, callback) {
        try {
          // const res = await ExampleLogin(params) //real api
          const res = 'dummy'
          callback(200)

          // !use this to validate response
          // if (res.meta.code == 20000) {
          //   LynxStorages.setItem('EXAMPLE@UTOKEN', res.data.access_token)
          //   notification.success({
          //     message: 'Success',
          //     description: 'Login is authenticated',
          //     duration: 1.5
          //   })
          //   return new Promise(resolve => {
          //     setTimeout(() => {
          //       callback(200)
          //       resolve()
          //     }, 1200)
          //   })
          // } else {
          //   throw new Error(res.meta.message)
          // }
        } catch (err: any) {
          notification.warning({
            message: 'Failed to load data',
            description: err?.meta?.message,
            duration: 2,
            key: 'FUNC-LOGIN'
          })
        }
      }
    }
  })
}

export default modelAuth
