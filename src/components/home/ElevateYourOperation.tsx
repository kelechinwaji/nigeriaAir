"use client";
import React from "react";
import { motion } from "framer-motion";
import useAnimationObserver from "@/hooks/useAnimationObserver";
import Link from "next/link";

const services = [
  "24/7 Global Support",
  "Tailored Solutions For Every Flight ",
  "Commitment to Safety and Sustainability",
];

function ElevateYourOperation() {
  const { containerRef, controls, isInView } = useAnimationObserver({
    animationDefinition: { opacity: 1, x: 0, y: 0 },
    threshold: 1,
  });

  const gradientAnimation = {
    opacity: [0, 0.5],
    x: ["-100%", 0],
  };

  return (
    <section
      className="pt-10 pb-20 px-6 flex flex-col gap-y-2 [&>*]:text-white relative  lg:pt-[4.3125rem] lg:pb-[6.625rem] lg:px-24 lg:items-center lg:gap-y-8 bg-elevate_ops bg-no-repeat bg-center bg-cover overflow-hidden"
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br opacity-50 from-red-10 to-white"
        initial={{ x: "-100%", opacity: 0, y: 0 }}
        animate={isInView ? gradientAnimation : undefined}
        transition={{ duration: 0.4 }}
      />
      <motion.h2
        className="text-xl leading-10 lg:text-5xl font-bold z-[1]"
        initial={{ y: "-100%", opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        Ready To Elevate Your Flight Operation
      </motion.h2>
      <motion.div
        className="flex flex-col gap-y-1 lg:items-center lg:gap-y-7 z-[1] lg:max-w-[56rem] lg:mx-auto"
        initial={{ y: "100%", opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <p className="leading-7 lg:text-center">
          Join the airlines, cargo operators, and private aviation leaders who
          trust InterAir to deliver seamless, efficient, and reliable flight
          support services. From ground handling to fueling, we ensure your
          operations run smoothly, 24/7, across the globe.
        </p>
        <ul className="flex flex-col gap-y-2 pl-2.5 lg:items-center lg:gap-y-5">
          {services.map((service, index) => (
            <li key={index} className="flex items-center gap-x-3">
              <div className="size-4 bg-white" />
              <p>{service}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-4">
          <Link
            href={"/contact"}
            className="block p-4 text-center lg:px-7 lg:py-4 bg-red-10 text-white rounded-3xl lg:rounded-3xl lg:font-bold self-start"
          >
            Request a Service Quote
          </Link>
          <Link
            href={"#"}
            className="block p-4 text-center lg:px-7 lg:py-4 bg-transparent border border-white text-white rounded-3xl lg:rounded-3xl lg:font-bold self-start"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default ElevateYourOperation;
