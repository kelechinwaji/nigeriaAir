import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="px-5 py-5 lg:px-24 lg:py-20">
      <div className="relative w-full h-96 rounded-3xl overflow-hidden lg:h-[33rem]">
        <Image src={"/service-hero.jpg"} alt="woman holding a phone" fill objectFit="cover" />
      </div>
    </div>
  );
}

export default Hero;
