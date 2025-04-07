import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TextEffect } from "@/app/components/primitive/components/text-effects";
import { TextLoop } from "../primitive/components/text-loop";

import Image from "next/image";
// import MoveRight from "@/app/assets/arrow-right.svg";
import { MoveRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimate,
} from "framer-motion";
import { useRef } from "react";
import HeroImage2 from "@/app/assets/hero_pic2.png";
import background from "@/app/assets/background.png";
import longerBackground from "@/app/assets/longerbackground.png";
import localFont from "next/font/local";
import { Tajawal } from "next/font/google";
import flower from "@/app/assets/asset1.png";
import flower2 from "@/app/assets/asset2.png";
import flower3 from "@/app/assets/asset3.png";
import lamp from "@/app/assets/lamp.png";
import light from "@/app/assets/light.png";

const mutiaraRamadhan = localFont({
  src: "../../assets/fonts/mutiara-ramadhan.ttf",
});

const newGerbil = localFont({
  src: "../../assets/fonts/new-gerbil.woff",
});

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: "700",
});

export const HeroSato = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateYYY = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const translateYY = useTransform(scrollYProgress, [0, 1], [20, 430]);
  const translateXXX = useTransform(scrollYProgress, [0.2, 1], [-20, 350]);
  const translateX = useTransform(scrollYProgress, [0.1, 0.8], [40, -150]);


  const [ImagesScope, ImagesAnimate] = useAnimate();
  const [TitlesScope, TitlesAnimate] = useAnimate();

  useEffect(() => {
    ImagesAnimate([
      [ImagesScope.current, { opacity: 1 }, { duration: 0.5 }],
      [
        ImagesScope.current,
        { y: 0, x: 0 },
        {
          duration: 1.2,
          delay: 2.1,
          ease: "easeInOut",
          type: "spring",
          visualDuration: 1.1,
          bounce: 0.4,
        },
      ],
    ]);
  }, []);

  useEffect(() => {
    TitlesAnimate([
      [TitlesScope.current, { opacity: 1 }, { duration: 0.5 }],
      [
        TitlesScope.current,
        { y: 0, x: 0, opacity: 1 },
        {
          duration: 1.1,
          delay: 1.85,
          ease: "easeInOut",
          type: "spring",
          visualDuration: 1,
          bounce: 0.4,
        },
      ],
    ]);
  }, []);

  const fancyVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    },
    item: {
      hidden: () => ({
        opacity: 0,
        y: Math.random() * 100 - 50,
        rotate: Math.random() * 90 - 45,
        scale: 0.3,
        color: "#ffc400",
      }),
      visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        color: "#ffffff",
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200,
        },
      },
    },
  };

  return (
    <section className="md:overflow-x-clip overflow-hidden h-full bg-black">
      <div className="">
        <div className="absolute left-0">
          <Image
            src={longerBackground}
            height={1920}
            alt="bg"
            className="h-[60rem] w-[32rem] md:w-full md:h-auto object-cover z-0 md:-mt-[28rem] -mt-4"
          />
        </div>
        <div className="relative">
          <motion.img
            src={lamp.src}
            alt="lamp"
            width={144}
            className="absolute left-[39%] md:left-[45%] -translate-x-1/2 -top-[18.5rem] md:-top-[30.5rem] h-auto w-[128px] md:w-[212px] md:h-auto object-cover"
            animate={{
              rotate: "11deg",
            }}
            transition={{
              duration: 2.8,
              delay: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.img
            src={lamp.src}
            alt="lamp.src"
            width={144}
            className="absolute right-[22%] md:right-[24%] -top-[11rem] md:-top-[29rem] translate-x-1/2 h-auto w-[74px] md:w-[172px] md:h-auto object-cover rotate-[-14deg]"
            animate={{
              rotate: "-8deg",
            }}
            transition={{
              duration: 3,
              delay: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.img
            src={lamp.src}
            alt="lamp"
            width={108}
            className="absolute left-[12%] md:left-[25%] -top-[14rem] md:-top-[28.5rem] h-auto w-[98px] md:w-[172px] md:h-auto object-cover rotate-[11deg]"
            animate={{
              rotate: "-10deg",
            }}
            transition={{
              duration: 4,
              delay: 2.4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.img
            src={light.src}
            alt="light"
            width={96}
            height={96}
            className="absolute top-[1.5rem] md:top-[50rem] -right-[3.7rem] md:right-[31rem] -translate-x-1/2 h-[138px] w-auto md:w-[244px] md:h-auto object-cover"
            style={{
              translateY: translateYYY,
              translateX: translateXXX
            }}
          />
          <motion.img
            src={flower.src}
            alt="flower"
            width={96}
            height={96}
            className="absolute top-[3rem] md:top-[53rem] -right-[3.5rem] md:right-[31.5rem] -translate-x-1/2 h-[100px] w-auto md:w-[192px] md:h-auto object-cover"
            animate={{
              rotate: "1turn",
            }}
            transition={{
              duration: 24,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              translateY: translateYYY,
              translateX: translateXXX
            }}
          />
          <motion.img
            src={flower2.src}
            alt="flower2"
            width={96}
            height={96}
            className="absolute top-[34rem] md:top-[12rem] right-[3.5rem] md:right-[16.5rem] -translate-x-1/2 h-[120px] w-auto md:w-[192px] md:h-auto object-cover z-20"
            animate={{
              rotate: "1turn",
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{
              translateY: translateYY,
            }}
          />
          <motion.img
            src={light.src}
            alt="light"
            width={96}
            height={96}
            className="absolute top-[33rem] md:top-[9rem] right-[3rem] md:right-[15.5rem] -translate-x-1/2 h-[164px] w-auto md:w-[246px] md:h-auto object-cover"
            style={{
              translateY: translateYY,
            }}
          />
          <motion.img
            src={light.src}
            alt="light"
            width={96}
            height={96}
            className="absolute top-[23rem] md:top-[43.5rem] -left-[3.7rem] md:left-[28.5rem] -translate-x-1/2 h-[138px] w-auto md:w-[248px] md:h-auto object-cover"
            style={{
              translateY: translateYYY,
              translateX: translateX
            }}
          />
          <motion.img
            src={flower3.src}
            alt="flower3"
            width={96}
            height={96}
            className="absolute top-[24rem] md:top-[46rem] -left-[2.5rem] md:left-[31.5rem] -translate-x-1/2 h-[98px] w-auto md:w-[192px] md:h-auto object-cover"
            animate={{
              rotate: "-1turn",
            }}
            transition={{
              duration: 24,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              translateY: translateYYY,
              translateX: translateX
            }}
          />
          <motion.img
            src={flower2.src}
            alt="flower2"
            width={96}
            height={96}
            className="absolute invisible md:visible top-[30rem] md:top-[17rem] left-[5.5rem] md:left-[7rem] -translate-x-1/2 h-[104px] w-auto md:w-[198px] md:h-auto object-cover z-20"
            animate={{
              rotate: "1turn",
            }}
            transition={{
              duration: 14,
              ease: "linear",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <Image
            src={light}
            alt="light"
            width={96}
            height={96}
            className="absolute invisible md:visible top-[29rem] md:top-[14.5rem] right-[0.25rem] md:left-[13rem] -translate-x-1/2 h-[144px] w-auto md:w-[246px] md:h-auto object-cover"
          />
        </div>
      </div>
      <div className="h-[767px] md:h-[1268px] mt-12 lg:mt-48 md:overflow-x-clip overflow-hidden [mask-image:linear-gradient(180deg,black_5%,black_78%,transparent_100%)]">
        <div className="container justify-center text-center md:max-w-screen-lg md:w-full pb-20 pt-5 md:pt-32 mx-auto ">
          <motion.h1
            ref={TitlesScope}
            initial={{ opacity: 0, y: 250, x: 0 }}
            className="md:text-4xl text-4xl sm:text-lg font-light tracking-wider text-white mt-60 md:mt-48 z-10"
          >
            <TextLoop
              className={`whitespace-nowrap ${newGerbil.className}`}
              transition={{
                type: "spring",
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              interval={3}
              variants={{
                initial: {
                  y: 20,
                  rotateX: 90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
                animate: {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                },
                exit: {
                  y: -20,
                  rotateX: -90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
              }}
            >
              <span>SELAMAT HARI RAYA</span>
              <span>🙏 EID MUBARAK 🙏</span>
              <span className={`${tajawal.className}`}>
                🙏 عِيد مُبَارَك 🙏
              </span>
            </TextLoop>
          </motion.h1>
          <div className="flex flex-row items-center mx-auto justify-center mt-6 md:mt-12">
            <h1 className="md:text-[114px] text-[54px] font-bold tracking-wide bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(252,185,105,.5))] text-transparent bg-clip-text text-center z-20">
              <TextEffect
                per="char"
                preset="slide"
                delay={3}
                className={`${mutiaraRamadhan.className}`}
              >
                Idul
              </TextEffect>
            </h1>
            <motion.div
              ref={ImagesScope}
              initial={{ opacity: 0, y: 250, x: 0 }}
              className="flex w-auto h-20 mx-0 items-center"
            >
              <Image
                src={HeroImage2}
                alt="hero1"
                className="h-24 md:h-48 w-auto rounded-lg  "
              />
            </motion.div>
            <h1 className="md:text-[114px] text-[54px] font-bold tracking-wide bg-white bg-[radial-gradient(100%_100%_at_top_left,rgb(252,185,105,.7),white)] text-transparent bg-clip-text text-center z-20">
              <TextEffect
                per="char"
                preset="slide"
                delay={3.2}
                className={`${mutiaraRamadhan.className}`}
              >
                Fitri
              </TextEffect>
            </h1>
          </div>
          <h1
            className={`mt-6 md:mt-20 text-base md:text-3xl tracking-wide ${newGerbil.className}`}
          >
            <TextEffect per="word" variants={fancyVariants} delay={3.6}>
              Adam dan keluarga
            </TextEffect>
          </h1>
          <h1
            className={`mt-0 md:mt-4 text-base md:text-3xl tracking-wide ${newGerbil.className}`}
          >
            <TextEffect per="word" variants={fancyVariants} delay={3.9}>
              mohon maaf lahir dan batin
            </TextEffect>
          </h1>
          <h1
            className={`mt-2 md:mt-4 text-base md:text-3xl tracking-wide ${newGerbil.className}`}
          >
            <TextEffect per="word" variants={fancyVariants} delay={4.2}>
            🙏🙏🙏
            </TextEffect>
          </h1>

        </div>
      </div>
    </section>
  );
};
