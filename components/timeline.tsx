import { Guest } from "@prisma/client";
import Confirm from "./confirm";
import { Chi, ChiIcon } from "./elements/chi";
import { Come, ComeIcon } from "./elements/come";
import { Cosa, CosaIcon } from "./elements/cosa";
import { Dove, DoveIcon } from "./elements/dove";
import { Quando, QuandoIcon } from "./elements/quando";

export default function Timeline({ guest }: { guest: Guest }) {
  const elements = [
    { icon: <CosaIcon />, element: <Cosa />, name: "cosa" },
    { icon: <DoveIcon />, element: <Dove guest={guest} />, name: "dove" },
    { icon: <QuandoIcon />, element: <Quando guest={guest} />, name: "quando" },
    { icon: <ChiIcon />, element: <Chi guest={guest} />, name: "chi" },
    { icon: <ComeIcon />, element: <Come />, name: "grazie" },
  ];

  return (
    <div className="mx-auto max-w-8xl px-4 lg:max-w-7xl">
      <div className="">
        {elements.map((element, k) => (
          <div className="flex " id={element.name} key={k}>
            <div className="flex flex-col items-center mr-4 ">
              <div>
                <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 border-4 border-black rounded-full">
                  {element.icon}
                </div>
              </div>
              <div className="w-1 h-full bg-black"></div>
            </div>
            <div className="pb-8 pt-4 flex flex-col gap-4 mb-16">
              <p className="mb-2 text-3xl lg:text-4xl font-bold  uppercase">
                {element.name}
              </p>
              <div className=" text-xl  sm:mt-5 sm:text-5xl lg:text-3xl xl:text-xl">
                {element.element}
              </div>
            </div>
          </div>
        ))}

        <div className="flex pb-8">
          <div className="flex flex-col items-center mr-4">
            <div>
              <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 border-black border-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="stroke-green-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <p className="mb-2  text-3xl lg:text-4xl font-bold  uppercase ">
              {guest.plural ? "Vi" : "Ti"} aspettiamo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
