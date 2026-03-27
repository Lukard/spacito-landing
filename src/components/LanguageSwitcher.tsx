"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

const locales = [
  { code: "es", label: "ES" },
  { code: "ca", label: "CA" },
  { code: "en", label: "EN" },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    // Replace the locale segment in the pathname
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      {locales.map((l, i) => (
        <span key={l.code} className="flex items-center">
          {i > 0 && <span className="text-gray-300 mx-1">|</span>}
          <button
            onClick={() => switchLocale(l.code)}
            className={`px-1 py-0.5 rounded transition-colors ${
              locale === l.code
                ? "text-primary font-bold"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}
