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
    useDisclosure
} from "@nextui-org/react";
import { Link } from '@inertiajs/react';
import SigninModal from "@/Components/Auth/SigninModal.jsx";
import { usePage } from '@inertiajs/react';

const Header = () => {
    const { url } = usePage();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link href="/" className="font-bold text-inherit">SociesMedia</Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <Link href="/" className="font-bold text-inherit">SociesMedia</Link>
                </NavbarBrand>
                <NavbarItem isActive={url === "/"}>
                    <Link color="foreground" href="/" aria-current="page">
                        Beranda
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={url === "/multimedia"}>
                    <Link href="/multimedia">
                        Multimedia
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={url === "/materi"}>
                    <Link color="foreground" href="/materi">
                        Materi
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={url === "/forum"}>
                    <Link color="foreground" href="/forum">
                        Forum
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={url === "/artikel"}>
                    <Link color="foreground" href="/artikel">
                        Artikel
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={url === "/peneliti"} className="hidden md:flex">
                    <Link color="foreground" href="/peneliti">
                        Peneliti
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button color="primary" variant="flat" onPress={onOpen}>
                        Daftar
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem isActive={url === "/"}>
                    <Link className="w-full" href="/">
                        Beranda
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive={url === "/multimedia"}>
                    <Link className="w-full" href="/multimedia">
                        Multimedia
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive={url === "/materi"}>
                    <Link className="w-full" href="/materi">
                        Materi
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive={url === "/forum"}>
                    <Link className="w-full" href="/forum">
                        Forum
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive={url === "/artikel"}>
                    <Link className="w-full" href="/artikel">
                        Artikel
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive={url === "/peneliti"}>
                    <Link className="w-full" href="/peneliti">
                        Peneliti
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive={url === "/kontak"}>
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
