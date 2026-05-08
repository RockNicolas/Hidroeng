import { Navigate, Outlet } from 'react-router-dom'
import { isAdminAuthenticated } from '../services/adminAuth'

function AdminProtectedRoute() {
  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" replace />
  }

  return <Outlet />
}

export default AdminProtectedRoute
