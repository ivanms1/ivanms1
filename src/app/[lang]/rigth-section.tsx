"use client";
import { TabsTrigger } from "@radix-ui/react-tabs";
import useTranslation from "next-translate/useTranslation";

import { Tabs, TabsContent, TabsList } from "@/components/Tabs";
import { Heart, Star } from "lucide-react";

function RightSection() {
  const { t } = useTranslation("home");
  return (
    <Tabs defaultValue="repos">
      <TabsList className="flex gap-2 bg-transparent">
        <TabsTrigger
          className="flex w-44 items-center justify-center gap-1 border  py-2 transition-all  data-[state=active]:bg-slate-800"
          value="repos"
        >
          <span>{t("repositories")}</span>
          <Star className="h-4" />
        </TabsTrigger>
        <TabsTrigger
          className="flex w-44 items-center justify-center gap-1 border py-2 transition-all data-[state=active]:bg-slate-800"
          value="favorites"
        >
          <span>{t("tech-stack")}</span>
          <Heart className="h-4" />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="repos">repositories</TabsContent>
      <TabsContent value="favorites">favorite-libs</TabsContent>
    </Tabs>
  );
}

export default RightSection;
