import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/next.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import GraphQLIcon from "@/assets/icons/graphql.svg";
import ApolloIcon from "@/assets/icons/apollo.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import NestIcon from "@/assets/icons/nestjs.svg";
import PrismaIcon from "@/assets/icons/prisma.svg";
import PothosIcon from "@/assets/icons/pothos.svg";
import FramerIcon from "@/assets/icons/framer.svg";
import ReactQueryIcon from "@/assets/icons/react-query.svg";
import ReactHookFormIcon from "@/assets/icons/react-hook-form.svg";
import JotaiIcon from "@/assets/icons/jotai.svg";

export const TECH_STACK = [
  {
    name: "React",
    icon: ReactIcon,
    url: "https://react.dev/",
    description: "React is a JavaScript library for building user interfaces.",
  },
  {
    name: "Next.js",
    icon: NextIcon,
    url: "https://nextjs.org/",
    description: "The React Framework for Production.",
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
    url: "https://www.typescriptlang.org/",
    description:
      "TypeScript is an open-source language which builds on JavaScript, one of the world's most used tools, by adding static type definitions.",
  },
  {
    name: "GraphQL",
    icon: GraphQLIcon,
    url: "https://graphql.org/",
    description:
      "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
  },
  {
    name: "Apollo",
    icon: ApolloIcon,
    url: "https://www.apollographql.com/",
    description:
      "Apollo is a set of tools that enables developers to easily build GraphQL applications.",
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
    url: "https://tailwindcss.com/",
    description:
      "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
  },
  {
    name: "NestJS",
    icon: NestIcon,
    url: "https://nestjs.com/",
    description:
      "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
  },
  {
    name: "Prisma",
    icon: PrismaIcon,
    url: "https://www.prisma.io/",
    description:
      "Next-generation Node.js and TypeScript ORM for PostgreSQL, MySQL, MariaDB, SQL Server, and SQLite.",
  },
  {
    name: "Pothos",
    icon: PothosIcon,
    url: "https://pothos-graphql.dev/",
    description: "Plugin based GraphQL schema builder for typescript.",
  },
  {
    name: "Framer Motion",
    icon: FramerIcon,
    url: "https://www.framer.com/motion/",
    description: "A production-ready motion library for React.",
  },
  {
    name: "TanStack Query/React Query",
    icon: ReactQueryIcon,
    url: "https://tanstack.com/query/latest",
    description:
      "Hooks for fetching, caching and updating asynchronous data in React.",
  },
  {
    name: "React Hook Form",
    icon: ReactHookFormIcon,
    url: "https://react-hook-form.com/",
    description:
      "Performant, flexible and extensible forms with easy-to-use validation.",
  },
  {
    name: "Jotai",
    icon: JotaiIcon,
    url: "https://jotai.pmnd.rs/",
    description: "Primitive and flexible state management for React.",
  },
] as const;
