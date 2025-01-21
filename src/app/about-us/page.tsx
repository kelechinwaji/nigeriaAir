import WhoAreWe from "@/components/home/WhoAreWe";
import AboutHistory from "@/components/home/AboutUs";
import React from "react";
import VisionMission from "@/components/home/VisionMission";

function AboutUs() {
  return (
    <>
      <WhoAreWe
        classNames={{
          container: "bg-transparent",
        }}
      />
      <AboutHistory />
      <VisionMission />
    </>
  );
}

export default AboutUs;
