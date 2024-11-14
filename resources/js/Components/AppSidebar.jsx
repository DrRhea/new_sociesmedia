"use client";

import * as React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
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

export default function AppSidebar() {
  const { post } = useForm();
  const { auth } = usePage().props;

  // Data menu dinamis berdasarkan peran pengguna
  const data = {
    user: {
      name: auth.user.name,
      email: auth.user.email,
      avatar: auth.user.avatar,
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
            { title: "Kelola Konten Tampilan", url: "/dashboard/multimedia/manajemen-multimedia" },
            { title: "Manajemen Multimedia", url: "/dashboard/multimedia/manajemen-multimedia" },
            { title: "Persetujuan Konten", url: "/dashboard/multimedia/manajemen-multimedia" },
        ],
      },    
      {
        title: "Materi",
        url: "#",
        items: [
          { title: "Kelola Konten Tampilan", url: "/dashboard/materi/daftar-materi" },
          { title: "Manajemen Materi", url: "/dashboard/materi/daftar-materi" },
          { title: "Persetujuan Konten", url: "/dashboard/materi/daftar-materi" },
        ],
      },
      {
        title: "Forum Diskusi",
        url: "#",
        items: [
          { title: "Daftar Forum", url: "#" },
        ],
      },
      {
        title: "Artikel",
        url: "#",
        items: [
          { title: "Daftar Artikel", url: "/dashboard/artikel/daftar-artikel" },
        ],
      },
      {
        title: "Peneliti",
        url: "#",
        items: [
          { title: "Daftar Peneliti", url: "/dashboard/peneliti/daftar-peneliti" },
        ],
      },
      {
        title: "Daftar Pengguna",
        url: "#",
        items: [
          { title: "Daftar Siswa", url: "/dashboard/siswa" },
          { title: "Daftar Guru", url: "/dashboard/guru" },
          ...(auth.user.role === 'superadmin' ? [{ title: "Daftar Admin", url: "/dashboard/admin" }] : []), // Tambahkan kondisi ini
        ],
      },
    ],
  };

  const handleLogout = (e) => {
    e.preventDefault();
    post('/logout');
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex items-center justify-center rounded-lg aspect-square size-8 bg-sidebar-primary text-sidebar-primary-foreground">
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
            {data.navMain.map((item) => {
              const [isOpen, setIsOpen] = React.useState(true); // Set default to true

              const handleToggle = () => {
                setIsOpen(!isOpen); // Toggle state
              };

              return (
                <React.Fragment key={item.title}>
                  <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center justify-between w-full cursor-pointer" onClick={handleToggle}>
                        <SidebarMenuItem className="w-full">
                          <SidebarMenuButton className='flex justify-between font-medium'>
                            {item.title}
                            <ChevronDown className={`ml-2 w-5 text-slate-950 transition-transform duration-200 ${isOpen ? '-rotate-90' : ''}`} />
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </div>
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
              );
            })}
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
                  <Avatar className="w-8 h-8 rounded-lg">
                    <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                    <AvatarFallback className="rounded-lg"></AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-sm leading-tight text-left">
                    <span className="font-semibold truncate">
                      {auth.user.name}
                    </span>
                    <span className="text-xs truncate">
                      {auth.user.email}
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
                    <Avatar className="w-8 h-8 rounded-lg">
                      <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                      <AvatarFallback className="rounded-lg"></AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-sm leading-tight text-left">
                      <span className="font-semibold truncate">
                        {auth.user.name}
                      </span>
                      <span className="text-xs truncate">
                        {auth.user.email}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link href="/">
                    <DropdownMenuItem>
                      Kembali ke halaman utama
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Notifkasi
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Profil Akun
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <button className="flex items-center">
                    <span>Log out</span>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
