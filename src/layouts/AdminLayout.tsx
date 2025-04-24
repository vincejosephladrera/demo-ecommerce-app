import { Outlet } from '@tanstack/react-router';

import LoadingScreen from '@/components/LoadingScreen';
import { Separator } from '@/components/shadcn/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/shadcn/sidebar';
import { AppSidebar } from '@/components/sidebar/Sidebar';
import useTokenVerify from '@/hooks/useTokenVerify';

function AdminLayout() {
	const { isLoading } = useTokenVerify('login');

	if (isLoading) return <LoadingScreen />;

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
					<div className='flex items-center gap-2 px-4'>
						<SidebarTrigger className='-ml-1' />
						<Separator orientation='vertical' className='mr-2 h-4' />
					</div>
				</header>
				<Outlet />
			</SidebarInset>
		</SidebarProvider>
	);
}

export default AdminLayout;
