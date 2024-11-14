import { PiIcon, MapIcon, Map } from "lucide-react";

import Accordion from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Select from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TooltipWrap } from "@/components/ui/tooltip";

const TooltipedButton = TooltipWrap(Button);

// Playground page for displaying our components
// Should be hidden for our users
const Playground = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Icon Button</h1>
      <div className="flex gap-4 my-4">
        <Button size="icon">
          <PiIcon />
        </Button>
      </div>
      ----------------------------------------------------------------------------------------------------------------------------------------------------------
      <h1>Button Sizes</h1>
      <div className="flex gap-4 my-4">
        <Button size="sm">Success</Button>
        <Button size="md">Destructive</Button>
        <Button size="lg">Outline</Button>
      </div>
      ----------------------------------------------------------------------------------------------------------------------------------------------------------
      <h1>Button Variants</h1>
      <div className="flex gap-4 my-4">
        <Button size="md" variant="primary">
          Primary
        </Button>
        <Button size="md" variant="destructive">
          Destructive
        </Button>
        <Button size="md" variant="success">
          Success
        </Button>
        <Button size="md" variant="outline">
          Outline
        </Button>
      </div>
      ----------------------------------------------------------------------------------------------------------------------------------------------------------
      <h1>Select with groups and icons</h1>
      <div className="bg-eros-bg p-6 flex gap-12 my-4">
        <Select
          defaultValue="nl"
          icon={MapIcon}
          options={[
            {
              label: "Primary Languages",
              items: [
                { value: "nl", label: "Dutch" },
                { value: "en", label: "English" },
                { value: "de", label: "Deutsch" },
              ],
            },
            {
              label: "Secondary Languages",
              items: [
                { value: "al", label: "Albanian" },
                { value: "pl", label: "Polish" },
                { value: "br", label: "Brasilian" },
              ],
            },
          ]}
          size="sm"
        />
        <Select
          defaultValue="nl"
          icon={MapIcon}
          options={[
            {
              label: "Primary Languages",
              items: [
                { value: "nl", label: "Dutch" },
                { value: "en", label: "English" },
                { value: "de", label: "Deutsch" },
              ],
            },
            {
              label: "Secondary Languages",
              items: [
                { value: "al", label: "Albanian" },
                { value: "pl", label: "Polish" },
                { value: "br", label: "Brasilian" },
              ],
            },
          ]}
          size="md"
        />
        <Select
          defaultValue="nl"
          icon={MapIcon}
          options={[
            {
              label: "Primary Languages",
              items: [
                { value: "nl", label: "Dutch" },
                { value: "en", label: "English" },
                { value: "de", label: "Deutsch" },
              ],
            },
            {
              label: "Secondary Languages",
              items: [
                { value: "al", label: "Albanian" },
                { value: "pl", label: "Polish" },
                { value: "br", label: "Brasilian" },
              ],
            },
          ]}
          size="lg"
        />
      </div>
      ----------------------------------------------------------------------------------------------------------------------------------------------------------
      <h1>Select without groups</h1>
      <div className="bg-eros-bg p-6 flex gap-12 my-4">
        <Select
          defaultValue="nl"
          options={[
            { value: "nl", label: "Dutch" },
            { value: "en", label: "English" },
            { value: "de", label: "Deutsch" },
          ]}
          size="sm"
        />
        <Select
          defaultValue="nl"
          options={[
            { value: "nl", label: "Dutch" },
            { value: "en", label: "English" },
            { value: "de", label: "Deutsch" },
          ]}
          size="md"
        />
        <Select
          defaultValue="nl"
          options={[
            { value: "nl", label: "Dutch" },
            { value: "en", label: "English" },
            { value: "de", label: "Deutsch" },
          ]}
          size="lg"
        />
      </div>
      ----------------------------------------------------------------------------------------------------------------------------------------------------------
      <h1>Input</h1>
      <div className="bg-eros-bg p-6 flex gap-4 my-4">
        <Input placeholder="Email" size="sm" type="email" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Email" size="lg" type="email" />
      </div>
      ----------------------------------------------------------------------------------------------------------------------------------------------------------
      <h1>Inputs with Icons</h1>
      <div className="flex gap-4 my-4">
        <Input icon={Map} placeholder="Distance" size="sm" />
        <Input icon={Map} placeholder="Distance" size="md" />
        <Input icon={Map} placeholder="Distance" size="lg" />
      </div>
      ----------------------------------------------------------------------------------------------------------------------------------------------------------
      <h1>Textarea</h1>
      <div className="bg-eros-bg p-6 flex gap-4 my-4">
        <Textarea placeholder="Description comes here." />
      </div>
      ----------------------------------------------------------------------------------------------------------------------------------------------------------
      <h1>Tooltip</h1>
      <TooltipedButton
        size="lg"
        tooltipProps={{
          tooltip: "This is a tooltip",
          side: "top",
        }}
        variant="destructive"
      >
        Hover over me
      </TooltipedButton>
      ----------------------------------------------------------------------------------------------------------------------------------------------------------
      <h1>Accordion</h1>
      <div className="w-[500px] flex justify-center">
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
          ]}
        />
      </div>
      ----------------------------------------------------------------------------------------------------------------------------------------------------------
    </div>
  );
};

export default Playground;
