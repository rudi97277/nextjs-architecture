import { rest } from '@afx/utils/config.rest'
import request from '@afx/utils/request.util'

export function GetDataGlobal() {
  return request<any>({
    url: rest.global.axample,
    method: 'GET'
  })
}
