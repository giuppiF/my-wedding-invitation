/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const options = [
  { value: true, label: "Si" },
  { value: false, label: "No" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface ConfirmProps {
  confirm: boolean;
  setConfirm: (confirm: boolean) => void;
}

export default function Confirm({ confirm, setConfirm }: ConfirmProps) {
  return (
    <RadioGroup value={confirm} onChange={setConfirm} className="mt-2">
      <RadioGroup.Label className="sr-only">Conferma</RadioGroup.Label>
      <div className="grid grid-cols-2 gap-3">
        {options.map((option, k) => (
          <RadioGroup.Option
            key={k}
            value={option.value}
            className={({ active, checked }) =>
              classNames(
                "cursor-pointer focus:outline-none",
                active ? "ring-2 ring-offset-2 ring-green-600" : "",
                checked
                  ? "bg-green-600 border-transparent text-white hover:bg-green-600"
                  : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                "border rounded-md py-2 px-2 flex items-center justify-center  font-medium uppercase sm:flex-1"
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
