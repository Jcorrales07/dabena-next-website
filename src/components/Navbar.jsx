"use client"

import Image from "next/image";
import {
    Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, ButtonGroup
} from "@nextui-org/react";

export default function Navbar() {

    return <header className="fixed right-0 left-0 top-0 py-3 px-6 border-b-2/50 bg-white backdrop-blur-lg z-[100] border-black shadow-[0_35px_60px_-15px_rgba(68,64,60,0.5)]">
        <div className='flex flex-row justify-between'>
            <Image src={'/assets/LogoDabena.svg'} alt={'Logo de Dabena'} width={40} height={40}/>
            <MobileMenu/>
            <DesktopMenu/>
        </div>
    </header>
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
            <Button className={'text-black text-medium'} color={'success'}  variant={'light'}>Productos</Button>
            <Button className={'text-black text-medium'} color={'success'}  variant={'light'}>Puntos de venta</Button>
            <Button className={'text-black text-medium'} color={'success'}  variant={'light'}>Quiero ser mayorista!</Button>
        </nav>
    );
}

