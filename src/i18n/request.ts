import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get("locale")?.value;
  const locale = cookieLocale || "en";

  return {
    locale,
    messages: (await import(`../../public/locales/${locale}/common.json`))
      .default,
  };
});
