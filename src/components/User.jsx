import { useEffekt } from 'react'
import { useUserStore } from "../stores/useUserStore"

export const User = () => {
const { userData, loading, error, fetchUserData } = useUserStore()

useEffekt(() => {
  fetchUserData()
}, [fetchUserData])

if (loading) {
  return (
    <div>Loading...</div>
  )
}
}
