import { createLazyFileRoute } from '@tanstack/react-router';
import LoginPage from '@/features/admin/LoginPage';

export const Route = createLazyFileRoute('/admin/signin')({
	component: LoginPage,
});
