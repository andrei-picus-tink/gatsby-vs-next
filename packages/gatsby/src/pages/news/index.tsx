import React from "react";
import { NewsExcerpt } from "../../../../core/src/services/news";
import { graphql, Link } from "gatsby";

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
      <h1>Misadventures of Florida Man</h1>
      <ul>
        {data.allArticle.edges.map(({ node }) => (
          <li key={node.slug}>
            <Link to={node.slug}>{node.title}</Link>
          </li>
        ))}
      </ul>
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
