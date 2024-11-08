import { Button } from "@/components/ui/button";
import { PiIcon } from "lucide-react";

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
    </div>
  );
};

export default Playground;
