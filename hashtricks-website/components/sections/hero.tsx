"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientMesh } from "@/components/brand/gradient-mesh";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { company } from "@/lib/data/company";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <GradientMesh />
      <div className="mx-auto max-w-[1280px] px-5 pt-28 pb-24 md:pt-40 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-surface-border)]/80 bg-[var(--color-surface-muted)]/40 backdrop-blur px-3 py-1 text-xs text-[var(--color-neutral)]/75">
            <HashGlyph /> AI-powered systems for growing businesses
          </div>
          <h1 className="mt-6 font-display text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            We build custom software and{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">AI-powered systems</span>{" "}
            that help businesses operate smarter.
          </h1>
          <p className="mt-6 text-lg text-[var(--color-neutral)]/70 max-w-2xl leading-relaxed">
            Reduce manual work, scale efficiently, and unlock the leverage AI gives your team. We design, build, and deploy — end to end.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={company.bookCallUrl} target="_blank" rel="noreferrer">
                Book a Call <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={company.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
