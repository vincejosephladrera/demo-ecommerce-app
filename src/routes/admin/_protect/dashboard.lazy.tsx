import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/admin/_protect/dashboard')({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>This is main dashboard</div>;
}
