import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  return (
    <div className="container px-one py-two md:px-two lg:px-four">
      <h1 className="text-2xl">Contact Page</h1>

      <div className="flex flex-col md:flex-row md:gap-two lg:gap-four xl:gap-twelve xl:mt-one">
        <div className="flex-1 py-two font-light" id="text-holder">
          <p className="mb-two">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor
          </p>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor
          </p>
        </div>
        <form className="flex-1 flex gap-one flex-col">
          <div className="flex flex-col gap-one md:gap-two md:flex-row">
            <Input placeholder="Name" size="md" type="name" />
            <Input placeholder="Email" size="md" type="email" />
          </div>
          <Textarea className="min-h-[180px]" placeholder="Description comes here." />
          <Button className="w-fit" size="lg">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
