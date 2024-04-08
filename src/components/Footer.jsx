import React from 'react';
import {Divider, Image} from "@nextui-org/react";
import {FaFacebook, FaInstagram} from "react-icons/fa";
import {IoLogoWhatsapp} from "react-icons/io";
import DabenaLogoSVG from "@/components/DabenaLogo";

export default function Footer() {
    return (
        <footer className="lg:px-[64px] lg:py-[80px] lg:gap-[80px] gap-[48px] px-[20px] py-[48px] w-full flex flex-col items-center">
            <section className={'w-full flex flex-col lg:flex-row items-center gap-4 justify-between align-middle'}>
                <DabenaLogoSVG />
                <div>Enlaces</div>
                <div className="flex gap-4">
                    <FaFacebook size={'20px'}/>
                    <IoLogoWhatsapp size={'20px'}/>
                    <FaInstagram size={'20px'}/>
                </div>
            </section>


            <section className={'w-full flex flex-col items-center'}>
                <Divider className='bg-black'/>
                <div className={'pt-[24px] pb-[16px] flex flex-col lg:flex-row items-center gap-4'}>
                    <div>Politica de Privacidad</div>
                    <div>Terminos de Servicio</div>
                    <div>Configuracion de Cookies</div>

                    <div>© 2024 Dabena. Todos los derechos reservados.</div>
                </div>
            </section>
        </footer>
    );
}