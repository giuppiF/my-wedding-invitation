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
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";

export default function Home({
  guestData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const guest = JSON.parse(guestData);
  const isValidGuest = !!guest;

  if (!isValidGuest) {
    return (
      <div className="relative overflow-hidden">
        <Head>
          <title>Matrimonio Barbi e Giuppi (featuring Jacopo)</title>
          <meta
            name="description"
            content="Matrimonio Barbi e Giuppi (featuring Jacopo)"
          />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <main>
          <div className="pt-10 bg-white sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <Header valid={isValidGuest} />
          </div>
        </main>

        <footer></footer>
      </div>
    );
  }
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>Matrimonio Barbi e Giuppi (featuring Jacopo)</title>
        <meta
          name="description"
          content="Matrimonio Barbi e Giuppi (featuring Jacopo)"
        />
        <link rel="icon" href="/logo.svg" />
        <meta property="og:title" content="Ecco l'invito!" />
        <meta
          property="og:description"
          content="Matrimonio di Barbi e Giuppi (featuring Jacopo)."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.barbigiuppiejaco.it/" />
        <meta
          property="og:image"
          content="https://barbigiuppiejaco.it/logo.svg"
        />
      </Head>
      <div className="bg-white ">
        <Menu />
      </div>
      <main>
        <div className="pt-10 bg-white sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <Header valid={true} guest={guest} />
        </div>
        <div className="pt-10  sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden bg-white ">
          <Timeline guest={guest} />
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

  const guestName = query.name || "";

  const guest = await prisma.guest.findUnique({
    where: { name: guestName as string },
  });

  return {
    props: {
      guestData: JSON.stringify(guest),
    },
  };
};
