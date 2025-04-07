"use client";
import React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";
import { Plus, Minus } from "lucide-react";
import avatar1 from "@/app/assets/avatar-1.png";
import avatar2 from "@/app/assets/avatar-2.png";
import avatar3 from "@/app/assets/avatar-3.png";
import avatar4 from "@/app/assets/avatar-4.png";
import avatar5 from "@/app/assets/avatar-5.png";
import avatar6 from "@/app/assets/avatar-6.png";
import avatar7 from "@/app/assets/avatar-7.png";
import avatar8 from "@/app/assets/avatar-8.png";
import avatar9 from "@/app/assets/avatar-9.png";
import FAQPict from "@/app/assets/faq.png";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    alt: "jamierivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    alt: "joshsmith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    alt: "morganlee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    alt: "caseyjordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    alt: "taylorkim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    alt: "rileysmith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    alt: "jordanpatels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    alt: "samdawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    alt: "caseyharper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username, alt }) => (
            <div className="p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full">
              <div className="text-start">{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  key={alt}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div className="flex flex-col text-start">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);
export const Testimonials = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [-750, 750]);
  return (
    <section className="bg-white md:overflow-x-clip py-10 sm:px-0">
      <div className="flex flex-col gap-10 md:w-full md:pb-20 md:pt-16 px-12 items-center text-center">
        <div className="pt-10">
          <h1 className="md:text-6xl text-5xl font-regular text-black/80">
            What our customers say
          </h1>
          <h5 className="font-normal text-lg md:my-4 my-4">
            Thousands of happy customers that changed their energy use
          </h5>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn
            duration={19}
            testimonials={secondColumn}
            className="hidden md:block"
          />
          <TestimonialsColumn
            duration={17}
            testimonials={thirdColumn}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};
