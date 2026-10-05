// Central content file for Brew'd
// Edit copy, products, FAQs, prices, social links, and form options here.

export type Product = {
  id:
    | "whole-beans"
    | "ground-premium"
    | "ground-black"
    | "liquid-decoction"
    | "brass-filter"
    | "brass-tumbler";
  name: string;
  kicker: string;
  title: string;
  description: string;
  size: string; // TODO: confirm final size
  price: string; // TODO: confirm final price
  highlighted?: boolean;
};

export const products: Product[] = [
  {
    id: "whole-beans",
    name: "Vkaapi Whole Beans",
    kicker: "FOR THOSE WHO KNOW THE DIFFERENCE",
    title: "The grind is where the morning actually starts.",
    description:
      "100% Arabica whole beans roasted for the South Indian filter. Grind them fresh and the aroma will arrive before your alarm clock gets the credit.",
    size: "Size TBD",
    price: "Price TBD",
  },
  {
    id: "ground-premium",
    name: "Vkaapi Premium Blend",
    kicker: "THE METHOD THAT HAS NEVER NEEDED IMPROVING",
    title: "Your filter has been waiting for exactly this.",
    description:
      "48% Arabica, 32% Robusta and 20% Chicory in a unique blend. Ground to the coarseness South Indian brewing has always demanded.",
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
  {
    id: "liquid-decoction",
    name: "Vkaapi Premium Liquid Coffee Decoction",
    kicker: "COFFEE ON-THE-GO",
    title: "The same blend, now ready when you are.",
    description:
      "The same unique blend of Arabica, Robusta and Chicory as our premium ground coffee, in a ready-to-use concentrate. Pour, add hot milk, and your kaapi is done. Convenience without compromising the cup.",
    size: "Size TBD",
    price: "Price TBD",
  },
];

// Brass products (gift set options / bulk / subscriptions live on the
// Products page). TODO: confirm names, sizes and prices.
export const brassProducts: Product[] = [
  {
    id: "brass-filter",
    name: "Brass Filter",
    kicker: "THE TRADITIONAL DRIP",
    title: "The filter this whole ritual is built around.",
    description:
      "The classic two-chamber South Indian brass coffee filter. Spoon in the grounds, pour the hot water, and let the decoction drip the way it always has.",
    size: "Size TBD",
    price: "Price TBD",
  },
  {
    id: "brass-tumbler",
    name: "Brass Tumbler & Dabarah Set",
    kicker: "FOR THE SIGNATURE POUR",
    title: "Where the froth and the drama happen.",
    description:
      "The tumbler and dabarah set used for the signature high pour. Cools the coffee, builds the froth, and makes every cup a small performance.",
    size: "Size TBD",
    price: "Price TBD",
  },
];

// Convenience: all orderable products together (used by the Order page).
export const allProducts: Product[] = [...products, ...brassProducts];

// Gift sets, bulk buying and subscription models shown on the Products page.
// TODO: confirm pricing and tiers.
export const giftAndSubscription = [
  {
    title: "Gift Sets",
    body: "Curated boxes pairing our coffee with the brass filter and tumbler set. Made to be handed over, not just delivered.",
  },
  {
    title: "Bulk Buying",
    body: "Larger quantities for offices, events and families who go through kaapi faster than most. Reach out for bulk pricing.",
  },
  {
    title: "Subscriptions",
    body: "Fresh Brew'd on a schedule that suits you — weekly, fortnightly or monthly. Never run out, never over-order.",
  },
];

export const marqueeItems: string[] = [
  "Whole Beans",
  "Ground Coffee",
  "Decoction Pouches",
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
    body: "Spoon 4 Tbsp of ground coffee into the upper chamber of the filter. Press it gently with the plunger (not packing tight) and pour hot water on top, making sure it's below the line (over-filling might dilute the strength of the coffee).",
  },
  {
    n: 2,
    title: "Let It Steep",
    body: "Give it 15-20 minutes. Let the hot water work through the grounds and drip down slowly into the lower chamber. Good kaapi has never been in a hurry.",
  },
  {
    n: 3,
    title: "Do the High Pour",
    body: "This decoction ideally makes two mugs of coffee. Mix the decoction with sweetener of your choice and pour hot milk till desired color reaches in your cup, then pour between tumbler and davara from a height to build that signature froth.",
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
    a: "Yes. Brew'd ships across the US. Delivering authentic South Indian filter coffee freshly packed and ready to brew, right to your doorstep.",
  },
];

// Product interest options for the pre-order form
export const productInterestOptions = [
  "Vkaapi Whole Beans",
  "Vkaapi Premium Blend",
  "Vkaapi Black Coffee Blend",
  "Decoction Pouch",
  "All",
] as const;

// Quantity options for the pre-order form (numbers only, in a dropdown)
export const quantityOptions = ["1", "2", "3", "4", "5", "6+"] as const;

// Subscription model options, shown when a person is interested in events /
// bulk orders.
export const subscriptionOptions = [
  "One-time order",
  "Weekly",
  "Fortnightly",
  "Monthly",
] as const;

// Options for the event / community inquiry form
export const eventProductOptions = [
  "Vkaapi Whole Beans",
  "Vkaapi Premium Blend",
  "Vkaapi Black Coffee Blend",
  "Decoction Pouch",
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
  // TODO: replace these placeholder links with the real Brew'd account URLs.
  // Provide the full profile URLs (e.g. https://instagram.com/brewd) and we
  // will drop them straight in here.
  instagram: {
    label: "Instagram",
    href: "https://instagram.com/", // TODO: real handle
  },
  facebook: {
    label: "Facebook",
    href: "https://facebook.com/", // TODO: real handle
  },
  tiktok: {
    label: "TikTok",
    href: "https://tiktok.com/", // TODO: real handle
  },
  email: { label: "Email", href: "mailto:brewd.inquiry@gmail.com" },
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
  { label: "Order Status", href: "#/order-status" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms and Conditions", href: "#terms" },
  { label: "Returns and Refunds", href: "#returns" },
  { label: "Shipping Policy", href: "#shipping" },
];

// Sourcing copy (item 14): Arabica + Robusta only, Chicory removed here.
export const sourcingCopy =
  "Our Arabica and Robusta beans are sourced from the renowned coffee-growing hills of Coorg, Karnataka, in South India, where filter coffee has been a way of life for generations. We work closely with local farmers through a farmer-friendly approach, ensuring ethical practices and fair partnerships. Every batch is hygienically processed to preserve its natural aroma and rich flavor. Rooted in sustainability and uncompromising quality - every cup delivers an authentic taste that's truly unforgettable.";

// Seed reviews for the home-page reviews carousel (item 18).
export const seedReviews = [
  {
    name: "Priya R.",
    location: "Dallas, TX",
    rating: 5,
    text: "Tastes exactly like the filter coffee my grandmother made. I did not think I would find this here.",
  },
  {
    name: "Arjun M.",
    location: "Jersey City, NJ",
    rating: 5,
    text: "The aroma alone is worth it. The high pour froth is unreal once you get the hang of it.",
  },
  {
    name: "Sana K.",
    location: "Seattle, WA",
    rating: 4,
    text: "Rich and bold without being bitter. The premium blend is my daily now.",
  },
  {
    name: "David L.",
    location: "Austin, TX",
    rating: 5,
    text: "Never had South Indian coffee before. Started with the ground pack and I am hooked.",
  },
];
