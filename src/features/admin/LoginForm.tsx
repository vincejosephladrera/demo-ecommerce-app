// import React from 'react';

import LoadingScreen from '@/components/LoadingScreen'
import { Button } from '@/components/shadcn/button'
import * as Form from '@/components/shadcn/form'
import { Input } from '@/components/shadcn/input'

import useLoginForm from './useLoginForm'

function LoginForm() {
  const { handleSubmit, control, form, isLoading } = useLoginForm()

  if (isLoading) return <LoadingScreen />

  return (
    <Form.Form {...form}>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-6">
        <Form.FormField
          control={control}
          name="email"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Email</Form.FormLabel>
              <Form.FormControl>
                <Input placeholder="Enter your email" {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={control}
          name="password"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Password</Form.FormLabel>
              <Form.FormControl>
                <Input
                  placeholder="Enter your password"
                  {...field}
                  type="password"
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Button>Sign in</Button>
      </form>
    </Form.Form>
  )
}

export default LoginForm
