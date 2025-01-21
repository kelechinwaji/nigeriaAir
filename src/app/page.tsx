import AboutUs from "@/components/home/AboutUs";
import ElevateYourOperation from "@/components/home/ElevateYourOperation";
import Hero from "@/components/home/Hero";
import VisionMission from "@/components/home/VisionMission";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import WhoAreWe from "@/components/home/WhoAreWe";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <VisionMission />
      <AboutUs />
      <ElevateYourOperation />
      <WhoAreWe />
    </>
  );
}
