import { IModelDefinitions } from '@afx/interfaces/global.iface'
import { notification } from 'antd'


// declaring interface Action for Model (Required)
export type IActionApprove = {}

// declaring interface State for Model (Required)
export type IStateApprove = {}

const listApproveModels: IModelDefinitions<IStateApprove, IActionApprove> = {
  name: 'Approve',
  subscriptions:
    (getStates, useActions) =>
      ({ pathname }) => {
        if (pathname === '/portal') {
          return 'case'
        }
      },

  model: (put, getStates, getActions) => ({
    state: {},

    actions: {}
  })
}

export default listApproveModels
