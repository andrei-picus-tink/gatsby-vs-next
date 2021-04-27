import React from "react";
import { NewsExcerpt } from "@kaizen/core/services/news";
import { graphql, Link } from "gatsby";
import { ArticleList } from "@kaizen/core/components/ArticleList";

type Props = {
  data: {
    allArticle: {
      edges: {
        node: NewsExcerpt;
      }[];
    };
  };
};

export default function LatestNews({ data }: Props) {
  return (
    <>
      <ArticleList
        articles={data.allArticle.edges.map(({ node }) => node)}
        LinkComponent={(props) => <Link to={props.href}>{props.children}</Link>}
      />
      <Link to="/">Home</Link>
    </>
  );
}

export const pageQuery = graphql`
  query {
    allArticle {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
