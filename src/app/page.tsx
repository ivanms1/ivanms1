import { Github, Rss, Twitter } from "lucide-react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

import Article from "@/components/Article";
import RightSection from "./rigth-section";

import { getArticles } from "./services/articles";

async function Home() {
  const data = await getArticles();

  return (
    <div className="flex min-h-screen flex-col gap-24 p-6 lg:px-56 lg:py-48">
      <div className="flex w-full flex-col justify-between lg:flex-row">
        <div className="flex flex-col items-start gap-6 lg:w-3/5">
          <RoughNotation
            type="highlight"
            color="white"
            animationDuration={1500}
            show
          >
            <p className="p-2 text-6xl font-bold text-black">
              Hi, I&apos;m Ivan
            </p>
          </RoughNotation>

          <div className="flex flex-col gap-2">
            <p className="text-xl leading-loose text-gray-400">
              I am a software engineer, I love to build things and solve
              problems. I am passionate about technology and I am always looking
              for new challenges.
            </p>
            <p className="text-xl  leading-loose text-gray-400">
              I am interested in web development, mobile development, cloud
              computing, machine learning and artificial intelligence.
            </p>
          </div>
          <div className="flex gap-4">
            {SOCIALS.map((social) => {
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon
                    size={30}
                    className="transition-all hover:text-gray-400"
                  />
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
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 lg:w-3/5">
          <div className="flex justify-between text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <p className="uppercase">{getArticles.length} articles</p>
              <Rss className="h-4 " />
            </div>
            <a
              href="https://github.com/ivanms1/ivanms1"
              className="flex items-center gap-1 transition-all hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-xs">View this website&apos;s code</p>
              <Github className="h-4 " />
            </a>
          </div>
          <div className="flex flex-col gap-16">
            {data?.user?.publication?.posts?.map((article) => (
              <Article key={article?.cuid} article={article} />
            ))}
          </div>
        </div>
        <RightSection />
      </div>
    </div>
  );
}

const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/ivanms1",
    icon: Github,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ivanms1",
    icon: Twitter,
  },
];

export default Home;
