import { createFileRoute, Outlet, useLocation, useRouter } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/admin/_protect')({
	component: RouteComponent,
});

function RouteComponent() {
	const location = useLocation();
	const router = useRouter();
	const [isAuth, setIsAuth] = useState<boolean | null>(null);

	useEffect(() => {
		const token = localStorage.getItem('adminToken');

		if (token) {
			setIsAuth(true);
		} else {
			setIsAuth(false);
			router.navigate({ to: '/admin/signin' });
		}
	}, [location.pathname, router]);

	if (!isAuth) return null;

	return (
		<div>
			<Outlet />
		</div>
	);
}
