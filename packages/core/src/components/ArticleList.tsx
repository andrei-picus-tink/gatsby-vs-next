import { NewsExcerpt } from "../services/news";
import React, { ComponentType } from "react";

type Props = {
  articles: NewsExcerpt[];
  LinkComponent: ComponentType<{ href: string }>;
};

export const ArticleList = ({ articles, LinkComponent }: Props) => (
  <>
    <h1>Misadventures of Florida Man</h1>
    <ul>
      {articles.map((article) => (
        <li key={article.slug}>
          <LinkComponent href={`/news/${article.slug}`}>
            {article.title}
          </LinkComponent>
        </li>
      ))}
    </ul>
  </>
);
