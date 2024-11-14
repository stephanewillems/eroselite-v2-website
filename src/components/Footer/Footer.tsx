import { GlobeIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-border-light">
      <div className="lg:container flex flex-col gap-16 py-8 px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-1/4">
            <Image
              alt="Eros Elite logo"
              height={54}
              priority
              sizes="(max-width: 1023px) 100px, (min-width: 1023px) 140px"
              src="/EE_LOGO.svg"
              width={140}
            />
            <p className="mt-4 text-sm sm:pr-8">
              Zoekt u een date met een escorte, gigolo of een privéhuis voor een
              massage of meer? Redlights is dè website waar u een afspraakje kan
              maken voor privé ontvangst, escort, massage of met swingers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 text-sm">
            <div>
              <h3 className="text-md font-semibold mb-2">Popular cities</h3>
              <ul className="foreground-200">
                <li className="foreground-200">Antwerp</li>
                <li>Brussels</li>
                <li>Ghent</li>
                <li>Leuven</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2">Links</h3>
              <ul className="foreground-200">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2">Categories</h3>
              <ul className="foreground-200">
                <li>Category 1</li>
                <li>Category 2</li>
                <li>Category 3</li>
                <li>Category 4</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2">Popular cities</h3>
              <ul className="foreground-200">
                <li>Antwerp</li>
                <li>Brussels</li>
                <li>Ghent</li>
                <li>Leuven</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2">Popular cities</h3>
              <ul className="foreground-200">
                <li>Antwerp</li>
                <li>Brussels</li>
                <li>Ghent</li>
                <li>Leuven</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 max-w-fit mx-auto">
          <span className="flex gap-3">
            <GlobeIcon />
            <span>English</span>
          </span>
          <span>Press</span>
          <span>Media</span>
          <span>Privacy</span>
          <span>Cookies</span>
          <span>Contact</span>
          <span>Help</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
