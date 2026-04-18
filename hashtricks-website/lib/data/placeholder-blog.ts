export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  tags: string[];
};

export const placeholderBlog: BlogPost[] = [];
