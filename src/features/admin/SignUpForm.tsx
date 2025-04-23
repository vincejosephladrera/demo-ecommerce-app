// import React from 'react';
import * as Form from '@/components/shadcn/form';
import { Input } from '@/components/shadcn/input';
import { AdminSignUpSchema, AdminSignupSchemaType } from './admin.types';
import { useForm, type UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/shadcn/button';
import { useMutation } from '@tanstack/react-query';
import { signUp } from './admin.api';
import { useRouter } from '@tanstack/react-router';

function SignUpFormView({
	form,
	onSubmitHandler,
}: {
	form: UseFormReturn<AdminSignupSchemaType>;
	onSubmitHandler: (data: AdminSignupSchemaType) => void;
}) {
	const { control, handleSubmit } = form;

	return (
		<Form.Form {...form}>
			<form onSubmit={handleSubmit(onSubmitHandler)} className=' flex flex-col gap-6'>
				<Form.FormField
					control={control}
					name='name'
					render={({ field }) => (
						<Form.FormItem>
							<Form.FormLabel>Name</Form.FormLabel>
							<Form.FormControl>
								<Input placeholder='Enter your name' {...field} />
							</Form.FormControl>
							<Form.FormMessage />
						</Form.FormItem>
					)}
				/>
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
				<Button>Sign up</Button>
			</form>
		</Form.Form>
	);
}

function SignUpForm() {
	const form = useForm<AdminSignupSchemaType>({
		resolver: zodResolver(AdminSignUpSchema),
	});

	const router = useRouter();

	const signUpMutation = useMutation({
		mutationFn: signUp,
		onSuccess: (data) => {
			localStorage.setItem('adminToken', data.token);
			router.navigate({ to: '/admin/dashboard' });
		},
		onError: (error: unknown) => {
			console.log(error);
		},
	});

	const onSubmitHandler = (data: AdminSignupSchemaType) => {
		signUpMutation.mutate(data);
	};

	return <SignUpFormView form={form} onSubmitHandler={onSubmitHandler} />;
}

export default SignUpForm;
