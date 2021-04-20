import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { NewsArticle, newsService } from "@kaizen/core/services/news";
import { Article } from "@kaizen/core/components/Article";
import Link from "next/link";

type Props = {
  article: NewsArticle;
};

type Query = { id: string };

export const getStaticPaths: GetStaticPaths<Query> = async () => {
  const articles = await newsService.fetchLatest();

  return {
    paths: articles.map((article) => ({ params: { id: article.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Query> = async ({
  params,
}) => ({
  props: { article: await newsService.fetchArticle(params!.id) },
});

export default function ArticlePage(props: Props) {
  return (
    <>
      <Article article={props.article} />
      <Link href="/news">News </Link> | <Link href="/">Home</Link>
    </>
  );
}
