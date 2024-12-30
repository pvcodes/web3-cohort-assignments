import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider defaultOpen>
            <AppSidebar />
            <SidebarTrigger />
            <main className="w-full">
                {children}
            </main>
        </SidebarProvider>
    )
}
