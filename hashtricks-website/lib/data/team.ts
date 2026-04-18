export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
};

export const team: TeamMember[] = Array.from({ length: 10 }, (_, i) => ({
  name: `Team Member ${i + 1}`,
  role: i === 0 ? "Founder & CEO" : i === 1 ? "CTO" : i < 5 ? "Senior Engineer" : "Engineer",
  bio: "Placeholder bio — replace with real content before launch.",
}));
