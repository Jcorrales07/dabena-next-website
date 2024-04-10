import ProductsCatalog from "@/components/products-page/ProductsCatalog";
import {InfoSection} from "@/components/landing-page/CTASections";
import ContactUsSection from "@/components/landing-page/ContactUsSection";

export default function Productos() {
    return (
        <main className="w-full flex flex-col items-center">
            <ProductsCatalog />
            <InfoSection img_url={"/assets/img5.jpg"} img_alt={'random img'} title={"Beneficios"} subtext={"Las medicinas naturales ofrecen una alternativa segura y efectiva a las medicinas tradicionales. Están compuestas por ingredientes naturales que ayudan a mejorar la salud de manera holística, sin los efectos secundarios negativos que pueden tener los medicamentos químicos."} />
            <ContactUsSection />
        </main>
    );
}