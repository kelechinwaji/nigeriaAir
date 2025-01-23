import React from "react";
import Form from "./Form";

const content = {
  title: "Contact Us Today",
  subtext:
    "Need assistance? Contact InterAir 24/7 for overflight and landing permits, operational support, and a wide range of aviation services, backed by our global team of experts ready to meet your needs.",
};

function ContactUs() {
  return (
    <section className="bg-[#F3A984] py-10 px-5 lg:px-24 lg:py-20 flex flex-col gap-y-9 lg:flex-row lg:justify-between">
      <header className="flex flex-col gap-y-4 lg:max-w-lg lg:gap-y-3">
        <h4 className="text-[2rem] leading-10 lg:text-5xl text-black self-center lg:self-start">
          {content.title}
        </h4>
        <p className="leading-7 text-white">{content.subtext}</p>
      </header>
      <Form />
    </section>
  );
}

export default ContactUs;
