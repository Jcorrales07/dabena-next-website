import { Sora} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const font = Sora({subsets: ["latin"]});

import { Providers } from "@/app/providers";
import NavbarComponent from "@/components/Navbar";

export const metadata = {
    title: "Dabena GNS",
    description: "Sitio web de Dabena",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className='light'>
        <body className={font.className}>
            <Providers>
                <NavbarComponent/>
                {children}
                <div>Footer</div>
            </Providers>
        </body>
        </html>
    );
}
