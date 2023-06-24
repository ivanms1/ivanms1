"use client";

import React from "react";
import { RoughNotation } from "react-rough-notation";
import { formatDistance } from "date-fns";

import type { Article } from "src/@types/articles";

interface ArticleProps {
  article: Article;
}

function Article({ article }: ArticleProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <a
      href={article.url}
      className="btn group flex flex-col items-start gap-3"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="px-1 text-sm text-gray-500">
        <span>
          {formatDistance(new Date(article?.created_at ?? ""), new Date(), {
            addSuffix: true,
          })}
        </span>{" "}
        <span>·</span> {article.reading_time_minutes} min read
      </div>
      <RoughNotation type="box" show={isHovered}>
        <p className="self-start px-1 text-xl font-bold text-white">
          {article?.title}
        </p>
      </RoughNotation>
      <p className="px-1 text-gray-400">{article?.description}</p>
    </a>
  );
}

export default Article;
