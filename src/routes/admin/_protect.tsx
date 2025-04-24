import { createFileRoute } from '@tanstack/react-router';

import LoadingScreen from '@/components/LoadingScreen';
import AdminLayout from '@/layouts/AdminLayout';

export const Route = createFileRoute('/admin/_protect')({
	component: AdminLayout,
	pendingComponent: LoadingScreen,
});
