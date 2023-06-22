"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import MarkdownComponents from "./Components";

interface MarkdownProps {
  markdown: string;
}

function Markdown({ markdown }: MarkdownProps) {
  return (
    <ReactMarkdown
      className="prose-dark w-full lg:prose-xl"
      components={MarkdownComponents}
      skipHtml={false}
      rehypePlugins={[rehypeRaw]}
    >
      {markdown}
    </ReactMarkdown>
  );
}

export default Markdown;
