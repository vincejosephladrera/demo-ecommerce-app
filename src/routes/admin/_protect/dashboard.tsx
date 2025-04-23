import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/_protect/dashboard')({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>This is the initial dashboard page</div>;
}
