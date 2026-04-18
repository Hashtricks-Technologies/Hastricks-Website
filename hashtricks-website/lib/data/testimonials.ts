export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Hashtricks was seamless. They built exactly the ordering platform we envisioned — customers can now order from multiple kitchens in a single checkout, and our vendors love the dashboard. The impact on wait times was immediate.",
    author: "Saravannan",
    role: "CTO",
    company: "Eateszy",
  },
  {
    quote:
      "They took our idea and turned it into a beautiful, fully functional store. Every detail was handled with care — from the product pages to checkout. Our wooden elephant collection now reaches customers all across India.",
    author: "Thanus Murugananthan",
    role: "Founder",
    company: "The Urban Elephant",
  },
];
