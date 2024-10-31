"use client";

import * as React from "react";
import { GalleryVerticalEnd, ChevronDown } from "lucide-react"; // Tambahkan ChevronDown
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarFooter,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"; 

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"; 

import {
  Sparkles,
  BadgeCheck,
  CreditCard,
  Bell,
  LogOut,
  ChevronsUpDown,
} from "lucide-react"; 
import { Link } from "@inertiajs/react";

const data = {
  user: {
    name: "Arya Jagadditha",
    email: "user@example.com",
    avatar: "https://via.placeholder.com/150",
  },
  navMain: [
    {
      title: "Beranda",
      url: "#",
      items: [
        { title: "Konten Halaman", url: "/dashboard/beranda/" },
      ],
    },
    {
      title: "Multimedia",
      url: "#",
      items: [
        { title: "Konten Halaman", url: "/dashboard/multimedia/konten-halaman" },
        { title: "Daftar Multimedia", url: "/dashboard/multimedia/daftar-multimedia" },
      ],
    },
    {
      title: "Materi",
      url: "#",
      items: [
        { title: "Konten Halaman", url: "/dashboard/materi/konten-halaman" },
        { title: "Daftar Materi", url: "/dashboard/materi/daftar-materi" },
      ],
    },
    {
      title: "Forum Diskusi",
      url: "#",
      items: [
        { title: "Konten Halaman", url: "#" },
        { title: "Daftar Forum", url: "#" },
      ],
    },
    {
      title: "Artikel",
      url: "#",
      items: [
        { title: "Konten Halaman", url: "/dashboard/artikel/konten-halaman" },
        { title: "Daftar Artikel", url: "/dashboard/artikel/daftar-artikel" },
      ],
    },
    {
      title: "Peneliti",
      url: "#",
      items: [
        { title: "Konten Halaman", url: "/dashboard/peneliti/konten-halaman" },
        { title: "Daftar Peneliti", url: "/dashboard/peneliti/daftar-peneliti" },
      ],
    },
    {
      title: "Daftar Pengguna",
      url: "#",
      items: [
        { title: "Daftar Siswa", url: "#" },
        { title: "Daftar Guru", url: "#" },
      ],
    },
  ],
};

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Dashboard</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <React.Fragment key={item.title}>
                {/* Collapsible untuk setiap grup */}
                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="flex items-center justify-between w-full">
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href={item.url} className="font-medium flex">
                          {item.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                      <ChevronDown className="ml-2 text-gray-400" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {item.items.map((subItem) => (
                      <SidebarMenuItem key={subItem.title}>
                        <SidebarMenuButton asChild>
                          <Link href={subItem.url}>{subItem.title}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </React.Fragment>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={data.user.avatar} alt={data.user.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {data.user.name}
                    </span>
                    <span className="truncate text-xs">
                      {data.user.email}
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={data.user.avatar} alt={data.user.name} />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {data.user.name}
                      </span>
                      <span className="truncate text-xs">
                        {data.user.email}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Sparkles />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
