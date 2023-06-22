"use client";

import Link from "next/link";
import React from "react";
import { RoughNotation } from "react-rough-notation";
import { formatDistance } from "date-fns";

import { readingTime } from "src/utils/readingTime";

interface ArticleProps {
  article: {
    cuid?: string | null | undefined;
    title?: string | null | undefined;
    dateAdded?: string | null | undefined;
    slug?: string | null | undefined;
    brief?: string | null | undefined;
    contentMarkdown?: string | null | undefined;
  } | null;
}

function Article({ article }: ArticleProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Link
      href={`/article/${article?.slug}`}
      className="btn group flex flex-col items-start gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="px-1 text-sm text-gray-500">
        <span>
          {formatDistance(new Date(article?.dateAdded ?? ""), new Date(), {
            addSuffix: true,
          })}
        </span>{" "}
        <span>·</span> {readingTime(article?.contentMarkdown ?? "")} min read
      </div>
      <RoughNotation type="box" show={isHovered}>
        <p className="self-start px-1 text-xl font-bold text-white">
          {article?.title}
        </p>
      </RoughNotation>
      <p className="px-1 text-gray-400">{article?.brief}</p>
    </Link>
  );
}

export default Article;
