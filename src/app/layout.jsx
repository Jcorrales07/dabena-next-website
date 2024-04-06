import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ["latin"]});

import {Providers} from "@/app/providers";

export const metadata = {
    title: "Dabena GNS",
    description: "Sitio web de Dabena",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className='light'>
        <body className={inter.className}>
        <Providers>
            <Navbar/>
            {children}
            <div>Footer</div>
        </Providers>
        </body>
        </html>
    );
}
