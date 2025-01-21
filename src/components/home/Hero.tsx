import Link from "next/link";
import React from "react";
import HeroTemplate from "../template/HeroTemplate";

const content = {
  img: {
    src: "/inter-air-home-hero.jpeg",
    alt: "airplane windows",
  },
  headline: {
    main: "Excellence In Aviation",
    sub: "Service.",
  },
  subtext:
    "InterAir delivers trusted, seamless solutions with exceptional care and customer service. We prioritize reliability and precision to meet every client’s unique needs. With a commitment to excellence, we ensure outstanding experiences in all we do",
};

function Hero() {
  return (
    <HeroTemplate {...content}>
      <Link
        href={"/contact"}
        className="block p-4 text-center lg:px-7 lg:py-4 bg-red-10 text-white rounded-3xl lg:rounded-3xl lg:font-bold self-start"
      >
        Contact Us
      </Link>
    </HeroTemplate>
  );
}

export default Hero;
