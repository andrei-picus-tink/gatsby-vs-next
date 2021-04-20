export type NewsArticle = { slug: string; title: string; body: string };

export type NewsExcerpt = { slug: string; title: string };

export interface NewsService {
  fetchLatest: () => Promise<NewsExcerpt[]>;
  fetchArticle: (slug: string) => Promise<NewsArticle>;
}

const articles: NewsArticle[] = [
  {
    slug: "florida-man-banana",
    title: "Florida Man attacks girlfriend with banana",
    body:
      "A deputy noticed the girlfriend's face was slightly red where she said the banana hit her, an arrest affidavit said. The deputy also found the banana in the garbage and parts of the peel on the ground.",
  },
  {
    slug: "florida-man-imaginary",
    title: "Florida Man kills imaginary friend and turns himself in",
    body: "He was really sorry.",
  },
  {
    slug: "florida-man-taco",
    title:
      "Florida Man tries to use a taco as ID after his car catches fire at Taco Bell",
    body:
      "Tacos are not recognized as legal form of identification in Florida.",
  },
];

export const newsService: NewsService = {
  fetchLatest: async () => articles,

  fetchArticle: async (slug: string) => {
    const article = articles.find((article) => article.slug === slug);

    if (!article) {
      throw new Error(`Article ${slug} not found!`);
    }

    return article;
  },
};
