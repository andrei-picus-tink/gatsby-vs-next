import React from "react";
import { GetStaticProps } from "next";
import { NewsExcerpt, newsService } from "@kaizen/core/services/news";
import Link from "next/link";

type Props = {
  articles: NewsExcerpt[];
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    articles: await newsService.fetchLatest(),
  },
});

export default function LatestNews({ articles }: Props) {
  return (
    <>
      <h1>Misadventures of Florida Man</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/news/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">Home</Link>
    </>
  );
}
