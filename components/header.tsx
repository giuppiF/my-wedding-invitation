import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Confirm from "./confirm";
import { Guest } from "@prisma/client";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header({
  valid,
  guest,
}: {
  valid: boolean;
  guest?: Guest;
}) {
  if (!valid) {
    return (
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold  sm:mt-5 sm:text-8xl lg:mt-6">
                Ciao!
              </h1>
              <p className="mt-3 text-base  sm:mt-5 sm:text-5xl lg:text-3xl xl:text-xl">
                Per poter visualizzare le informazioni della nostra festa
                utilizza il link che ti è stato fornito da noi. Graaaazie.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-24">
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold  sm:mt-5 sm:text-8xl lg:mt-6">
              Ciao <span className="text-red-400">{guest?.helloNames}</span>!
            </h1>
            <p className="mt-3 text-base  sm:mt-5 sm:text-5xl lg:text-3xl xl:text-xl">
              Siamo felici di invitarvi al nostro matrimonio!! Sarà una grande
              festa e un modo per condividere insieme del tempo.
            </p>
          </div>
        </div>
        <div className="mt-12  lg:m-0 lg:relative">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <Image
              className="h-8 w-auto sm:h-10"
              src="/logo.svg"
              alt=""
              width="640"
              height="640"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
