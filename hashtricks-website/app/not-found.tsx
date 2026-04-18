import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1280px] px-5 py-32 text-center">
      <p className="font-mono text-[var(--color-accent)]">404</p>
      <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold">Page not found</h1>
      <p className="mt-4 text-[var(--color-neutral)]/70">
        That URL doesn&apos;t exist — let&apos;s get you home.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
