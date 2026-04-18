import { Target, Zap, Users, TrendingUp, type LucideIcon } from "lucide-react";

export type Value = { title: string; body: string; icon: LucideIcon };

export const values: Value[] = [
  {
    title: "AI-first",
    body: "AI is in our DNA, not bolted on. We build systems that get smarter over time.",
    icon: Zap,
  },
  {
    title: "Senior team",
    body: "No junior-only squads. Every project has senior engineers on the critical path.",
    icon: Users,
  },
  {
    title: "Fast delivery",
    body: "First usable version in weeks, not quarters. Iterate with your customers in the loop.",
    icon: TrendingUp,
  },
  {
    title: "Outcome-driven",
    body: "We measure success in time saved, revenue unlocked, users retained — not lines of code.",
    icon: Target,
  },
];
