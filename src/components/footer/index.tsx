"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="mx-auto max-w-mac w-full">
      <div className="text-white bg-[#000000] [&_a]:block [&_a]:text-base [&_a]:leading-7 py-9 px-4 flex flex-col gap-y-7 lg:gap-y-20 lg:px-24 lg:pt-24 lg:pb-36">
        <header className="flex items-center justify-between pb-7 lg:pb-10 border-b border-white">
          <h3 className="text-[2rem] leading-10 font-bold">Let’s Connect</h3>
          <Link
            href={"/contact"}
            className="text-center px-7 py-4 bg-red-10 text-white rounded-3xl font-bold"
          >
            Contact Us
          </Link>
        </header>
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-y-8 gap-x-24">
          <div className="flex gap-x-9 lg:col-start-2 lg:flex-row-reverse lg:gap-x-24 lg:justify-between">
            <div className="flex flex-col gap-y-2">
              <h3 className="text-[2rem] leading-10 font-bold">Contact</h3>
              <ul className="flex flex-col gap-y-3">
                <li className="flex items-center gap-x-2">
                  <div className="relative size-6">
                    <Image
                      alt="email"
                      src={"/email_logo.svg"}
                      fill
                      className="absolute"
                    />
                  </div>
                  <a href="mailto:Interairops@gmail.com">
                    Interairops@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="relative size-6">
                    <Image
                      alt="email"
                      src={"/whatsapp_logo.svg"}
                      fill
                      className="absolute"
                    />
                  </div>
                  <div>
                    <a href="mailto:+2349030105550">+2349030105550,</a>
                    <a href="mailto:+2348037865676">+2348037865676,</a>
                    <a href="mailto:+2348037483384">+2348037483384,</a>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[2rem] leading-10 font-bold">Links</h3>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/service"}>Service</Link>
                </li>
                <li>
                  <Link href={"/about-us"}>About Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 lg:col-start-1 lg:row-start-1">
            <h3 className="text-[2rem] leading-10 font-bold">About Us</h3>
            <p className="max-w-72">
              InterAir delivers swift, reliable aviation solutions, securing
              over-flight and landing permits efficiently with a
              customer-focused approach.
            </p>
            <ul className="flex items-center gap-x-3 mt-1">
              <li>
                <a href="#" className="relative block size-5">
                  <Image
                    alt="instagram"
                    src={"/instagram_logo.svg"}
                    fill
                    className="absolute"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="relative block size-5">
                  <Image
                    alt="facebook"
                    src={"/facebook_logo.svg"}
                    fill
                    className="absolute"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="relative block size-5">
                  <Image
                    alt="x"
                    src={"/x_logo.svg"}
                    fill
                    className="absolute"
                  />
                </a>
              </li>
            </ul>
          </div>
          <form
            className="flex flex-col gap-y-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h3 className="text-[2rem] leading-10 font-bold">Newsletter</h3>
            <input
              className="bg-transparent border py-4 px-5 border-white rounded-3xl"
              placeholder="Email"
            />
            <button className="py-4 rounded-3xl bg-red-10 text-white leading-7">
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
