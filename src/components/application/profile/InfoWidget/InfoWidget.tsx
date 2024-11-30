import { Globe, Phone, TriangleAlert } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export const InfoWidget = () => {
  return (
    <div className="flex flex-col basis-3/5 gap-three sm:px-four xl:px-0 xl:basis-2/5">
      <section className="flex justify-between items-center gap-two">
        <div className="flex flex-1 flex-col gap-half">
          <div className="flex justify-between flex-wrap">
            <span className="text-3xl">Anna</span>
            <span className="flex items-center gap-quarter">
              <Phone />
              0474 56 78 90
            </span>
          </div>
          <span>38 year</span>
          <span>Region(s): 2800, 2000, 1000</span>
        </div>

        <div className="flex justify-end basis-1/5">
          <Image alt="Safe sex" height={50} src="/safesex.svg" width={50} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl text-primary mb-half">Title of the profile</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </section>

      <section className="relative w-full border rounded-lg p-one">
        <h2 className="bg-background absolute -translate-y-1/2 left-0 top-0 text-base font-bold px-one text-primary">
          Contact
        </h2>
        <div className="flex items-center gap-one mb-half">
          <Phone className="w-5 h-5" />
          <span>0474 56 78 90</span>
        </div>
        <div className="flex items-center gap-one">
          <Globe className="w-5 h-5" />
          <a className="hover:text-primary" href="http://www.anna.be">
            www.anna.be
          </a>
        </div>
      </section>

      <section className="w-full px-one">
        <h2 className="text-base font-bold mb-half text-primary">
          Availability
        </h2>
        <p>Monday - 09 until 17</p>
        <p>Weekends - 09 until 17</p>
      </section>

      <section className="relative w-full border rounded-lg p-one">
        <h2 className="bg-background absolute -translate-y-1/2 left-0 top-0 text-base font-bold px-one text-primary">
          Profile
        </h2>
        <ul className="space-y-1 text-sm">
          <li>Gender: Female</li>
          <li>Age: 38 years</li>
          <li>Nationality: Antiguans</li>
          <li>Ethnicity: Cornish</li>
          <li>Sexual Orientation: Hetero Sexual</li>
          <li>Height: 180 CM</li>
          <li>Weight: 69 Kg</li>
          <li>Hair Color: Brown</li>
          <li>Eye Color: Green</li>
          <li>Breast Size: DDD</li>
          <li>Smoking: Yes</li>
          <li>Tattoos: Yes</li>
          <li>Drinking: Yes</li>
          <li>Piercings: Yes</li>
        </ul>
      </section>

      <section className="w-full px-one">
        <h2 className="text-base font-bold mb-4 text-primary">Services</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="mb-half font-bold">Massages</h3>
            <ul className="space-y-1">
              <li>Massageservice 1</li>
              <li>Massageservice 2</li>
              <li>Massageservice 3</li>
              <li>Massageservice 4</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-half font-bold">Fetish</h3>
            <ul className="space-y-1">
              <li>Fetishservice</li>
              <li>Fetishservice</li>
              <li>Fetishservice</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-half font-bold">Preplay</h3>
            <ul className="space-y-1">
              <li>Preplayservice 1</li>
              <li>Preplayservice 2</li>
              <li>Preplayservice 3</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-half font-bold">Intimate Activities</h3>
            <ul className="space-y-1">
              <li>Intimate Services</li>
              <li>Intimate Services</li>
              <li>Intimate Services</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-half font-bold">Other services</h3>
            <ul className="space-y-1">
              <li>Intimate Services</li>
              <li>Intimate Services</li>
              <li>Intimate Services</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full border border-primary rounded-lg p-one">
        <h2 className="text-base font-bold mb-half text-primary">
          Disability Services
        </h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span>Physical Disability</span>
          <span>Visual Impairment</span>
          <span>Hearing Impairment</span>
          <span>Speech Impairment</span>
        </div>
      </section>

      <section className="px-one w-full">
        <h2 className="text-base font-bold mb-half text-primary">Rates</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <span>60 min - € 300</span>
          <span>60 min - € 300</span>
          <span>60 min - € 300</span>
          <span>60 min - € 300</span>
        </div>
      </section>

      <div className="flex items-center gap-one">
        <Button size="lg" variant="destructive">
          Report abuse
        </Button>
        <div>
          <TriangleAlert
            className="cursor-pointer"
            fill="var(--eros-red)"
            height={40}
            width={40}
          />
        </div>
      </div>
    </div>
  );
};
