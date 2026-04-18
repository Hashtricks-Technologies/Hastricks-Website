export type ProcessStep = { number: string; title: string; body: string };

export const process: ProcessStep[] = [
  { number: "01", title: "Discovery", body: "We map your workflows, users, and constraints. No assumptions." },
  { number: "02", title: "Design", body: "Architecture and UI, validated before we write a line of code." },
  { number: "03", title: "Build", body: "Weekly releases, tight feedback loops, everything owned by you." },
  { number: "04", title: "Scale", body: "We stay on to optimise, harden, and help your team take it forward." },
];
