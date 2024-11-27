import Image from "next/image";
import React from "react";

import { Accordion } from "@/components/ui/accordion";

const HelpPage = () => {
  return (
    <div className="container px-four">
      <h1 className="text-2xl">Help & Resources</h1>

      <div className="flex gap-three my-three">
        <div
          className="basis-1/3 flex justify-center h-[100px]"
          id="logo-wrapper"
        >
          <div className="basis-1/3 flex justify-center">
            <Image
              alt="Help logo"
              height={55}
              priority
              src="/help.png"
              width={150}
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center" id="accordion-wrapper">
          <Accordion
            collapsible
            items={[
              {
                value: "item-1",
                trigger: "Is it accessible?",
                content: "Yes. It adheres to the WAI-ARIA design pattern.",
              },
              {
                value: "item-2",
                trigger: "Can I use it on mobile?",
                content:
                  "Yes. The design is responsive and works well on mobile.",
              },
              {
                value: "item-3",
                trigger: "Is it accessible?",
                content: "Yes. It adheres to the WAI-ARIA design pattern.",
              },
              {
                value: "item-4",
                trigger: "Can I use it on mobile?",
                content:
                  "Yes. The design is responsive and works well on mobile.",
              },
              {
                value: "item-5",
                trigger: "Can I use it on mobile?",
                content:
                  "Yes. The design is responsive and works well on mobile.",
              },
              {
                value: "item-6",
                trigger: "Can I use it on mobile?",
                content:
                  "Yes. The design is responsive and works well on mobile.",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
