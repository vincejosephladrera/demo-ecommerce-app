import { useEffect, useState } from "react";
import { useLocation,useRouter } from "@tanstack/react-router";

function useTokenVerify(mode: "dashboard" | "login") {

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const router = useRouter()
  const location = useLocation()

  useEffect(() => {
    const retrievedToken = localStorage.getItem('adminToken')

    if (mode == 'dashboard' && retrievedToken) {
      router.navigate({ to: "/admin/dashboard" })
    } else if (mode === 'login' && !retrievedToken) {
      router.navigate({ to: "/admin/signin" })
    } else {
      setIsLoading(false)
    }
  }, [router, mode, location.pathname])

  return { isLoading }

}

export default useTokenVerify