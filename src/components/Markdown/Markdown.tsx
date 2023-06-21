"use client";
import React from "react";
import ReactMarkdown from "react-markdown";

import MarkdownComponents from "./Components";

interface MarkdownProps {
  markdown: string;
}

function Markdown({ markdown }: MarkdownProps) {
  console.log("markdown", MarkdownComponents);
  return (
    <ReactMarkdown
      className="prose-dark w-full lg:prose-xl"
      components={MarkdownComponents}
    >
      {markdown}
    </ReactMarkdown>
  );
}

export default Markdown;
