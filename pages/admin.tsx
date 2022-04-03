/* eslint-disable @next/next/no-page-custom-font */
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import "tailwindcss/tailwind.css";
import Menu from "../components/menu";
import Timeline from "../components/timeline";
import { Guest, PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";
import GuestComponent from "../components/guest";
import { useState } from "react";

export default function Home({
  guests,
  children,
  adults,
  expectedAdults,
  expectedChildren,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [filteredGuests, setFiltered] = useState(guests);
  if (!guests) {
    return <div>ONLY ADMIN PAGE</div>;
  }

  const filter = (e: any) => {
    const word = e.target.value.toLowerCase();
    const filtered = guests.filter(
      (g: Guest) =>
        g.helloNames.toLowerCase().includes(word) ||
        g.name.toLowerCase().includes(word)
    );
    setFiltered(filtered);
  };

  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>Matrimonio Barbi e Giuppi (feat. Jaco)</title>
        <meta
          name="description"
          content="Matrimonio Barbi e Giuppi (feat. Jaco)"
        />
        <link rel="icon" href="/logo.svg" />
        <meta property="og:title" content="11 giugno 2022" />
        <meta
          property="og:description"
          content="Matrimonio Barbi e Giuppi (feat. Jaco)"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.barbigiuppiejaco.it/" />
        <meta
          property="og:image"
          content="https://barbigiuppiejaco.it/logo.png"
        />
      </Head>
      <main>
        <div className="">
          <div>
            TOTAL : {children + adults} (expected{" "}
            {expectedAdults + expectedChildren})
          </div>
          <div>
            ADULTS : {adults} (expected {expectedAdults})
          </div>
          <div>
            CHILDREN : {children} (expected {expectedChildren})
          </div>
        </div>
        <div>
          <div className="flex gap-4 w-8">
            <label htmlFor="search">SEARCH</label>
            <input
              id="search"
              onChange={filter}
              className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 rounded border-2 sm:text-sm border-gray-300"
            ></input>
          </div>
        </div>
        <div className="mt-8 flex flex-col p-8">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Link
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Replied
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Accepted
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Adults
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Children
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Notes
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Updated
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredGuests?.map((g: Guest, k: any) => (
                    <GuestComponent guest={g} key={k} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export interface GuestData {
  name: string;
  names: string[];
  plural: boolean;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const prisma = new PrismaClient();

  const password = query.password;
  if (password !== "jacos82") {
    return { props: {} };
  }
  const guests = await prisma.guest.findMany();
  const acceptedGuests = await prisma.guest.findMany({
    where: {
      accepted: true,
    },
  });

  const totalAdults = acceptedGuests
    .map((g) => Number(g.adults))
    .reduce((p, c) => p + c, 0);
  const totalChildren = acceptedGuests
    .map((g) => Number(g.children))
    .reduce((p, c) => p + c, 0);

  const excpectedTotalAdults = guests
    .map((g) => Number(g.expectedAdults))
    .reduce((p, c) => p + c, 0);
  const exceptedTotalChildren = guests
    .map((g) => Number(g.exceptedChildren))
    .reduce((p, c) => p + c, 0);

  return {
    props: {
      guests: JSON.parse(JSON.stringify(guests)),
      children: totalChildren,
      adults: totalAdults,
      expectedAdults: excpectedTotalAdults,
      expectedChildren: exceptedTotalChildren,
    },
  };
};
