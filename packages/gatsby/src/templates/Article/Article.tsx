import React from "react";
import { NewsArticle } from "@kaizen/core/services/news";
import { Article } from "@kaizen/core/components/Article";
import { graphql, Link } from "gatsby";

type Props = {
  data: {
    article: NewsArticle;
  };
};

export default function ArticlePage({ data: { article } }: Props) {
  return (
    <>
      <Article article={article} />
      <Link to="/news">News </Link> | <Link to="/">Home</Link>
    </>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    article(id: { eq: $id }) {
      slug
      title
      body
    }
  }
`;
