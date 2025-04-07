"use client";

import Image from "next/image";
import logoImage from "@/app/assets/Icon.svg";
// import logoImage from "@/assets/images/logo.svg";
import Button from "@/app/components/maincomp/Button";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { animate, AnimatePresence, motion, useAnimate } from "framer-motion";

const navLinks = [
    { label: "Layanan", href: "#" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Tentang Kami", href: "#tentangkami" },
    { label: "Hubungi Kami", href: "#hubungikami" },
    { label: "Blog", href: "#blog" },
];

export default function Navbar() {
    const [NavbarScope, NavbarAnimate] = useAnimate();

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        NavbarAnimate([
            [NavbarScope.current, { opacity: 1 }, { duration: 0.5 }],
            [
                NavbarScope.current,
                { y: 0, x: 0 },
                { duration: 1.2, delay: 2.2, ease: "easeInOut" },
            ],
        ]);
    }, []);

    return (
        <>
            <section className="py-4 lg:py-10 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <motion.div
                        ref={NavbarScope}
                        initial={{ opacity: 0, y: -230, x: 0 }}
                        className=" rounded-[27px] md:rounded-2xl bg-gray-300/30 backdrop-blur-md"
                    >
                        <div className="lg:grid-cols-3 py-6 px-2 md:pr-3 items-center">
                            {/* <div>
                                <Image
                                    src={logoImage}
                                    alt="Layers Logo"
                                    className="h-9 md:h-auto w-auto"
                                />
                            </div> */}
                            <div className="lg:flex lg:flex-col justify-between items-center hidden">
                                <nav className="flex flex-row gap-16 font-semibold text-lg text-black/70 tracking-tight">
                                    {navLinks.map((link) => (
                                        <a href={link.href} key={link.label} className="gap-32">
                                            {link.label}{" "}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "rotate-45 -translate-y-1"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge("transition", isOpen && "opacity-0")}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    ></line>
                                </svg>

                                {/* <Button
                                    className="hidden md:inline-flex items-center"
                                    variant="primary"
                                >
                                    Sign Up
                                </Button> */}
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-6 ">
                                        {navLinks.map((link) => (
                                            <a href={link.href} key={link.label} className="">
                                                {link.label}
                                            </a>
                                        ))}
                                        <Button variant="secondary">Log In</Button>
                                        <Button variant="primary">Sign Up</Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    );
}
