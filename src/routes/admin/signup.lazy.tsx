import { createLazyFileRoute } from '@tanstack/react-router';

import SignUpPage from '@/features/admin/SignUpPage';

export const Route = createLazyFileRoute('/admin/signup')({
	component: SignUpPage,
});
