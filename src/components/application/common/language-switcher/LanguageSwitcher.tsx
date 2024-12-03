"use client";

import { SelectTrigger } from "@radix-ui/react-select";
import { GlobeIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Select } from "@/components/ui/select";

export const LanguageSwitcher = () => {
  const router = useRouter();

  const handleLanguageChange = async (locale: string) => {
    document.cookie = `locale=${locale};`;

    router.refresh();
  };

  return (
    <Select
      align="center"
      defaultValue="nl"
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
    />
  );
};
