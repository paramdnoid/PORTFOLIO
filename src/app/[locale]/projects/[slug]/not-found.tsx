import type { ReactElement } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function ProjectNotFound(): Promise<ReactElement> {
  const t = await getTranslations("common");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-xl text-muted-foreground">{t("notFound")}</p>
        <Button asChild className="mt-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 size-4" />
            {t("backToHome")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
