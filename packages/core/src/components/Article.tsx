import React from "react";
import { NewsArticle } from "../services/news";

type Props = { article: NewsArticle };

export const Article = ({ article }: Props) => (
  <>
    <h1>{article.title}</h1>
    <div>{article.body}</div>
  </>
);
