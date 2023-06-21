import Markdown from "@/components/Markdown";
import type { Article } from "src/@types";

async function fetchArticle(id: string): Promise<Article> {
  const data = await fetch(`https://dev.to/api/articles/${id}`);
  const json = await data.json();
  return json;
}

async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await fetchArticle(params.id);

  return (
    <div className="flex flex-col items-center p-6 lg:px-96 lg:py-48">
      <h1 className="mb-12 text-6xl font-bold">{article?.title}</h1>
      <Markdown markdown={article?.body_markdown} />
    </div>
  );
}

export default ArticlePage;

const getArticles = async (): Promise<Article[]> => {
  const res = await fetch("https://dev.to/api/articles?username=ivanms1");
  const json = await res.json();
  return json;
};

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    id: String(article?.id),
  }));
}
