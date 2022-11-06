import Head from "next/head";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
}

const HomeLink = () => (
  <Link href="/">
    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-500">
      <span className="text-md font-medium leading-none text-white">r & m</span>
    </span>
  </Link>
);

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-row items-center gap-x-8 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-4">
        <HomeLink />
        <h1 className="font-semibold text-2xl">{title}</h1>
      </header>
    </>
  );
};
