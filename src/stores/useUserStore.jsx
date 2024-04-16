// Create a store with a state that matches User.jsx:
// userData, loading, error, fetchUserData

import {create} from "zustand"

export const useUserStore = create(set => ({
  userData: null,
  loading: false,
  error: null,

  fetchUserData : async () => {
    set({loading: true, error: null })
    try{
      const response = await fetch("https://randomuser.me/api/")

      if (!response.ok) {
        throw new Error("fetch  didn't work")
      }
      const data = await response.json()
      console.log(data)
      set({ userData: data.results[0] })

    } catch(error) {
      console.log("error:" error)
      set({ error: error })

    } finally {
      set({ loading: false })
    }
  }
}))
