export type JobPosting = {
  slug: string;
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  summary: string;
};

export const placeholderJobs: JobPosting[] = [];
