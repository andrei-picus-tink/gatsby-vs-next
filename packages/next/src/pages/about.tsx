import React from "react";
import { GetStaticProps } from "next";
import { randomNumberService } from "@kaizen/core/services/rng";
import { About } from "@kaizen/core/components/About";
import Head from "next/head";
import Link from "next/link";

type Props = {
  data: number;
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    data: await randomNumberService.fetchData(),
  },
});

export default function AboutPage({ data }: Props) {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <About data={data} />
      <Link href="/">Home</Link>
    </>
  );
}
