import Markdown from "@/components/Markdown";
import { fetchArticle, getArticles } from "src/app/services/articles";

async function ArticlePage({ params }: { params: { slug: string } }) {
  const data = await fetchArticle(params.slug);

  return (
    <div className="flex flex-col items-center p-6 lg:px-96 lg:py-48">
      <h1 className="mb-12 text-6xl font-bold">{data?.post?.title}</h1>
      <Markdown markdown={data?.post?.contentMarkdown ?? ""} />
    </div>
  );
}

export default ArticlePage;

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.user.publication.posts.map((article) => ({
    id: String(article?.slug ?? ""),
  }));
}
