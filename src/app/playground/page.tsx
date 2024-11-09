import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PiIcon } from "lucide-react";

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
      <h1>Button Sizes</h1>
      <div className="flex gap-4 my-4">
        <Button size="sm">Success</Button>
        <Button size="md">Destructive</Button>
        <Button size="lg">Outline</Button>
      </div>
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
      <h1>Select</h1>
      <div className="bg-eros-bg p-6 flex gap-4 my-4">
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Primary Languages</SelectLabel>
              <SelectItem value="nl">Dutch</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="de">Deutsch</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Secondary Languages</SelectLabel>
              <SelectItem value="al">Albanian</SelectItem>
              <SelectItem value="pl">Polish</SelectItem>
              <SelectItem value="br">Brasilian</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      ----------------------------------------------------------------------------------------------------------------------------------------------------------
      <h1>Input</h1>
      <div className="bg-eros-bg p-6 flex gap-4 my-4">
        <Input placeholder="Email" size="sm" type="email" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Email" size="lg" type="email" />
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
    </div>
  );
};

export default Playground;
