import { Button, Col, Form, Input, Row, Spin, notification } from 'antd'
import './login.scss'
import { useRouter } from 'next/navigation'
import RegexText from '@afx/utils/regex.util'
import { useLynxStore } from '@lynx/store/core'
import { IActionAuth, IStateAuth } from '@lynx/models/main/auth.model'
import LynxStorages from '@afx/utils/storage.util'
import { useLayoutEffect } from 'react'

export default function Login(): React.JSX.Element {
  const router = useRouter()
  const token = LynxStorages.getItem('EXAMPLE@UTOKEN').data[0]
  const { useActions, isLoading } = useLynxStore<IStateAuth, IActionAuth>('auth')

  const [form] = Form.useForm()
  const LOADINGS = isLoading('exampleLogin') || false

  const handleLogin = () => {
    return form
      .validateFields()
      .then(values => {
        useActions<'exampleLogin'>(
          'exampleLogin',
          [
            values,
            (status: number) => {
              if (status === 200) {
                router.replace('/portal')
                setTimeout(() => {
                  router.replace(`${window.location.origin}/portal`)
                }, 300)
              }
            }
          ],
          true
        )
      })
      .catch(er => {
        return notification.warning({
          message: 'Required Form',
          description: er?.errorFields?.[0]?.errors
        })
      })
  }

  useLayoutEffect(() => {
    if (typeof token === 'string' || token !== null) {
      router.replace('/portal')
    } else {
    }
  }, [])

  return (
    <Row className="h-screen">
      <Col xs={24} md={24} lg={24} className=" flex items-center justify-center">
        <Spin spinning={false}>
          <div className="!w-full  px-[56px] sm:px-[100px] md:px-[56px] lg:px-[100px]  xl:px-[156px]  2xl:mt-[80px] lg:mt-[32px] sm:mt-[32px]  ">
            <Form
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
              className="mt-8"
            >
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  { required: true },
                  {
                    pattern: RegexText.email(),
                    message: 'Wrong format of email'
                  }
                ]}
              >
                <Input
                  placeholder="name@gmail.com"
                  size="large"
                  disabled={LOADINGS}
                  className="h-12 rounded-[12px]"
                  type="email"
                  style={{ padding: '18px', margin: '0px' }}
                />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true }]}
                help={
                  <p className="text-[10px] font-normal text-[#989898]">
                    Characters must be min 8 ,have at least capital letters,
                    lowercase letters & numbers
                  </p>
                }
              >
                <Input.Password
                  size="small"
                  disabled={LOADINGS}
                  className="h-12 rounded-[12px]"
                  onPressEnter={handleLogin}
                  style={{ padding: '0px 18px', margin: '0px' }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type='primary'
                  className="flex !text-black justify-center"
                  disabled={LOADINGS}
                  style={{
                    width: '100%',
                    marginTop: '12px',
                    fontSize: '14px',
                    color: '#FFF'
                  }}
                  onClick={handleLogin}
                >LOGIN</Button>
              </Form.Item>
            </Form>
          </div>
        </Spin>
      </Col>
    </Row>
  )
}
