import React from "react";
import rangeParser from "parse-numeric-range";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import type { CodeComponent } from "react-markdown/lib/ast-to-react";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

const MarkdownComponents: {
  code: keyof JSX.IntrinsicElements | CodeComponent | undefined;
} = {
  code({ node, className, ...props }) {
    const hasLang = /language-(\w+)/.exec(className || "");
    const hasMeta = node?.data?.meta as string;

    const applyHighlights: object = (applyHighlights: number) => {
      if (hasMeta) {
        const RE = /{([\d,-]+)}/;
        const metadata = hasMeta?.replace?.(/\s/g, "");

        if (!metadata) {
          return;
        }
        const strlineNumbers = RE?.test(metadata)
          ? RE?.exec(metadata)?.[1]
          : "0";
        if (!strlineNumbers) {
          return;
        }
        const highlightLines = rangeParser(strlineNumbers);
        const highlight = highlightLines;

        const data: string | null = highlight.includes(applyHighlights)
          ? "highlight"
          : null;
        return { data };
      } else {
        return {};
      }
    };
    console.log("hasLang", hasLang);

    return hasLang ? (
      <SyntaxHighlighter
        style={oneDark}
        language={hasLang[1]}
        PreTag="div"
        className="codeStyle"
        showLineNumbers={true}
        wrapLines={!!hasMeta}
        useInlineStyles={true}
        lineProps={applyHighlights}
      >
        {props.children as any}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props} />
    );
  },
};
export default MarkdownComponents;
