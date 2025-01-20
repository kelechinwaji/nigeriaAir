import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="flex flex-col gap-y-10 items-center px-5 py-5 sm:flex-row-reverse sm:items-center sm:gap-x-10 sm:justify-between lg:px-24 lg:py-20">
      <div className="relative w-72 h-96 rounded-3xl overflow-hidden md:ml-28 sm:mr-10 lg:w-96 lg:h-[33rem]">
        <Image
          src={"/inter-air-home-hero.jpeg"}
          alt="airplane windows"
          fill
          objectFit="cover"
        />
      </div>
      <section className="text-black flex flex-col gap-y-1 sm:max-w-72 md:max-w-md lg:max-w-xl lg:gap-y-7">
        <h2 className="text-[2rem] leading-10 lg:text-6xl">
          Excellence In Aviation <span className="text-red-10">Service.</span>
        </h2>
        <p className="lg:max-w-sm lg:leading-7">
          InterAir delivers trusted, seamless solutions with exceptional care
          and customer service. We prioritize reliability and precision to meet
          every client’s unique needs. With a commitment to excellence, we
          ensure outstanding experiences in all we do.
        </p>

        <Link
          href={"/contact"}
          className="block p-4 text-center lg:px-7 lg:py-4 bg-red-10 text-white rounded-3xl lg:rounded-3xl lg:font-bold self-start"
        >
          Contact Us
        </Link>
      </section>
    </section>
  );
}

export default Hero;
