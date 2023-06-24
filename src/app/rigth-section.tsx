"use client";
import { TabsTrigger } from "@radix-ui/react-tabs";
import { BookIcon, Heart } from "lucide-react";

import { Tabs, TabsContent, TabsList } from "@/components/Tabs";
import RepositoryCard from "@/components/RepositoryCard";

import { TECH_STACK } from "src/const";

import type { Repository } from "src/@types/repositories";

interface RightSectionProps {
  repositories: Repository[];
}

function RightSection({ repositories }: RightSectionProps) {
  return (
    <Tabs defaultValue="repos" className="lg:w-[35%]">
      <TabsList className="flex gap-2 bg-transparent p-0">
        <TabsTrigger
          className="flex w-1/2 items-center justify-center gap-1 border  py-2 transition-all  data-[state=active]:bg-slate-800"
          value="repos"
        >
          <span>Repositories</span>
          <BookIcon className="h-4" />
        </TabsTrigger>
        <TabsTrigger
          className="flex w-1/2 items-center justify-center gap-1 border py-2 transition-all data-[state=active]:bg-slate-800"
          value="favorites"
        >
          <span>Tech Stack</span>
          <Heart className="h-4" />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="repos">
        <div className="flex flex-col gap-4">
          {repositories.map((repo) => {
            return <RepositoryCard key={repo.id} repository={repo} />;
          })}
        </div>
      </TabsContent>
      <TabsContent value="favorites">
        <div className="flex flex-col gap-2">
          {TECH_STACK.map((tech) => {
            return (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[110px] flex-col gap-1 rounded border p-4 transition-all hover:-translate-y-1 hover:bg-slate-800"
              >
                <div className="flex items-center gap-2">
                  <tech.icon className="h-4" />
                  <span className="text-lg font-semibold">{tech?.name}</span>
                </div>
                <p className="text-sm text-gray-400">{tech?.description}</p>
              </a>
            );
          })}
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default RightSection;
