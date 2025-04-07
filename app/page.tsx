"use client";
import Navbar from "@/app/components/sections/Navbar";
import { Header } from "@/app/components/sections/Header";
import { Hero } from "@/app/components/sections/Hero";
import { HeroDuo } from "@/app/components/sections/HeroDuo";
import { LogoTicker } from "@/app/components/sections/LogoTicker";
import { Solutions } from "@/app/components/sections/Solutions";
import { AboutUs } from "@/app/components/sections/AboutUs";
import { Experts } from "@/app/components/sections/Experts";
import { JoinMovement } from "@/app/components/sections/JoinMovement";
import { Blog } from "@/app/components/sections/Blog";
import { FAQ } from "@/app/components/sections/FAQ";
import { Testimonials } from "@/app/components/sections/Testimonials";

import Image from "next/image";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import CallToAction from "./components/sections/CallToAction";
import { Footer } from "./components/sections/Footer";
import { ExpertCarousel } from "./components/sections/ExpertCarousel";

import { ScrollReveal } from "./components/sections/ScrollReveal";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/sections/preloader/Preloader";
import ScrollRevealer from "./components/sections/scrollreveal/ScrollRevealer";

import { HeroSato } from "./components/sections/HeroSato";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect( () => {
    (
      async () => {
          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {/* <Navbar /> */}
      <HeroSato />
      <ScrollReveal />
      {/* <Blog /> */}
      {/* <ScrollRevealer /> */}
      <Footer />
      {/* <Contact /> */}
    </>
  )
}
