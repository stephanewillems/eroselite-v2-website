"use client";

import clsx from "clsx";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { LocalStorageKey, LocalStorageService } from "@/services/localstorage";

export const AgeConfirmationOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConfirmed = LocalStorageService.get(
      LocalStorageKey.AgeConfirmation
    );

    if (!hasConfirmed) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleYes = () => {
    LocalStorageService.set(LocalStorageKey.AgeConfirmation, "true");
    setIsVisible(false);
    document.body.style.overflow = "";
  };

  const handleNo = () => {
    alert("You must be 18+ to access this content.");
    redirect("https://www.google.com");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={clsx(
        "fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 z-[9999]"
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        aria-modal="true"
        className="flex flex-col items-center px-one text-center"
        role="dialog"
      >
        <Image
          alt="Age Confirmation"
          height={350}
          priority
          sizes="(max-width: 640px) 150px, (max-width: 1024px) 350px, 350px"
          src="/EE_LOGO_BIG.webp"
          width={350}
        />
        <p className="text-white text-md mb-two">Are you older than 18?</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button onClick={handleYes} variant="success">
            I am 18 years or older
          </Button>
          <Button onClick={handleNo} variant="destructive">
            I am younger than 18
          </Button>
        </div>
      </div>
    </div>
  );
};
