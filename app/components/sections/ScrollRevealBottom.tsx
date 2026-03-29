import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import character from "@/app/assets/character.png";
import ketupat from "@/app/assets/ketupat.png";
import hand from "@/app/assets/hand.png";
import lantern from "@/app/assets/lantern.png";

export const ScrollRevealBottom = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start 0.9", "start 0"],
    offset: ["start end", "end end"],
  });

  const translatingYY = useTransform(scrollYProgress, [0.45, 0.8], [150, -50]);
  const translatingY = useTransform(scrollYProgress, [0.05, 0.8], [150, -50]);
  const translatingXX = useTransform(scrollYProgress, [0.25, 0.8], [-310, -40]);
  const translatingX = useTransform(scrollYProgress, [0, 0.195], [270, -80]);
  //  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const paragraph = "Dari saya khususnya dan ibu mau mohon maaf karena pasti ada salah kata ataupun perbuatan yang kurang berkenan. Mohon maaf kemarin tidak berlanjut ngobrolnya karena saya pikir kalau dilanjutkan takutnya mendzolimi peluang karir masing-masing Mbak 🙏 dan setelah itu bingung harus menyampaikannya bagaimana. Semoga semua ikhtiarnya dilancarkan oleh Allah ya Mbak 🤲";
  const words = paragraph.split(" ");
  return (
    <div className="relative w-screen min-h-screen bg-black overflow-x-clip">
      <motion.img
        src={hand.src}
        alt="hand"
        height={244}
        className="absolute top-[30rem] right-10 md:right-40 h-24 md:h-40 w-auto z-50 rounded-2xl"
        animate={{
          rotate: ["-10deg", "5deg"],
          scale: 1.2,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{
          translateY: translatingY,
        }}
      />
      <motion.img
        src={ketupat.src}
        alt="ketupat"
        height={244}
        className="absolute top-[82rem] left-6 md:left-72 h-28 md:h-44 w-auto z-50 rounded-2xl"
        animate={{
          rotate: ["14deg", "-14deg"],
          scale: 1.1,
        }}
        transition={{
          duration: 2.4,
          delay: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          translateY: translatingYY,
        }}
      />

      <div className="">
        <div className="sticky top-0 h-screen bg-black/70 overflow-hidden flex items-start justify-center">
          <motion.img
            src={character.src}
            alt="character"
            height={144}
            className="absolute -bottom-[1.5rem] -right-12 md:right-12 h-44 md:h-40 w-auto z-50 rounded-2xl"
            animate={{
              rotate: ["-7deg", "7deg"],
              scale: 1.2,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              translateX: translatingX,
            }}
          />
          <motion.img
            src={lantern.src}
            alt="lantern"
            height={144}
            className="absolute top-[15rem] left-12 md:left-48 h-28 md:h-44 w-auto z-50 rounded-2xl"
            animate={{
              rotate: ["-20deg", "10deg"],
              translateY: [-35, 15],
            }}
            transition={{
              duration: 3.7,
              delay: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              translateX: translatingXX,
            }}
          />
          <p
            // ref={targetRef}
            className="text-[1.15rem] md:text-[34px] md:px-10 py-16 px-12 max-w-5xl text-white/70 tracking-normal flex flex-wrap leading-[1.05] font-normal"
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>

        <div className="h-[778vh]" ref={targetRef}></div>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }: any) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
