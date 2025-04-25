import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'

import { signIn } from './admin.api'
import { AdminLoginSchema, type AdminLoginSchemaType } from './admin.types'

const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<AdminLoginSchemaType>({
    resolver: zodResolver(AdminLoginSchema),
  })

  const { handleSubmit, control } = form

  const router = useRouter()

  const loginMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      localStorage.setItem('adminToken', data.token)
      router.navigate({ to: '/admin/dashboard' })
    },
    onError: (error) => {
      console.error(error)
    },
    onMutate: () => {
      setIsLoading(true)
    }
  })



  const onSubmitHandler = (data: AdminLoginSchemaType) => {
    loginMutation.mutate(data)
  }


  return {
    handleSubmit: handleSubmit(onSubmitHandler),
    control,
    form,
    isLoading
  }


}

export default useLoginForm