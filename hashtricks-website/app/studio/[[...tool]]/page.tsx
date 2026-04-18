"use client";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-bold">Sanity Studio not configured</h1>
        <p className="mt-4 text-[var(--color-neutral)]/70">
          Set <code className="font-mono text-[var(--color-accent)]">NEXT_PUBLIC_SANITY_PROJECT_ID</code> in your
          environment to enable the CMS.
        </p>
        <p className="mt-2 text-sm text-[var(--color-neutral)]/50">
          Create a free project at <a className="text-[var(--color-primary)] hover:text-[var(--color-accent)]" href="https://sanity.io/manage" target="_blank" rel="noreferrer">sanity.io/manage</a>, then add the project ID to <code className="font-mono">.env.local</code>.
        </p>
      </div>
    );
  }
  return <NextStudio config={config} />;
}
