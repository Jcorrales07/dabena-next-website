import { Sora} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const font = Sora({subsets: ["latin"]});

import { Providers } from "@/app/providers";
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";
import {menu} from "@nextui-org/react";

export const metadata = {
    title: "Dabena GNS",
    description: "Sitio web de Dabena",
};

export default function RootLayout({children}) {
    const menuItems = [
        {
            name: 'Inicio',
            path: '/',
        },
        {
            name: 'Productos',
            path: '/productos',
        },
        {
            name: 'Puntos de venta',
            path: '/puntos-ventas',
        },
        {
            name: 'Quiero ser mayorista!',
            path: '/aplicacion-mayoristas',
        },
    ];

    return (
        <html lang="en" className='light'>
        <body className={font.className}>
            <Providers>
                <NavbarComponent menuItems={menuItems}/>
                {children}
                <Footer menuItems={menuItems} />
            </Providers>
        </body>
        </html>
    );
}
