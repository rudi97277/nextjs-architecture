import { IPayloadLogin } from '@afx/interfaces/main/auth.service'
import { rest } from '@afx/utils/config.rest'
import request from '@afx/utils/request.util'

export function ExampleLogin(data: IPayloadLogin) {
  return request<any>({
    url: rest.auth.exampleLogin,
    data,
    method: 'POST'
  })
}
