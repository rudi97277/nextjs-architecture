/* eslint-disable indent */
import { IModelDefinitions } from '@afx/interfaces/global.iface'
import {
  GetDataGlobal,
} from '@afx/services/portal/global.service'
import { notification } from 'antd'
export type IStateGlobal = {
  example: Array<any>
}
export type IActionGlobal = {
  getDataGlobal: () => void
}

const globalModels: IModelDefinitions<IStateGlobal, IActionGlobal> = {
  name: 'globalState',
  subscriptions:
    (getStates, useActions) =>
      ({ pathname }) => { },
  model: (put, getStates, useActions) => ({
    state: {
      example: []
    },
    actions: {
      async getDataGlobal() {
        try {
          const res = await GetDataGlobal()
          put({
            example: res?.data
          })
        } catch (err: any) {
          notification.warning({
            message: 'Failed to load currency',
            description: err?.meta?.message,
            duration: 2,
            key: 'FUNC-GET-DATA'
          })
        }
      }
    }
  })
}

export default globalModels
