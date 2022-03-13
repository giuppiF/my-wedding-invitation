/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import "tailwindcss/tailwind.css";
import Menu from "../components/menu";
import Timeline from "../components/timeline";

const Home: NextPage = () => {
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>Matrimonio Barbi e Giuppi (featuring Jacopo)</title>
        <meta
          name="description"
          content="Matrimonio Barbi e Giuppi (featuring Jacopo)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main>
        <Header />
        <Timeline />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
