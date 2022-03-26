import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";

const navigation = [
  { name: "Cosa", href: "#cosa" },
  { name: "Quando", href: "#quando" },
  { name: "Dove", href: "#dove" },
  { name: "Chi", href: "#chi" },
  { name: "Come", href: "#come" },
];

export default function Menu() {
  return (
    <Popover as="header" className="relative">
      <div className="pt-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <a href="#">
                <span className="sr-only">Matrimonio</span>
                <Image
                  className="h-8 w-auto sm:h-10"
                  src="/logo.svg"
                  alt=""
                  width="64"
                  height="64"
                />
              </a>
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="bg-red-400 rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:bg-gray-500 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-12 w-12" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 lg:flex lg:ml-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium  hover:text-gray-800"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Image
                  className="h-8 w-auto sm:h-10"
                  src="/logo.svg"
                  alt=""
                  width="64"
                  height="64"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-400">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-12 w-12" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-3xl font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
