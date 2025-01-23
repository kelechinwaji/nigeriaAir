"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const navLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Services",
    link: "/services",
  },
  {
    label: "About Us",
    link: "/about-us",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    import("react-device-detect").then((mod) => {
      setIsMobile(mod.isMobile);
    });
  }, []);

  useEffect(() => {
    if (!isMobile) {
      if (!isOpen) {
        setIsOpen(true);
      }
      return;
    }
    setIsOpen(false);
  }, [pathname, isMobile]); //eslint-disable-line

  const openMenuHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="mx-auto max-w-mac w-full bg-layout_hero bg-no-repeat bg-cover">
      <div className="flex items-center justify-between py-2.5 px-5 relative lg:px-24 lg:py-4">
        <Link href={"/"} className="w-12 h-8 lg:w-28 lg:h-20 relative block">
          <Image
            alt="inter air"
            src={"/inter-air-logo.svg"}
            fill
            className="absolute"
          />
        </Link>

        <button
          className="relative py-3 px-2 lg:hidden"
          onClick={openMenuHandler}
        >
          <Image
            alt="Open Menu"
            src={!isOpen ? "/hamburger_closed.svg" : "/hamburger_opened.svg"}
            fill
            className="absolute "
          />
        </button>

        <nav
          className={`${
            isOpen ? "absolute right-0 top-12 flex z-10" : "hidden"
          }  w-full flex-col gap-y-2 text-[#00000099] text-base leading-7 p-3 lg:flex-row lg:static lg:flex-1 lg:justify-end lg:gap-x-40
          ${isMobile ? "bg-white" : ""}
          `}
        >
          <ul className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-6 lg:items-center">
            {navLinks.map((navItem) => (
              <li
                key={navItem.link}
                className="py-4 text-center lg:p-2.5 relative lg:font-bold"
              >
                <Link
                  href={navItem.link}
                  className={`before:absolute ${
                    pathname === navItem.link
                      ? "before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-red-10 text-red-10"
                      : ""
                  }`}
                >
                  {navItem.label}{" "}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <li className="py-4 text-center lg:px-7 lg:py-4 lg:bg-red-10 lg:text-white lg:rounded-3xl lg:font-bold">
              <Link href={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
