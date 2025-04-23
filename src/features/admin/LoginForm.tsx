// import React from 'react';
import * as Form from '@/components/shadcn/form';
import { Input } from '@/components/shadcn/input';
import { AdminLoginSchema, AdminLoginSchemaType } from './admin.types';
import { useForm, type UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/shadcn/button';
import { useMutation } from '@tanstack/react-query';
import { signIn } from './admin.api';
import { useRouter } from '@tanstack/react-router';

function LoginFormView({
	form,
	onSubmitHandler,
}: {
	form: UseFormReturn<AdminLoginSchemaType>;
	onSubmitHandler: (data: AdminLoginSchemaType) => void;
}) {
	const { control, handleSubmit } = form;

	return (
		<Form.Form {...form}>
			<form onSubmit={handleSubmit(onSubmitHandler)} className=' flex flex-col gap-6'>
				<Form.FormField
					control={control}
					name='email'
					render={({ field }) => (
						<Form.FormItem>
							<Form.FormLabel>Email</Form.FormLabel>
							<Form.FormControl>
								<Input placeholder='Enter your email' {...field} />
							</Form.FormControl>
							<Form.FormMessage />
						</Form.FormItem>
					)}
				/>
				<Form.FormField
					control={control}
					name='password'
					render={({ field }) => (
						<Form.FormItem>
							<Form.FormLabel>Password</Form.FormLabel>
							<Form.FormControl>
								<Input placeholder='Enter your password' {...field} type='password' />
							</Form.FormControl>
							<Form.FormMessage />
						</Form.FormItem>
					)}
				/>
				<Button>Sign in</Button>
			</form>
		</Form.Form>
	);
}

function LoginForm() {
	const form = useForm<AdminLoginSchemaType>({
		resolver: zodResolver(AdminLoginSchema),
	});

	const router = useRouter();

	const loginMutation = useMutation({
		mutationFn: signIn,
		onSuccess: (data) => {
			localStorage.setItem('adminToken', data.token);
			router.navigate({ to: '/admin/dashboard' });
		},
	});

	const onSubmitHandler = (data: AdminLoginSchemaType) => {
		loginMutation.mutate(data);
		router.navigate({ to: '/admin/dashboard' });
	};

	return <LoginFormView form={form} onSubmitHandler={onSubmitHandler} />;
}

export default LoginForm;
