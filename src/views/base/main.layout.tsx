/* eslint-disable max-lines */
import React from 'react'
import { Layout } from 'antd'
export interface IPortals {
  children: any
}
export default function Portal(props: IPortals): React.JSX.Element {

  return (
    <Layout className="overflow-hidden">
      sider or anything
      <Layout className="overflow-y-hidden h-screen">
        main content or anything
        {props?.children}
      </Layout>
    </Layout>
  )
}
