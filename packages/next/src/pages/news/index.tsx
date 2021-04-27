import React from "react";
import { GetStaticProps } from "next";
import { NewsExcerpt, newsService } from "@kaizen/core/services/news";
import Link from "next/link";
import { ArticleList } from "@kaizen/core/components/ArticleList";

type Props = { articles: NewsExcerpt[] };

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    articles: await newsService.fetchLatest(),
  },
});

export default function LatestNews({ articles }: Props) {
  return (
    <>
      <ArticleList articles={articles} LinkComponent={Link} />
      <Link href="/">Home</Link>
    </>
  );
}
