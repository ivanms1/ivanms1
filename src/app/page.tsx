import { Rss } from "lucide-react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

import Article from "@/components/Article";
import RightSection from "./rigth-section";

import { getArticles } from "../services/articles";
import { getPinnedRepositories } from "src/services/repositories";

import { SOCIALS } from "src/const";

import GithubIcon from "@/assets/icons/github.svg";

const TITLE_ANIMATION_DURATION = 1500;

async function Home() {
  const data = await getArticles();
  const githubData = await getPinnedRepositories();

  return (
    <div className="flex min-h-screen flex-col gap-24 px-6 py-12 lg:px-56 lg:py-48">
      <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row lg:items-start">
        <div className="flex flex-col items-center gap-6 lg:w-3/5 lg:items-start">
          <RoughNotation
            type="highlight"
            color="white"
            animationDuration={TITLE_ANIMATION_DURATION}
            show
          >
            <p className="p-2 text-5xl font-bold text-black lg:text-6xl">
              Hi, I&apos;m Ivan
            </p>
          </RoughNotation>

          <div className="flex flex-col gap-2">
            <p className="text-center leading-8 text-gray-400 lg:text-start lg:text-xl">
              Passionate about web development and constantly exploring new
              technologies, I thrive on crafting sleek user interfaces.
            </p>
            <p className="text-center leading-8 text-gray-400 lg:text-start lg:text-xl">
              Mainly doing React, but interested on what the new upcoming JS
              frameworks and tools have to offer.
            </p>
          </div>
          <div className="flex gap-4">
            {SOCIALS.map((social) => {
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex cursor-pointer items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-6 fill-white transition-all hover:-translate-y-1" />
                </a>
              );
            })}
          </div>
        </div>
        <Image
          priority
          alt="Ivan"
          width={250}
          height={250}
          className="h-[250px] w-[250px] rounded object-cover object-right"
          src="/assets/images/ivan.jpg"
        />
      </div>
      <div className="flex flex-col justify-between gap-6 lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-3/5">
          <div className="flex justify-between text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <p className="uppercase">{data?.length} articles</p>
              <Rss className="h-4 " />
            </div>
            <a
              href="https://github.com/ivanms1/ivanms1"
              className="flex items-center gap-1 transition-all hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-xs">View this website&apos;s code</p>
              <GithubIcon className="h-4 " />
            </a>
          </div>
          <div className="flex flex-col gap-16">
            {data?.map((article) => (
              <Article key={article?.id} article={article} />
            ))}
          </div>
        </div>
        <RightSection repositories={githubData} />
      </div>
    </div>
  );
}

export default Home;
