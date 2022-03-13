import Confirm from "./confirm";
import { Chi, ChiIcon } from "./elements/chi";
import { Come, ComeIcon } from "./elements/come";
import { Cosa, CosaIcon } from "./elements/cosa";
import { Dove, DoveIcon } from "./elements/dove";
import { Quando, QuandoIcon } from "./elements/quando";

const elements = [
  { icon: <CosaIcon />, element: <Cosa />, name: "cosa" },
  { icon: <QuandoIcon />, element: <Quando />, name: "quando" },
  { icon: <DoveIcon />, element: <Dove />, name: "dove" },
  { icon: <ChiIcon />, element: <Chi />, name: "chi" },
  { icon: <ComeIcon />, element: <Come />, name: "come" },
];

export default function Timeline() {
  return (
    <div className="pt-10  sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden bg-green-800 ">
      <div className="mx-auto max-w-7xl px-8">
        <div className="">
          {elements.map((element, k) => (
            <div className="flex " id={element.name} key={k}>
              <div className="flex flex-col items-center mr-4 ">
                <div>
                  <div className="flex items-center justify-center w-28 h-28 border rounded-full">
                    {element.icon}
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300"></div>
              </div>
              <div className="pb-8 flex flex-col gap-8 mb-16">
                <p className="mb-2 text-8xl font-bold text-white uppercase">
                  {element.name}
                </p>
                <div className="text-white text-5xl">{element.element}</div>
              </div>
            </div>
          ))}

          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-28 h-28 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-32 h-32 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
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
            <div className="pt-1">
              <p className="mb-2 text-8xl uppercase font-bold text-white ">
                Vi aspettiamo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
