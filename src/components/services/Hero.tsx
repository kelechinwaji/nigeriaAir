import React from "react";
import HeroTemplate from "../template/HeroTemplate";

const content = {
  img: {
    src: "/service-hero.jpg",
    alt: "woman holding a phone",
  },
  headline: {
    main: "Exceptional Flight Support Services for Seamless",
    sub: "Operations",
  },
  subtext:
    "InterAir offers a comprehensive range of customized aviation services designed to meet your unique needs with precision, efficiency, and care. From ground handling and FBO services to premium catering and secure transportation, we provide seamless solutions that prioritize safety, comfort, and customer satisfaction. Our team is dedicated to delivering exceptional service, ensuring every detail of your flight operations is handled with expertise and excellence",
};

function Hero() {
  return (
    <HeroTemplate
      {...content}
      classNames={{
        container: "sm:flex-row sm:justify-start lg:gap-x-28",
        imageContainer: "sm:m-0 md:m-0 ",
        image: "bg-[#D9D9D9]",
        subtext: "lg:max-w-max",
      }}
      animation={{
        image: "-100%",
        text: "100%",
      }}
    />
  );
}

export default Hero;
