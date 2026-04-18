export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Hashtricks shipped a working AI triage system in six weeks that now handles 80% of our inbound support volume. The team understood our operations better than our own tooling did.",
    author: "Placeholder Name",
    role: "Head of Ops",
    company: "Placeholder Co.",
  },
  {
    quote:
      "They became a genuine extension of our team. Senior engineers, sharp opinions, and a bias for shipping.",
    author: "Placeholder Name",
    role: "CTO",
    company: "Placeholder Co.",
  },
  {
    quote:
      "We finally retired three spreadsheets and a legacy tool. The new platform paid for itself in a quarter.",
    author: "Placeholder Name",
    role: "COO",
    company: "Placeholder Co.",
  },
];
