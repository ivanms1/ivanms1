import useTranslation from "next-translate/useTranslation";

function Home() {
  const { t } = useTranslation("home");
  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-6xl text-red-500">{t("welcome")}</p>
    </div>
  );
}

export default Home;
