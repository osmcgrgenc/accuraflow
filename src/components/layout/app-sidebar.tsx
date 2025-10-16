import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { AppLogo } from '@/components/icons';
import Link from 'next/link';
import { SidebarNav } from './sidebar-nav';

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2">
          <AppLogo className="size-8 text-sidebar-primary" />
          <span className="text-lg font-semibold font-headline text-sidebar-foreground">AccrualFlow</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarNav />
      </SidebarContent>
      <SidebarFooter>
        {/* Can add footer items here if needed */}
      </SidebarFooter>
    </Sidebar>
  );
}
