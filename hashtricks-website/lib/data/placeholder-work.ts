export type WorkItem = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  metric: string;
  services: string[];
  challenge?: { heading: string; body: string; points?: string[] };
  solution?: { heading: string; body: string; points?: string[]; backend?: string[] };
  outcomes?: { heading: string; points: string[]; takeaway: string };
};

export const placeholderWork: WorkItem[] = [
  {
    slug: "eateszy-multi-kitchen-ordering",
    title: "Multi-Kitchen Ordering System",
    industry: "Food & Hospitality",
    summary:
      "A unified multi-vendor ordering platform for food courts — letting customers browse, order from multiple kitchens, and pay in a single transaction.",
    metric: "~40% faster ordering",
    services: ["Custom Software", "Web Development"],
    challenge: {
      heading: "The Problem",
      body: "Eateszy approached us with a startup idea to solve a common friction point in food courts. Customers had to stand in multiple queues, place separate orders at different outlets, and wait at each counter individually — resulting in longer wait times, a fragmented experience, and operational inefficiencies for vendors.",
      points: [
        "Customers queuing separately at every outlet",
        "No single checkout across multiple kitchens",
        "Vendors operating in silos with no coordination layer",
      ],
    },
    solution: {
      heading: "The Solution",
      body: "We designed and developed a custom multi-vendor ordering platform tailored for food court environments. The platform enables customers to browse menus from multiple kitchens, add items from different vendors into one unified cart, and complete a single checkout and payment — with orders routed automatically to the right kitchen.",
      points: [
        "Unified menu browsing across all vendors",
        "Single cart and checkout for multi-kitchen orders",
        "Automatic order routing to respective kitchens",
        "Real-time order tracking for customers",
      ],
      backend: [
        "Centralised order management system",
        "Vendor-specific dashboards",
        "Real-time order status updates",
      ],
    },
    outcomes: {
      heading: "The Outcome",
      points: [
        "~40% reduction in average ordering time",
        "Eliminated multiple queues, improving customer flow",
        "Higher order value — customers combine items across vendors",
        "Improved coordination and efficiency for food court vendors",
      ],
      takeaway:
        "A fragmented ordering experience was transformed into a seamless, unified system — improving both customer convenience and operational efficiency. Eateszy successfully launched a scalable platform for modern food court ordering.",
    },
  },
];
