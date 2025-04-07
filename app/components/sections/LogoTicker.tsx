
"use client";
import Image from "next/image";
import acmeLogo from "@/app/assets/logo-acme.png";
import quantumLogo from "@/app/assets/logo-quantum.png";
import echoLogo from "@/app/assets/logo-echo.png";
import celestialLogo from "@/app/assets/logo-celestial.png";
import pulseLogo from "@/app/assets/logo-pulse.png";
import apexLogo from "@/app/assets/logo-apex.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [750, -750]);

  return (
    <div className="bg-white py-[72x] md:py-12 sm:py-12 border border-gray-100">
      <div className="container lg:px-24">
        <div className="overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent_5%,black_15%,black_85%,transparent_95%)]">
          <motion.div className="gap-16" style={{
            translateX,
          }}>
            <motion.div
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
              }}
              initial={{ translateX: 0 }}
              animate={{ translateX: "-101%" }}
              className="flex flex-none justify-center pr-16 gap-16"
            >
              {images.map(({ src, alt }) => (
                <Image
                  key={alt}
                  src={src}
                  alt={alt}
                  className="flex-none logo-ticker-image"
                />
              ))}
              {images.map(({ src, alt }) => (
                <Image
                  key={alt}
                  src={src}
                  alt={alt}
                  className="flex-none logo-ticker-image"
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
