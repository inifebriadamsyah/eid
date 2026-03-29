"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/app/assets/Icon.svg";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef<AnimationPlaybackControls>();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );

    // animation.current.speed = 10;
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.25;
      } else {
        animation.current.speed = 0.75;
      }
    }
  }, [isHovered]);

  return (
    <div
      className="relative h-[1160px] bg-black"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+1160px)] -top-[100vh]">
        <div className="h-[1160px] sticky top-[calc(100vh-300px)]">
          <footer className="w-full">
            <div className="overflow-x-clip pt-[26rem] flex items-center">
              <motion.div
                ref={scope}
                // animate={{
                //     x: "-50%",
                // }}
                // transition={{
                //     duration: 30,
                //     ease: "linear",
                //     repeat: Infinity,
                // }}
                className="flex flex-none gap-16 pr-16 text-5xl md:text-7xl font-medium group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-16">
                    <span className="text-white/90 group-hover:text-[#fcb90068] transition duration-300">
                      minal aidin wal faizin
                    </span>
                    <span className="text-7xl">🙏</span>
                    <span className="text-white/90 group-hover:text-[#fcb90068] transition duration-300">
                      saya mohon maaf lahir dan batin.
                    </span>
                    <span className="text-7xl">🙏</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
