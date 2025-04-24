import { useRouter } from "@tanstack/react-router";


function useLogout() {

  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem('adminToken')
    router.navigate({ to: 'admin/signin' })
  }

  return { handleLogout }

}

export default useLogout;