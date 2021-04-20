import React from "react";
import { HelloWorld } from "@kaizen/core/components/HelloWorld";
import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Head>
        <title>NextJS</title>
      </Head>
      <HelloWorld />
      <Link href="/news">News</Link>
    </>
  );
}
