import { CreatePagesArgs, SourceNodesArgs } from "gatsby";
import { newsService } from "../core/src/services/news";
import path from "path";

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}: SourceNodesArgs) => {
  const { createNode } = actions;

  const articles = await newsService.fetchLatest();
  articles.forEach((article) => {
    const nodeMeta = {
      id: createNodeId(`blog-post-${article.slug}`),
      parent: null,
      children: [],
      internal: {
        type: "Article",
        mediaType: "text/html",
        content: JSON.stringify(article),
        contentDigest: createContentDigest(article),
      },
    };
    const node = { ...article, ...nodeMeta };
    createNode(node);
  });
};

export type AllArticlesQuery = {
  allArticle: {
    edges: {
      node: {
        slug: string;
        id: string;
      };
    }[];
  };
};

exports.createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;
  const { data } = await graphql<AllArticlesQuery>(`
    query {
      allArticle {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `);

  if (data) {
    data.allArticle.edges.forEach(({ node }) => {
      createPage({
        path: `news/${node.slug}`,
        component: path.resolve("./src/templates/Article/Article.tsx"),
        context: {
          id: node.id,
        },
      });
    });
  }
};
