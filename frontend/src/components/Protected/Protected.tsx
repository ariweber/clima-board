import { Navigate } from 'react-router'
import { getUserName } from '../../utils/user.utils'

type ProtectedProps = {
  children: React.ReactNode
}

export default function Protected({ children }: ProtectedProps) {
  const user = getUserName()

  if (!user) {
    return <Navigate to="/" replace />
  }

  return children
}
