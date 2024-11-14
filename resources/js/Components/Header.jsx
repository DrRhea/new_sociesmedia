import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Button,
    useDisclosure,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar
} from "@nextui-org/react";
import { Link, useForm, usePage } from '@inertiajs/react';
import SigninModal from "@/Components/Auth/SigninModal.jsx";

const Header = () => {
    const { url } = usePage();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const { auth } = usePage().props;
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post('/logout');
    };

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary",
                    "data-[active=true]:text-primary",
                ],
            }}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="pr-3 sm:hidden" justify="center">
                <NavbarBrand>
                    <Link href="/" className="text-xl font-bold text-blue-600 duration-150 hover:text-blue-400">SociesMedia</Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden gap-4 sm:flex" justify="center">
                <NavbarBrand>
                    <Link href="/" className="text-lg font-bold text-blue-600 duration-150 hover:text-blue-400">SociesMedia</Link>
                </NavbarBrand>
                <NavbarItem isActive={url === "/"}>
                    <Link color="foreground" href="/" aria-current="page" className="hover:text-blue-400">
                        Beranda
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={url.startsWith("/multimedia")}>
                    <Link href="/multimedia" className="duration-150 hover:text-blue-400">
                        Multimedia
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={url.startsWith("/materi")}>
                    <Link color="foreground" href="/materi" className="duration-150 hover:text-blue-400">
                        Materi
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={url.startsWith("/forum")}>
                    <Link color="foreground" href="/forum" className="duration-150 hover:text-blue-400">
                        Forum
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={url.startsWith("/artikel")}>
                    <Link color="foreground" href="/artikel" className="duration-150 hover:text-blue-400">
                        Artikel
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={url.startsWith("/peneliti")} className="hidden md:flex">
                    <Link color="foreground" href="/peneliti" className="duration-150 hover:text-blue-400">
                        Peneliti
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={url.startsWith("/kontak")} className="hidden md:flex">
                    <Link color="foreground" href="/kontak" className="duration-150 hover:text-blue-400">
                        Kontak
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {auth.user ? (
                <NavbarContent justify="end">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                as="button"
                                className="transition-transform"
                                showFallback
                                src={auth.user.profile_picture}
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="gap-2 h-14">
                                <Link href="/profile">
                                    <p className="font-semibold">Halo {auth.user.name.split(' ')[0]}!</p>
                                    <p className="mt-1 font-medium text-slate-400">{auth.user.email}</p>
                                </Link>
                            </DropdownItem>
                            <DropdownItem key="profile" className="gap-2" color="primary">
                                <Link href="/dashboard">
                                    <p className="font-semibold">Dashboard</p>
                                </Link>
                            </DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                <button onClick={handleLogout} className="w-full text-left">
                                    Keluar
                                </button>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            ) : (
                <NavbarContent justify="end">
                    <NavbarItem className="lg:flex">
                        <Link href="/login" className="max-md:px-5 max-md:py-2 max-md:text-blue-900 max-md:rounded-xl max-md:bg-blue-200/90">Login</Link>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <Button color="primary" variant="flat" onPress={onOpen}>
                            Daftar
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            )}

            <NavbarMenu>
                <NavbarMenuItem isActive={url === "/"}>
                    <Link className="w-full" href="/">
                        Beranda
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive={url.startsWith("/multimedia")}>
                    <Link className="w-full" href="/multimedia">
                        Multimedia
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive={url.startsWith("/materi")}>
                    <Link className="w-full" href="/materi">
                        Materi
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive={url.startsWith("/forum")}>
                    <Link className="w-full" href="/forum">
                        Forum
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive={url.startsWith("/artikel")}>
                    <Link className="w-full" href="/artikel">
                        Artikel
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive={url.startsWith("/peneliti")}>
                    <Link className="w-full" href="/peneliti">
                        Peneliti
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive={url.startsWith("/kontak")}>
                    <Link className="w-full" href="/kontak">
                        Kontak
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>

            <SigninModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </Navbar>
    );
};

export default Header;