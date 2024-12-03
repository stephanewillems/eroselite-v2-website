"use client";

import { ChevronsRightIcon, LucideHouse } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import React from "react";

import { navigationLinks } from "@/constants/navbar";
import { cn } from "@/utils/classnames";
import { capitalizeFirstLetter } from "@/utils/common";

const SeparatorElement = ({ fill = false }: { fill: boolean }) => (
  <ChevronsRightIcon
    aria-hidden
    className={fill ? "text-primary" : ""}
    size={16}
  />
);

export const Breadcrumbs = () => {
  const path = usePathname();
  const translate = useTranslations();
  const pathNames = path.split("/").filter((pathname) => pathname);

  return (
    <div className="lg:container p-one">
      <ul className="flex gap-half items-center">
        <li>
          <Link aria-label="Home" href="/">
            <LucideHouse className={path === "/" ? "text-primary" : ""} />
          </Link>
        </li>
        {pathNames.length > 0 ? <SeparatorElement fill /> : null}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isLastPathname = pathNames.length === index + 1;
          const foundLink = navigationLinks.find((navLink) =>
            navLink.href.includes(link)
          );
          const Icon = foundLink?.icon;
          const textIsHighlighted = foundLink?.href === "now-available";

          return (
            <React.Fragment key={index}>
              <li>
                <Link
                  className={cn("flex items-center gap-quarter", {
                    "text-primary": textIsHighlighted,
                  })}
                  href={href}
                >
                  {Icon ? <Icon aria-hidden size={20} /> : null}
                  {translate(foundLink?.translationKey) ||
                    capitalizeFirstLetter(pathNames.find(Boolean))}
                </Link>
              </li>
              {!isLastPathname ? <SeparatorElement fill /> : null}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};
