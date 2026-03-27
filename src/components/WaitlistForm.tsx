"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type FormTranslations = {
  placeholder: string;
  renter: string;
  host: string;
  submit: string;
  loading: string;
  successTitle: string;
  successMessage: string;
  errorDuplicate: string;
  errorGeneric: string;
};

export default function WaitlistForm({
  translations: t,
}: {
  translations: FormTranslations;
}) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"host" | "renter">("renter");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const { error } = await supabase
      .from("waitlist")
      .insert({ email, role, city: "Barcelona" });

    if (error) {
      setStatus("error");
      setErrorMsg(
        error.code === "23505" ? t.errorDuplicate : t.errorGeneric
      );
    } else {
      setStatus("success");
      setEmail("");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
        <p className="text-green-800 font-semibold text-lg">
          {t.successTitle}
        </p>
        <p className="text-green-700 mt-1">{t.successMessage}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-xl"
    >
      <input
        type="email"
        required
        placeholder={t.placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as "host" | "renter")}
        className="px-4 pr-16 py-3 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      >
        <option value="renter">{t.renter}</option>
        <option value="host">{t.host}</option>
      </select>
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {status === "loading" ? t.loading : t.submit}
      </button>
      {status === "error" && (
        <p className="text-red-600 text-sm mt-1 sm:mt-0 sm:self-center">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
