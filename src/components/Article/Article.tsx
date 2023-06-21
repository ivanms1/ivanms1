"use client";

import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import { RoughNotation } from "react-rough-notation";

import type { Article } from "src/@types";

interface ArticleProps {
  article: Article;
}

function Article({ article }: ArticleProps) {
  const { t } = useTranslation("home");
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Link
      href={`/article/${article.id}`}
      className="btn group flex flex-col items-start gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="px-1 text-sm text-gray-500">
        <span>{article.readable_publish_date}</span> <span>·</span>{" "}
        {article.reading_time_minutes} {t("min-read")}
      </div>
      <RoughNotation type="box" show={isHovered}>
        <p className="self-start px-1 text-xl font-bold text-white">
          {article.title}
        </p>
      </RoughNotation>
      <p className="px-1 text-gray-400">{article.description}</p>
    </Link>
  );
}

export default Article;
