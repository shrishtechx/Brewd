// Central content file for Brew'd
// Edit copy, products, FAQs, prices, social links, and form options here.

export type Product = {
  id: "whole-beans" | "ground-premium" | "ground-black";
  name: string;
  kicker: string;
  title: string;
  description: string;
  size: string; // TODO: confirm final size
  price: string; // TODO: confirm final price
  highlighted?: boolean;
};

// NOTE: "Liquid Decoction" is on hold and will be added as a fourth product
// only if approved. TODO: add liquid decoction card once confirmed.
export const products: Product[] = [
  {
    id: "whole-beans",
    name: "Vkaapi Whole Beans",
    kicker: "FOR THOSE WHO KNOW THE DIFFERENCE",
    title: "The grind is where the morning actually starts.",
    description:
      "Whole Arabica, Robusta, and chicory beans roasted for the South Indian filter. Grind them fresh and the aroma will arrive before your alarm clock gets the credit.",
    size: "Size TBD",
    price: "Price TBD",
  },
  {
    id: "ground-premium",
    name: "Vkaapi Premium Blend",
    kicker: "THE METHOD THAT HAS NEVER NEEDED IMPROVING",
    title: "Your filter has been waiting for exactly this.",
    description:
      "Ground to the coarseness South Indian brewing has always demanded. Spoon it in, pour the water, and let a hundred years of getting it right do the rest.",
    size: "Size TBD",
    price: "Price TBD",
    highlighted: true,
  },
  {
    id: "ground-black",
    name: "Vkaapi Black Coffee Blend",
    kicker: "FOR THE ONES WHO TAKE IT BLACK",
    title: "All the body. None of the milk.",
    description:
      "A darker blend ground for the filter and built for anyone who likes their kaapi black. Full, bold, and honest. Brew it, pour it, and let it stand entirely on its own.",
    size: "Size TBD",
    price: "Price TBD",
  },
];

export const marqueeItems: string[] = [
  "Whole Beans",
  "Ground Coffee",
  "Real Kaapi",
  "South Indian Filter Coffee",
  "Ships Across the US",
];

export const ingredients = [
  {
    name: "Arabica",
    note: "Fruity and floral, with enough aroma to stop you mid-pour just to breathe it in.",
    color: "#C9764E",
  },
  {
    name: "Robusta",
    note: "The body, the strength, and the honest reason your morning moves at all.",
    color: "#5A3A26",
  },
  {
    name: "Chicory",
    note: "Twenty percent of the blend and the full reason no other coffee on earth tastes like this one.",
    color: "#6E4B7A",
  },
];

export const brewSteps = [
  {
    n: 1,
    title: "Add Coffee to the Filter",
    body: "Spoon ground coffee into the upper chamber of the brass filter. Press it gently and pour hot water over the top.",
  },
  {
    n: 2,
    title: "Let It Steep",
    body: "Give it time. Let the hot water work through the grounds and drip down slowly into the lower chamber. Good kaapi has never been in a hurry.",
  },
  {
    n: 3,
    title: "Do the High Pour",
    body: "Mix decoction with hot milk, then pour between tumbler and dabarah from a height to build that signature froth.",
  },
  {
    n: 4,
    title: "Drink It",
    body: "Lift, sip, and understand what a hundred years of practice actually tastes like.",
  },
];

export const faqs = [
  {
    q: "What even is a decoction?",
    a: "Decoction is the strong, concentrated coffee that drips out of a South Indian filter. It is the base of every cup. You add hot milk or hot water to it and that is what turns it into **Kaapi**.",
  },
  {
    q: "Is this the same as strong coffee?",
    a: "Stronger in character, not just in caffeine. The chicory and the brewing method give it a depth that regular drip coffee does not reach. It tastes full, not bitter.",
  },
  {
    q: "Can I make this without a brass filter?",
    a: "You can. A French press or any drip method gets you close. The brass filter is tradition and ritual more than a hard requirement, so start with what you have.",
  },
  {
    q: "Why Chicory? What does it actually do?",
    a: "Chicory adds body, a gentle sweetness, and that slow finish that lingers. It is twenty percent of our blend and the single reason this cup tastes like nothing else. Fun fact: Chicory is more than flavor. It is a natural source of inulin fiber and has long been valued for its health benefits too.",
  },
  {
    q: "Which product should I start with if I have never had South Indian coffee?",
    a: "Start with the ground coffee. It is the easiest way in, it needs no grinder, and it is the most forgiving while you learn your own ratio.",
  },
  {
    q: "Do you ship nation-wide across the United States?",
    a: "Yes. Brew'd ships across the US. Join the pre-order list and we will tell you the moment the first batch is ready to make its way to you.",
  },
];

// Product interest options for the pre-order form
export const productInterestOptions = [
  "Vkaapi Whole Beans",
  "Vkaapi Premium Blend",
  "Vkaapi Black Coffee Blend",
  "All",
] as const;

// Options for the event / community inquiry form
export const eventProductOptions = [
  "Vkaapi Whole Beans",
  "Vkaapi Premium Blend",
  "Vkaapi Black Coffee Blend",
] as const;

export const howHeardOptions = [
  "A friend or family",
  "Instagram",
  "TikTok",
  "Facebook",
  "An event or pop-up",
  "Somewhere else",
] as const;

export const social = {
  // TODO: replace placeholders with real handles and links before launch
  instagram: { label: "Instagram", href: "#instagram-placeholder" },
  facebook: { label: "Facebook", href: "#facebook-placeholder" },
  tiktok: { label: "TikTok", href: "#tiktok-placeholder" },
  email: { label: "Email", href: "mailto:hello@brewd.us" },
};

export const contact = {
  phone: {
    label: "+1 (945) 210-1096",
    href: "tel:+19452101096",
    note: "Available Monday to Saturday, 9 am to 6 pm CT",
  },
  email: {
    label: "brewd.inquiry@gmail.com",
    href: "mailto:brewd.inquiry@gmail.com",
    note: "We will respond within 24 hours",
  },
  address: "Based in Arlington, TX (USA)",
};

export const footerLinks = [
  { label: "Blog", href: "#blog" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms and Conditions", href: "#terms" },
  { label: "Returns and Refunds", href: "#returns" },
  { label: "Shipping Policy", href: "#shipping" },
];
