"use client"

import Image from "next/image";
import {Splide, SplideSlide} from '@splidejs/react-splide';

import '../css/splide-lightgreen.css'

export default function ImageCarousel() {
    return (
        <main className="splide_carousel flex min-h-screen flex-col items-center justify-between md:mt-4/65">
            <Splide aria-label="Image Carousel" options={{
                type: 'fade',
                rewind: true,
                autoplay: true,
            }}>
                <SplideSlide>
                    <Image src="/2.png" alt="Image 1" sizes={'100vw'} width={100} height={100} style={{
                        width: '100%',
                        height: 'auto',
                    }}/>
                </SplideSlide>
                <SplideSlide>
                    <Image src="/3.png" alt="Image 1" sizes={'100vw'} width={100} height={100} style={{
                        width: '100%',
                        height: 'auto',
                    }}/>
                </SplideSlide>
                <SplideSlide>
                    <Image src="/4.png" alt="Image 1" sizes={'100vw'} width={100} height={100} style={{
                        width: '100%',
                        height: 'auto',
                    }}/>
                </SplideSlide>
            </Splide>
        </main>
    );
}