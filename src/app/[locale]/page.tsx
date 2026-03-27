import { useTranslations } from "next-intl";
import WaitlistForm from "@/components/WaitlistForm";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const steps = [
  { num: "1", titleKey: "step1Title", descKey: "step1Desc" },
  { num: "2", titleKey: "step2Title", descKey: "step2Desc" },
  { num: "3", titleKey: "step3Title", descKey: "step3Desc" },
] as const;

const benefits = [
  { icon: "📄", titleKey: "benefit1Title", descKey: "benefit1Desc" },
  { icon: "💳", titleKey: "benefit2Title", descKey: "benefit2Desc" },
  { icon: "🛡️", titleKey: "benefit3Title", descKey: "benefit3Desc" },
  { icon: "⭐", titleKey: "benefit4Title", descKey: "benefit4Desc" },
] as const;

const quotes = [
  { textKey: "quote1", author: "Marta G., Barcelona" },
  { textKey: "quote2", author: "Jordi P., Hospitalet" },
  { textKey: "quote3", author: "Ana R., Gràcia" },
] as const;

export default function Home() {
  const t = useTranslations();

  const formTranslations = {
    placeholder: t("form.placeholder"),
    renter: t("form.renter"),
    host: t("form.host"),
    submit: t("form.submit"),
    loading: t("form.loading"),
    successTitle: t("form.successTitle"),
    successMessage: t("form.successMessage"),
    errorDuplicate: t("form.errorDuplicate"),
    errorGeneric: t("form.errorGeneric"),
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            Spacito 📦
          </span>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="#waitlist"
              className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              {t("navbar.cta")}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="waitlist"
        className="relative py-20 sm:py-28 px-4 overflow-hidden"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/75" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {t("hero.title1")}
            <br />
            <span className="text-primary">{t("hero.title2")}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex justify-center">
            <WaitlistForm translations={formTranslations} />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            {t("howItWorks.heading")}
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto">
                  {step.num}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {t(`howItWorks.${step.titleKey}`)}
                </h3>
                <p className="mt-3 text-gray-600">
                  {t(`howItWorks.${step.descKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Spacito */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            {t("whySpacito.heading")}
          </h2>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div
                key={b.titleKey}
                className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm"
              >
                <div className="text-4xl">{b.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {t(`whySpacito.${b.titleKey}`)}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {t(`whySpacito.${b.descKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            {t("socialProof.heading")}
          </h2>
          <p className="mt-3 text-center text-gray-600 text-lg">
            {t("socialProof.subtitle")}
          </p>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {quotes.map((q, i) => (
              <blockquote
                key={i}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
              >
                <p className="text-gray-700 italic">
                  &ldquo;{t(`socialProof.${q.textKey}`)}&rdquo;
                </p>
                <footer className="mt-4 text-sm text-gray-500">
                  — {q.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t("finalCta.heading")}
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            {t("finalCta.subtitle")}
          </p>
          <div className="mt-10 flex justify-center">
            <WaitlistForm translations={formTranslations} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-500">
          {t("footer.text")}
        </div>
      </footer>
    </div>
  );
}
