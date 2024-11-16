"use client";

import { GlobeIcon, MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navigationLinks } from "@/constants/navbar";
import { cn } from "@/utils/classnames";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:container bg-background">
      <nav
        className={cn(
          "relative pl-0 px-6 py-6 flex justify-between items-center"
        )}
      >
        <Link href="/">
          <Image
            alt="Eros Elite logo"
            className="dark:invert"
            height={54}
            priority
            sizes="(max-width: 1023px) 100px, (min-width: 1023px) 140px"
            src="/EE_LOGO.svg"
            width={140}
          />
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-foreground hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          >
            <MenuIcon />
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-8 max-lg:hidden`}
        >
          {navigationLinks.map(({ label, href, icon: IconComponent }) => (
            <li className="min-w-fit" key={label}>
              <Link
                className="text-base text-foreground hover:text-primary"
                href={href}
              >
                {IconComponent ? (
                  <div className="flex items-center justify-center gap-1 text-primary">
                    {IconComponent ? <IconComponent /> : null}
                    {label}
                  </div>
                ) : (
                  label
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className="cursor-pointer hidden lg:flex lg:ml-auto text-foreground hover:text-primary">
          <GlobeIcon />
        </div>
      </nav>

      {/* Mobile */}
      <div className="relative z-50">
        {isOpen ? (
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />
        ) : null}
        <div
          className={`navbar-menu fixed top-0 right-0 bottom-0 z-50 w-full px-6 py-6 bg-background border-primary border-l overflow-y-auto transition-all duration-500 ease-in-out transform ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 delay-150"
          }`}
        >
          <nav className="flex flex-col w-full h-full">
            <div className="flex items-center mb-8">
              <Link
                className="mr-auto text-3xl font-bold leading-none"
                href="/"
              >
                <Image
                  alt="Eros Elite Mobile logo"
                  className="dark:invert"
                  height={54}
                  priority
                  src="/EE_LOGO.svg"
                  width={140}
                />
              </Link>
              <button
                className="text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                <XIcon />
              </button>
            </div>
            <ul>
              {navigationLinks.map(({ label, href, icon: IconComponent }) => (
                <li key={label}>
                  <Link
                    className="block text-base font-medium text-foreground py-2 px-4 rounded hover:text-primary"
                    href={href}
                  >
                    {IconComponent ? (
                      <div className="flex flex-row-reverse justify-end items-center gap-2 text-primary">
                        {IconComponent ? <IconComponent /> : null}
                        {label}
                      </div>
                    ) : (
                      label
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
