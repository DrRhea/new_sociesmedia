import * as React from "react";
import { Separator } from "@/components/ui/separator";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import AppSidebar from "@/Components/AppSidebar";
import { usePage } from '@inertiajs/react';

const capitalize = (text) => {
  return text
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function AdminLayout({ children }) {
  const { url } = usePage(); // Mengambil url dari Inertia.js
  const pathnames = url.split('/').filter((x) => x); // Pisahkan URL menjadi array untuk breadcrumb

  return (
    <SidebarProvider style={{ "--sidebar-width": "19rem" }}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex items-center h-16 gap-2 px-4 shrink-0">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4 mr-2" />
          <Breadcrumb>
            <BreadcrumbList>
              {pathnames.map((pathname, index) => {
                // Membuat URL dinamis untuk setiap item breadcrumb
                const link = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return (
                  <React.Fragment key={link}>
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage>{capitalize(pathname)}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href={link}>{capitalize(pathname)}</BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {!isLast && <BreadcrumbSeparator />}
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-col flex-1 gap-4 p-4 pt-0">
          {children}         
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
