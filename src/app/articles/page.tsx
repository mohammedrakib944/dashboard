import Link from "next/link";
import React from "react";

async function getArticles() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=20",
    { next: { revalidate: 10 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Articles = async () => {
  const articles: any = await getArticles();

  let Articles = null;

  if (articles) {
    Articles = (
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {articles?.map((article: any) => (
          <article
            className="max-w-[400px] bg-white p-5 rounded-lg"
            key={article.id}
          >
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p>{article.body}</p>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="text-sm breadcrumbs pb-5">
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Articles</li>
        </ul>
      </div>
      <h2 className="text-lg font-bold mb-4">
        <span>Articles </span>
        <span className="font-light text-sm">
          - Incremental Static Regeneration , Regeneration in every 10 seconds
        </span>
      </h2>
      {Articles}
    </div>
  );
};

export default Articles;
