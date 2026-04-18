export type BlogSection =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  tags: string[];
  content?: BlogSection[];
};

export const placeholderBlog: BlogPost[] = [
  {
    slug: "ai-automation-for-small-businesses-coimbatore",
    title: "AI Automation for Small Businesses in Coimbatore: A Practical Guide",
    excerpt:
      "Most Coimbatore businesses are sitting on hours of preventable manual work every week. Here's how AI automation is changing that — and exactly where to start.",
    date: "2026-04-18",
    readingTime: "8 min read",
    author: "Hashtricks Technologies",
    tags: ["AI Automation", "Coimbatore", "Small Business"],
    content: [
      {
        type: "h2",
        text: "Why Coimbatore Businesses Are Starting to Automate",
      },
      {
        type: "p",
        text: "Coimbatore has long been known as the Manchester of South India — a city built on manufacturing, textiles, engineering, and trade. But over the last few years, something has shifted. The businesses that are growing fastest here are not the ones with the most employees. They are the ones that have figured out how to get more done with the same team.",
      },
      {
        type: "p",
        text: "The pressure is real. Competition from Chennai, Bengaluru, and even international suppliers is intensifying. Margins are tighter. Customers expect faster responses, accurate invoices, and real-time updates. For a 20-person company, keeping up with all of that manually is exhausting — and expensive.",
      },
      {
        type: "p",
        text: "AI automation is one of the most practical answers to this problem. And unlike five years ago, it no longer requires a large IT budget or a dedicated technology team. The tools exist today, the costs have come down dramatically, and local businesses in Coimbatore are starting to use them.",
      },
      {
        type: "h2",
        text: "What Is AI Automation — and How Is It Different from Regular Software?",
      },
      {
        type: "p",
        text: "Traditional software follows fixed rules. If an invoice matches these criteria, approve it. If the field is empty, reject it. That works until reality gets messy — and reality is always messy.",
      },
      {
        type: "p",
        text: "AI automation is different because it understands context. It can read a PDF invoice that is formatted differently from last month's and still extract the right numbers. It can look at a customer message and decide whether it is a complaint, a refund request, or a general inquiry — and route it accordingly. It handles exceptions, not just the easy cases.",
      },
      {
        type: "p",
        text: "In practical terms, AI automation means: less manual data entry, fewer errors, faster processing times, and staff who spend their time on work that actually requires human judgment.",
      },
      {
        type: "h2",
        text: "The 5 Processes Coimbatore SMEs Automate First",
      },
      {
        type: "p",
        text: "After working with businesses across manufacturing, retail, healthcare, and services, these are the processes we see automated first — and for good reason. They deliver fast, measurable results.",
      },
      {
        type: "h3",
        text: "1. Invoice and Billing Reconciliation",
      },
      {
        type: "p",
        text: "Finance teams in most SMEs spend 10–20 hours a week manually matching purchase orders to invoices, checking GST numbers, and flagging discrepancies. AI can do this in minutes — extracting data from PDFs, cross-referencing against your ERP or accounting software, and flagging only the ones that need human review.",
      },
      {
        type: "h3",
        text: "2. Customer Inquiry Routing via WhatsApp and Email",
      },
      {
        type: "p",
        text: "Most Coimbatore businesses receive customer messages across WhatsApp, email, and sometimes Instagram. Sorting through these and routing them to the right person — sales, support, accounts — takes time. An AI automation can read each message, classify it, and route it instantly, even outside business hours.",
      },
      {
        type: "h3",
        text: "3. Inventory and Order Status Updates",
      },
      {
        type: "p",
        text: "Customers want to know where their order is. Staff waste time answering the same questions repeatedly. Automated order status updates — triggered by changes in your inventory or dispatch system — can handle the majority of these queries without any human involvement.",
      },
      {
        type: "h3",
        text: "4. Document Data Extraction (GST Returns, Purchase Orders, Delivery Challans)",
      },
      {
        type: "p",
        text: "Businesses dealing in high volumes of paperwork — manufacturers, distributors, exporters — spend significant time extracting data from documents and entering it into systems. AI-powered OCR combined with extraction logic can pull structured data from any document format and push it directly into your software.",
      },
      {
        type: "h3",
        text: "5. Lead Qualification and Follow-Up",
      },
      {
        type: "p",
        text: "Sales teams in growing businesses often let leads go cold simply because there are too many to follow up manually. An AI automation can score inbound leads based on your criteria, send personalised follow-up messages at the right time, and flag the hot ones for your team to call — without anyone having to remember.",
      },
      {
        type: "h2",
        text: "A Real Example: From Manual to Automated",
      },
      {
        type: "p",
        text: "One of the projects we are most proud of is the work we did for Eateszy, a food-tech startup building a multi-kitchen ordering platform for food courts. Before working with us, the ordering process was entirely fragmented — customers had to queue separately at each food stall, place separate orders, and wait at multiple counters.",
      },
      {
        type: "p",
        text: "We built a unified ordering platform that let customers browse all kitchens, add items to a single cart, pay once, and have orders automatically routed to the right kitchen. The result was approximately 40% faster ordering times, better customer flow, and higher average order value — because customers were no longer limited to what they could order from a single stall.",
      },
      {
        type: "p",
        text: "The same principle applies to any business with repetitive, multi-step processes. Find the friction, automate the handoffs, and let your people focus on the work that matters.",
      },
      {
        type: "h2",
        text: "Common Mistakes to Avoid",
      },
      {
        type: "ul",
        items: [
          "Automating the wrong process first. Start with something high-volume and well-defined — not the most complex thing in your business. Quick wins build confidence and demonstrate ROI before you tackle harder problems.",
          "Expecting 100% automation from day one. The best automations have human review checkpoints built in. An 80% automated process that catches exceptions reliably is better than a 100% automated one that fails silently.",
          "Not involving the team. The people who do the work every day know where the real friction is. Involve them in discovery and they will find opportunities no outsider would spot.",
          "Choosing a vendor who sells you software, not outcomes. The best automation partners start by understanding your process and measuring the result — not just deploying a tool.",
        ],
      },
      {
        type: "h2",
        text: "How to Get Started with AI Automation in Your Business",
      },
      {
        type: "p",
        text: "You do not need a large budget or a technical team to start. Here is a straightforward three-step approach:",
      },
      {
        type: "ul",
        items: [
          "Step 1 — Map your manual work. Spend one week tracking where your team spends the most time on repetitive tasks. Look for anything done more than 50 times a week that follows a consistent pattern.",
          "Step 2 — Prioritise by volume and impact. Pick the process where automating it would save the most time or eliminate the most errors. A good rule of thumb: if it takes more than 10 hours a week across your team, it is worth automating.",
          "Step 3 — Talk to a specialist, not a software vendor. Find a team that will start with your process, not a pre-built product. A discovery session to understand your workflows before writing any code is the right starting point.",
        ],
      },
      {
        type: "callout",
        text: "Hashtricks Technologies is a software development company based in Coimbatore. We work with SMEs across Tamil Nadu to identify and automate high-impact processes — with a focus on measurable outcomes, not just technology. If you want a straightforward conversation about where AI automation could help your business, book a free 30-minute call.",
      },
      {
        type: "h2",
        text: "Frequently Asked Questions",
      },
      {
        type: "h3",
        text: "Is AI automation expensive for a small business?",
      },
      {
        type: "p",
        text: "It depends on the scope. Simple automations — routing messages, extracting data from documents, sending follow-up emails — can be built and deployed for a fraction of what you would spend hiring an extra person. The key is starting with a process where the ROI is clear and measurable.",
      },
      {
        type: "h3",
        text: "Do we need to change our existing software?",
      },
      {
        type: "p",
        text: "Not necessarily. Good automations slot into your existing tools — whether that is Tally, Zoho, a WhatsApp Business account, or a custom internal system. We design automations that work with what you already have, not against it.",
      },
      {
        type: "h3",
        text: "How long does it take to see results?",
      },
      {
        type: "p",
        text: "For well-defined, high-volume processes, most businesses see measurable time savings within 4–8 weeks of starting. The first process is always the hardest — after that, expanding automation across your business is much faster.",
      },
      {
        type: "h3",
        text: "Will automation replace our employees?",
      },
      {
        type: "p",
        text: "No. Automation removes the repetitive, error-prone parts of jobs — not the judgment, relationships, and decision-making that people are actually good at. Every client we have worked with has redeployed the time saved into higher-value work, not reduced headcount.",
      },
    ],
  },
];
