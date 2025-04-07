"use client"
import React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";
import PlusIcon from "@/app/assets/plus-icon.png";
import MinusIcon from "@/app/assets/minus-icon.png";
import FAQPict from "@/app/assets/faq.png";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

const items = [
  {
    question: "What is green energy?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does green energy benefit the environment?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "What green energy solutions does your company offer?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question:
      "What support services do you offer after installing green energy solutions?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "How do solar panels work?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
];


const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="mx-2 md:mx-4 my-3 text-start justify-between bg-white px-8 py-6 rounded-2xl shadow-md"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <p className="font-medium text-lg pr-6">{question}</p>
        {isOpen ? <Image src={MinusIcon} alt="minus icon" className="h-6 w-6"/> : <Image src={PlusIcon} alt="Plus icon" className="h-7 w-6"/>}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [-750, 750]);
  return (
    <section className="bg-[#FFF7ED] md:overflow-x-clip  py-10 sm:px-0">
      <div className="flex flex-col gap-10 md:w-full md:pb-20 md:pt-16 md:px-12 px- items-center text-center">
        <div className="pt-10">
          <h1 className="md:text-6xl text-5xl font-regular text-black/80">FAQ</h1>
          <h5 className="font-normal text-lg md:my-4 my-4 sm:mx-8">
            Here you will find the answers to the frequently asked questions.
          </h5>
        </div>
        <div className="container flex md:grid md:grid-cols-2 mt-4 flex-col md:flex-row">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center md:w-5/12 mt-12">
          <Image
            src={FAQPict}
            alt="faq pict"
            height={48}
            width={48}
            className="h-12 w-12 justify-center mb-6"
          />
          <h5 className="text-xl font-medium mb-3">Still have questions?</h5>
          <p className="font-normal sm:mx-5">
            For assistance, please visit our{" "}
            <a href="" className="font-semibold">
              Contact Us
            </a>{" "}
            page or call our customer support hotline at{" "}
            <a href="" className="font-semibold">
              (671) 555-0110.
            </a>{" "}
            Our dedicated team is ready to help you on your journey to a
            greener, more sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
};
