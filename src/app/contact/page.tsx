import ContactInfo from "@/components/contact-us/ContactInfo";
import ContactUs from "@/components/contact-us/ContactUs";
import Hero from "@/components/contact-us/Hero";
import LocateUs from "@/components/contact-us/LocateUs";
import React from "react";

function Contact() {
  return (
    <>
      <Hero />
      <ContactInfo />
      <ContactUs />
      <LocateUs />
    </>
  );
}

export default Contact;
