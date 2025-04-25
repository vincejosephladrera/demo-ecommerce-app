import LoadingScreen from '@/components/LoadingScreen'
import { Button } from '@/components/shadcn/button'
import * as Form from '@/components/shadcn/form'
import { Input } from '@/components/shadcn/input'

import useSignupForm from './useSignupForm'

function SignUpForm() {
  const { form, handleSubmit, control, isLoading } = useSignupForm()

  if (isLoading) return <LoadingScreen />

  return (
    <Form.Form {...form}>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-6">
        <Form.FormField
          control={control}
          name="name"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Name</Form.FormLabel>
              <Form.FormControl>
                <Input placeholder="Enter your name" {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
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
        <Button>Sign up</Button>
      </form>
    </Form.Form>
  )
}

export default SignUpForm
