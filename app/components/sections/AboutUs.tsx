import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import { MoveRight } from "lucide-react";
import AboutUs1 from "@/app/assets/about-us1.png";
import AboutUs2 from "@/app/assets/about-us2.png";
import AboutUs3 from "@/app/assets/about-us3.png";
import AboutUs4 from "@/app/assets/about-us4.png";
import AboutUs5 from "@/app/assets/about-us5.png";

const images = [
    { src: AboutUs1, alt: "about us pict1" },
    { src: AboutUs2, alt: "about us pict2" },
    { src: AboutUs3, alt: "about us pict3" },
    { src: AboutUs4, alt: "about us pict4" },
    { src: AboutUs5, alt: "about us pict5" },
];

export const AboutUs = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const translateX = useTransform(scrollYProgress, [0, 1], [1000, -1750]);
    return (
        <section className="bg-white border-b border-gray-200 md:overflow-x-clip mt-6 pt-10 pb-16 sm:px-0">
            <div className="container md:grid md:grid-cols-2 sm:flex sm:flex-col gap-10 md:w-full md:pb-20 md:pt-16 px-12 items-start">
                <h1 className="md:text-6xl text-5xl font-regular tracking-tight text-black/80">
                    About Us
                </h1>
                <div className="mt-2">
                    <h5 className="font-normal md:text-base text-sm mb-5">
                        At Flow, we're committed to a sustainable future. As a pioneering
                        force in the green energy sector, we've been at the forefront of the
                        transition to clean, renewable power sources.
                    </h5>
                    <h5 className="font-normal md:text-base text-sm mb-12">
                        Our mission is simple yet profound: to create a world where energy is not only abundant
                        but also environmentally responsible. We believe that by harnessing
                        the power of nature, we can power the world and protect it
                        simultaneously.
                    </h5>
                    <button className="btn btn-primary">
                        Read more <MoveRight className="h-4 ml-2" />
                    </button>
                </div>
            </div>
            <div className="overflow-hidden mt-6 md:mt-0 py-6 [mask-image:linear-gradient(90deg,transparent_10%,black_30%,black_70%,transparent_90%)]">
                <motion.div className="flex flex-row gap-5 justify-center pr-5" style={{
                    translateX
                }}>
                    {images.map(({ src, alt }) => (
                        <Image
                            key={alt}
                            src={src}
                            alt={alt}
                            width={240}
                            className="flex-none md:w-[220px] w-[160px] h-auto rounded-xl"
                        />
                    ))}
                    {images.map(({ src, alt }) => (
                        <Image
                            key={alt}
                            src={src}
                            alt={alt}
                            width={240}
                            className="flex-none w-[220px] h-auto rounded-3xl"
                        />
                    ))}
                </motion.div>
            </div>
            <div className="container mt-16 md:mt-36 mb-24 flex flex-col gap-10 items-center lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col justify-center text-center">
                    <h1 className="text-4xl font-medium tracking-tight">5,000 Mwh</h1>
                    <p className="mt-3">Renewable Energy Generated</p>
                </div>
                <div className="flex flex-col justify-center text-center">
                    <h1 className="text-4xl font-medium tracking-tight">2,500+</h1>
                    <p className="mt-3">Metric Tons of CO2 Reduced</p>
                </div>
                <div className="flex flex-col justify-center text-center">
                    <h1 className="text-4xl font-medium tracking-tight">10,000+</h1>
                    <p className="mt-3">Customers Served</p>
                </div>
                <div className="flex flex-col justify-center text-center">
                    <h1 className="text-4xl font-medium tracking-tight">15%</h1>
                    <p className="mt-3">Average Energy Saved</p>
                </div>
            </div>
        </section>
    );
};
