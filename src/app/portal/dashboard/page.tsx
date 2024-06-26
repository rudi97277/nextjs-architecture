import { lazy } from 'react'

const Dashboard = lazy(
  () => import('@afx/views/portal/dashboard/index.layout')
)

export default function RouteDashboard() {
  return <Dashboard />
}
