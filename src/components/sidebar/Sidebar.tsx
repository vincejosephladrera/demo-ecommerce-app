'use client'

import * as React from 'react'
import { IconDashboard } from '@tabler/icons-react'
import { Package,Settings2 } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/shadcn/sidebar'
import { NavMain } from '@/components/sidebar/NavMain'
import { NavUser } from '@/components/sidebar/NavUser'

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: IconDashboard,
      isActive: false,
    },
    {
      title: 'Products',
      url: '#',
      icon: Package,
      isActive: true,
    },
    {
      title: 'Maintenance',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'Administrators',
          url: '#',
        },
        {
          title: 'Product Categories',
          url: '#',
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader />
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
