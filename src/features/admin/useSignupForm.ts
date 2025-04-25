import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'

import { signUp } from './admin.api'
import { AdminSignUpSchema, type AdminSignupSchemaType } from './admin.types'
import { boolean } from 'zod';

const useSignupForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<AdminSignupSchemaType>({
    resolver: zodResolver(AdminSignUpSchema),
  })

  const { handleSubmit, control } = form

  const router = useRouter()

  const signUpMutation = useMutation({
    mutationFn: signUp,

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



  const onSubmitHandler = (data: AdminSignupSchemaType) => {
    signUpMutation.mutate(data)
  }


  return {
    handleSubmit: handleSubmit(onSubmitHandler),
    control,
    form,
    isLoading
  }


}

export default useSignupForm