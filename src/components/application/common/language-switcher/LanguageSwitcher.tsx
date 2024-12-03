"use client";

import { SelectTrigger } from "@radix-ui/react-select";
import { GlobeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Select } from "@/components/ui/select";
import { LocalStorageKey, LocalStorageService } from "@/services/localstorage";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const [language, setLanguage] = useState(
    LocalStorageService.get(LocalStorageKey.Locale) || "en"
  );

  const handleLanguageChange = async (locale: string) => {
    document.cookie = `locale=${locale};`;
    LocalStorageService.set(LocalStorageKey.Locale, locale);
    setLanguage(locale);

    router.refresh();
  };

  return (
    <Select
      align="center"
      onValueChange={handleLanguageChange}
      options={[
        { value: "nl", label: "Dutch" },
        { value: "en", label: "English" },
      ]}
      size="sm"
      triggerElement={
        <SelectTrigger>
          <div className="cursor-pointer hidden lg:flex lg:ml-auto text-foreground hover:text-primary">
            <GlobeIcon />
          </div>
        </SelectTrigger>
      }
      value={language}
    />
  );
};
