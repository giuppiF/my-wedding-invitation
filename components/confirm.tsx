/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const options = [
  { value: "y", label: "Si" },
  { value: "n", label: "No" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Confirm() {
  const [confirm, setConfirm] = useState("y");

  return (
    <RadioGroup value={confirm} onChange={setConfirm} className="mt-2">
      <RadioGroup.Label className="sr-only">Conferma</RadioGroup.Label>
      <div className="grid grid-cols-2 gap-3">
        {options.map((option) => (
          <RadioGroup.Option
            key={option.value}
            value={option.value}
            className={({ active, checked }) =>
              classNames(
                "cursor-pointer focus:outline-none",
                active ? "ring-2 ring-offset-2 ring-red-400" : "",
                checked
                  ? "bg-red-400 border-transparent text-white hover:bg-red-400"
                  : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                "border rounded-md py-3 px-3 flex items-center justify-center  font-medium uppercase sm:flex-1"
              )
            }
          >
            <RadioGroup.Label as="p">{option.label}</RadioGroup.Label>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
