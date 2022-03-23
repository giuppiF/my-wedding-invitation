import { Guest } from "@prisma/client";
import Confirm from "../confirm";
import Router from "next/router";
import { useState } from "react";

async function updateGuest(name: string, confirm: boolean): Promise<void> {
  await fetch(`/api/confirm/?name=${name}`, {
    method: "PUT",
    body: JSON.stringify({
      confirm: confirm,
    }),
  });
}

export const Chi = ({ guest }: { guest: Guest }) => {
  const [confirm, setConfirm] = useState(true);

  const submitForm = async (event: any) => {
    event.preventDefault();
    await updateGuest(guest.name, confirm);
  };

  return (
    <div className="">
      <form
        action="#"
        className="sm:max-w-xl sm:mx-auto lg:mx-0"
        onSubmit={submitForm}
      >
        <div className="flex  flex-col  gap-8">
          <div className="flex flex-col gap-2 ">
            <p className=" tracking-tight ">Confermi la tua partecipazione?</p>
            <div className="w-64">
              <Confirm confirm={confirm} setConfirm={setConfirm} />
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className=" tracking-tight ">Quante persone sarete?</p>
            <div className="w-64 flex gap-8">
              <div>
                <label htmlFor="adults" className="block text-2xl font-medium ">
                  Adulti
                </label>
                <select
                  id="adults"
                  name="adults"
                  className="mt-1 text-black block w-full pl-3 pr-10 py-2 text-2xl  border-gray-300 focus:outline-none focus:ring-red-700 focus:border-red-700  rounded-md"
                  defaultValue="1"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="children"
                  className="block text-2xl font-medium "
                >
                  Bimbi
                </label>
                <select
                  id="children"
                  name="children"
                  className="mt-1 text-black  block w-full pl-3 pr-10 py-2 text-2xl border-gray-300 focus:outline-none focus:ring-red-400 focus:border-red-400  rounded-md"
                  defaultValue="0"
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="comment" className="block text-2xl font-medium ">
              Note/intolleranze alimentari/necessità/varieedeventuali
            </label>
            <div className="mt-1">
              <textarea
                rows={4}
                name="comment"
                id="comment"
                className="shadow-sm focus:ring-red-400 focus:border-red-400 block w-full sm:text-sm border-gray-300 rounded-md"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export const ChiIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.0318 14.88C19.1698 14.3453 19.7153 14.0237 20.25 14.1618C21.3227 14.4387 22.273 15.0641 22.9517 15.9397C23.6304 16.8152 23.9992 17.8914 24 18.9993L24 21C24 21.5523 23.5523 22 23 22C22.4477 22 22 21.5523 22 21L22 19.0007C22 19.0006 22 19.0008 22 19.0007C21.9994 18.3361 21.7782 17.6902 21.371 17.165C20.9638 16.6396 20.3936 16.2644 19.75 16.0982C19.2153 15.9602 18.8937 15.4148 19.0318 14.88Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H13C14.3261 14 15.5979 14.5268 16.5355 15.4645C17.4732 16.4021 18 17.6739 18 19V21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21V19C16 18.2044 15.6839 17.4413 15.1213 16.8787C14.5587 16.3161 13.7956 16 13 16H5C4.20435 16 3.44129 16.3161 2.87868 16.8787C2.31607 17.4413 2 18.2044 2 19V21C2 21.5523 1.55228 22 1 22C0.447715 22 0 21.5523 0 21V19C0 17.6739 0.526784 16.4021 1.46447 15.4645Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0312 2.88196C15.1682 2.34694 15.713 2.02426 16.248 2.16125C17.3236 2.43663 18.2768 3.06213 18.9576 3.93914C19.6383 4.81615 20.0078 5.89479 20.0078 7.005C20.0078 8.11521 19.6383 9.19385 18.9576 10.0709C18.2768 10.9479 17.3236 11.5734 16.248 11.8488C15.713 11.9857 15.1682 11.6631 15.0312 11.128C14.8943 10.593 15.2169 10.0482 15.752 9.91125C16.3973 9.74603 16.9692 9.37073 17.3777 8.84452C17.7861 8.31831 18.0078 7.67113 18.0078 7.005C18.0078 6.33887 17.7861 5.69169 17.3777 5.16548C16.9692 4.63928 16.3973 4.26398 15.752 4.09875C15.2169 3.96176 14.8943 3.41699 15.0312 2.88196Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4ZM4 7C4 4.23858 6.23858 2 9 2C11.7614 2 14 4.23858 14 7C14 9.76142 11.7614 12 9 12C6.23858 12 4 9.76142 4 7Z"
      fill="currentColor"
    />
  </svg>
);
