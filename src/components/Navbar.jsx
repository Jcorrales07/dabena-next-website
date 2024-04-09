"use client"

import {
    Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, ButtonGroup
} from "@nextui-org/react";

import {
    Image,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link
} from "@nextui-org/react";
import {useState} from "react";
import {DabenaLogoTEXT} from "@/components/DabenaLogo";


export default function NavbarComponent({menuItems}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar maxWidth={'full'} onMenuOpenChange={setIsMenuOpen} isBordered={true} shouldHideOnScroll={true}>
            <NavbarContent className='flex justify-between'>
                <NavbarBrand>
                    <DabenaLogoTEXT />
                </NavbarBrand>

                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item.name}-${index}`}>
                        <Link
                            color='foreground'
                            href={item.path}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href={item.path}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

function MobileMenu() {
    return (
        <div className={'flex lg:hidden cursor-pointer'}>
            <Dropdown backdrop={'blur'}>
                <DropdownTrigger>
                    <Image src={'/assets/menuIcon.svg'} width={25} height={25} alt={'icono para acceder al menu'}/>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">Inicio</DropdownItem>
                    <DropdownItem key="copy">Productos</DropdownItem>
                    <DropdownItem key="edit">Puntos de venta</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                        Quiero ser mayorista!
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

function DesktopMenu() {
    return (
        <nav className={'hidden lg:flex items-center gap-2'}>
            <Button className={'text-black text-medium'} color={'success'} variant={'light'}>Inicio</Button>
            <Button className={'text-black text-medium'} color={'success'} variant={'light'}>Productos</Button>
            <Button className={'text-black text-medium'} color={'success'} variant={'light'}>Puntos de venta</Button>
            <Button className={'text-black text-medium'} color={'success'} variant={'light'}>Quiero ser
                mayorista!</Button>
        </nav>
    );
}



