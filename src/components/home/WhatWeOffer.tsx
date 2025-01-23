"use client";
import { mergeClassName } from "@/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import useAnimationObserver from "@/hooks/useAnimationObserver";

const services = [
  {
    title: "Overflight & Landing Permit",
    copy: "At InterAir, our close partnerships with Civil Aviation Authorities, authorized agencies, and regional offices worldwide enable us to secure over-flight and landing permits with unmatched efficiency. Our dedicated operations team is equipped to process requests within minutes, ensuring our clients can take to the skies with minimal delay, even on short notice.",
    theme: "bg-[#CDCCF5]",
  },
  {
    title: "Weather & Flight Planning",
    copy: "Let our expert team plan your flight with precision and care. Using advanced tools and real-time weather data, we craft optimized, cost-effective plans tailored to your needs. We account for weather, air traffic, and airport regulations to ensure a safe and efficient journey. Focus on what matters most—leave the complexities to us.",
    theme: "bg-[#FFE5E5]",
  },
  {
    title: "Crew Transportation",
    copy: "InterAir ensures seamless crew transportation with a modern fleet of luxury and specialized vehicles. Whether it's premium cars, limousines, or armored vehicles, we cater to every need with precision and discretion. Our professional drivers are experts in navigation and committed to respecting privacy and specific requests, making the ground journey as smooth and enjoyable as the flight.",
    theme: "bg-[#F2C3B2]",
  },
  {
    title: "Passenger & Aircraft Security",
    copy: "InterAir provides comprehensive security services, including aircraft protection, discreet VIP and crew safeguarding, and secure ground transport with trained drivers. We ensure safety and peace of mind for passengers, crew, and cargo throughout the journey",
    theme: "bg-[#FF698D]",
  },
  {
    title: "Hotel Accommodation",
    copy: "InterAir partners with top hotels and resorts to offer exclusive rates and tailored bookings. We ensure luxurious stays with exceptional service and premium amenities, customized to your needs, whether near the airport, city center, or a serene retreat.",
    theme: "bg-[#FFE5E5]",
  },
  {
    title: "Aircraft Fuel Uplift",
    copy: "InterAir provides reliable fuel uplift solutions for airlines, charters, and private aircraft. Through a global supplier network, we offer competitive pricing for Jet A1, TS1, and Avgas/100LL. Our team ensures timely fueling with the highest safety standards for efficient operations.",
    theme: "bg-[#A697E0]",
  },
];

function WhatWeOffer() {
  const router = useRouter();

  const { containerRef, controls } = useAnimationObserver({
    animationDefinition: { opacity: 1, y: 0 },
    threshold: 0.2,
  });

  const seeMoreHandler = () => {
    router.push("/services");
  };

  return (
    <section
      className="px-5 flex flex-col gap-y-10 [&>*]:text-black lg:px-24 bg-white py-10 overflow-hidden"
      ref={containerRef}
    >
      <motion.h2
        className="text-[2rem] leading-10 lg:self-center lg:text-5xl"
        initial={{ y: "-100%", opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        What We Offer
      </motion.h2>
      <motion.div
        className="grid grid-cols-[repeat(auto-fit,_minmax(22.625rem,_1fr))] gap-10"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        {services.map((item, index) => (
          <div
            key={item.title}
            className="pt-12 pb-[7.75rem] px-3.5 flex flex-col gap-y-1 rounded-2xl shadow-services items-center lg:items-start lg:pt-11 lg:pb-20 lg:px-6 lg:rounded-3xl"
          >
            <div
              className={mergeClassName(
                "w-11 h-9 rounded text-white bg-black flex items-center justify-center",
                item?.theme
              )}
            >
              0{index + 1}
            </div>
            <h3 className="text-xl leading-10">{item.title}</h3>
            <p className="text-sm leading-6 text-center lg:text-start">
              {item.copy}
            </p>
          </div>
        ))}
        <button
          className="py-2 px-7 rounded-3xl text-red-10 border border-red-10 font-semibold leading-7 col-span-full justify-self-end"
          onClick={seeMoreHandler}
        >
          See all
        </button>
      </motion.div>
    </section>
  );
}

export default WhatWeOffer;
