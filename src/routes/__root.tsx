import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import LoadingScreen from '@/components/LoadingScreen';

export const Route = createRootRoute({
	component: RouteComponent,
	pendingComponent: LoadingScreen,
});

function RouteComponent() {
	return (
		<>
			<Outlet />
			<TanStackRouterDevtools position='bottom-left' />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
}
