// Auto-generated centralized service data for Seven Sins Tattoo
export interface Category {
  slug: string; name: string; route: string; description: string;
}
export interface Product {
  id: number; slug: string; category: string; categorySlug: string;
  name: string; priceLabel: string; amount: number; pricingType: string;
  shortDescription: string; scaleOrSession: string;
  includedItems: string[]; excludedItems: string[]; suitablePlacements: string[];
  bookingQueryValue: string;
}
export interface Membership {
  id: string; name: string; amount: number; benefit: string;
  bestFor: string;
  buttonLabel: string; route: string; stripeUrl?: string;
}

export const CATEGORIES: Category[] = [
  {
    "slug": "fine-line",
    "name": "Fine Line",
    "route": "/services/fine-line",
    "description": "Delicate linework, restrained detail, and carefully balanced compositions designed with precision."
  },
  {
    "slug": "lettering",
    "name": "Lettering",
    "route": "/services/lettering",
    "description": "Custom lettering, script, names, dates, phrases, and typographic compositions developed for the individual."
  },
  {
    "slug": "blackwork",
    "name": "Blackwork",
    "route": "/services/blackwork",
    "description": "Bold black forms, graphic contrast, ornamental structure, and large-scale compositions."
  },
  {
    "slug": "realism",
    "name": "Realism",
    "route": "/services/realism",
    "description": "Highly rendered black-and-grey or color work focused on depth, texture, portraiture, and visual realism."
  },
  {
    "slug": "japanese-traditional",
    "name": "Japanese & Traditional",
    "route": "/services/japanese-traditional",
    "description": "Strong silhouettes, enduring symbolism, disciplined composition, and time-honored visual language."
  },
  {
    "slug": "large-scale-custom",
    "name": "Large Scale & Custom",
    "route": "/services/large-scale-custom",
    "description": "Sleeves, backpieces, multi-session projects, and original large-scale work developed through consultation."
  }
]

export const PRODUCTS: Product[] = [
  {
    "id": 1,
    "slug": "mini-fine-line",
    "category": "Fine Line",
    "categorySlug": "fine-line",
    "name": "Mini Fine Line",
    "priceLabel": "Starting at",
    "amount": 100,
    "pricingType": "starting",
    "shortDescription": "A minimalist piece executed with single-needle precision. Ideal for first tattoos, subtle marks, or quiet personal symbols.",
    "scaleOrSession": "Up to approximately 2 inches",
    "includedItems": [
      "Consultation",
      "Custom design",
      "Single-needle fine line execution",
      "Aftercare kit",
      "Healing guidance"
    ],
    "excludedItems": [
      "Gratuity",
      "Touch-ups beyond the included window",
      "Major design changes after approval"
    ],
    "suitablePlacements": [
      "Wrist",
      "Ankle",
      "Behind the ear",
      "Finger",
      "Collarbone"
    ],
    "bookingQueryValue": "mini-fine-line"
  },
  {
    "id": 2,
    "slug": "small-fine-line",
    "category": "Fine Line",
    "categorySlug": "fine-line",
    "name": "Small Fine Line",
    "priceLabel": "Starting at",
    "amount": 150,
    "pricingType": "starting",
    "shortDescription": "A compact fine line composition with room for delicate detail and light shading.",
    "scaleOrSession": "Approximately 2\u20134 inches",
    "includedItems": [
      "Consultation",
      "Custom design",
      "Fine line execution",
      "Light shading as designed",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Touch-ups beyond the included window",
      "Significant design expansion after approval"
    ],
    "suitablePlacements": [
      "Forearm",
      "Inner arm",
      "Rib",
      "Ankle",
      "Upper back"
    ],
    "bookingQueryValue": "small-fine-line"
  },
  {
    "id": 3,
    "slug": "medium-fine-line",
    "category": "Fine Line",
    "categorySlug": "fine-line",
    "name": "Medium Fine Line",
    "priceLabel": "Starting at",
    "amount": 250,
    "pricingType": "starting",
    "shortDescription": "A balanced fine line composition with refined detail, soft gradients, and intentional negative space.",
    "scaleOrSession": "Approximately 4\u20136 inches",
    "includedItems": [
      "Consultation",
      "Custom design",
      "Fine line execution with shading",
      "One round of minor adjustments",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Touch-ups beyond the included window",
      "Complete redesign"
    ],
    "suitablePlacements": [
      "Forearm",
      "Calf",
      "Upper arm",
      "Thigh",
      "Side rib"
    ],
    "bookingQueryValue": "medium-fine-line"
  },
  {
    "id": 4,
    "slug": "large-fine-line",
    "category": "Fine Line",
    "categorySlug": "fine-line",
    "name": "Large Fine Line",
    "priceLabel": "Starting at",
    "amount": 400,
    "pricingType": "starting",
    "shortDescription": "An expansive fine line piece with intricate detail, layered shading, and considered flow across the body.",
    "scaleOrSession": "Approximately 6 inches or larger",
    "includedItems": [
      "Consultation",
      "Custom multi-element design",
      "Extended fine line session",
      "Shading and detail work",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Multiple sessions beyond the first",
      "Touch-ups outside the included window"
    ],
    "suitablePlacements": [
      "Back",
      "Thigh",
      "Full forearm",
      "Chest",
      "Side panel"
    ],
    "bookingQueryValue": "large-fine-line"
  },
  {
    "id": 5,
    "slug": "custom-session",
    "category": "Fine Line",
    "categorySlug": "fine-line",
    "name": "Custom Fine Line Session",
    "priceLabel": "Starting at",
    "amount": 600,
    "pricingType": "starting",
    "shortDescription": "A fully custom extended session for ambitious fine line work that demands time, precision, and uninterrupted focus.",
    "scaleOrSession": "Extended custom composition",
    "includedItems": [
      "In-depth consultation",
      "Original multi-element design",
      "Extended session time",
      "Detailed shading and refinement",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Additional sessions",
      "Touch-ups outside the included window"
    ],
    "suitablePlacements": [
      "Back",
      "Full sleeve",
      "Chest panel",
      "Full leg panel"
    ],
    "bookingQueryValue": "fine-line-custom-session"
  },
  {
    "id": 6,
    "slug": "mini-lettering",
    "category": "Lettering",
    "categorySlug": "lettering",
    "name": "Mini Lettering",
    "priceLabel": "Starting at",
    "amount": 100,
    "pricingType": "starting",
    "shortDescription": "Initials, dates, or very short wording rendered in a clean, precise script.",
    "scaleOrSession": "Initials, dates, or very short wording",
    "includedItems": [
      "Consultation",
      "Type selection review",
      "Custom lettering execution",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Multiple placements",
      "Touch-ups beyond the included window"
    ],
    "suitablePlacements": [
      "Wrist",
      "Finger",
      "Behind the ear",
      "Ankle",
      "Rib"
    ],
    "bookingQueryValue": "mini-lettering"
  },
  {
    "id": 7,
    "slug": "small-lettering",
    "category": "Lettering",
    "categorySlug": "lettering",
    "name": "Small Lettering",
    "priceLabel": "Starting at",
    "amount": 150,
    "pricingType": "starting",
    "shortDescription": "Short names, single words, or compact script compositions with balanced spacing.",
    "scaleOrSession": "Short names, words, or compact script",
    "includedItems": [
      "Consultation",
      "Font selection review",
      "Custom lettering execution",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Multiple sizes",
      "Touch-ups beyond the included window"
    ],
    "suitablePlacements": [
      "Forearm",
      "Inner arm",
      "Collarbone",
      "Rib",
      "Ankle"
    ],
    "bookingQueryValue": "small-lettering"
  },
  {
    "id": 8,
    "slug": "medium-lettering",
    "category": "Lettering",
    "categorySlug": "lettering",
    "name": "Medium Lettering",
    "priceLabel": "Starting at",
    "amount": 250,
    "pricingType": "starting",
    "shortDescription": "Medium phrases or decorative script with considered layout, spacing, and optional ornamental details.",
    "scaleOrSession": "Medium phrases or decorative script",
    "includedItems": [
      "Consultation",
      "Custom type composition",
      "Lettering execution with flourishes",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Major re-spacing after approval",
      "Touch-ups beyond the included window"
    ],
    "suitablePlacements": [
      "Forearm",
      "Upper arm",
      "Calf",
      "Upper back",
      "Thigh"
    ],
    "bookingQueryValue": "medium-lettering"
  },
  {
    "id": 9,
    "slug": "large-lettering",
    "category": "Lettering",
    "categorySlug": "lettering",
    "name": "Large Lettering",
    "priceLabel": "Starting at",
    "amount": 400,
    "pricingType": "starting",
    "shortDescription": "Large statements or complex typographic compositions designed for the body's natural flow.",
    "scaleOrSession": "Large statements or complex typography",
    "includedItems": [
      "Consultation",
      "Custom typographic layout",
      "Large-scale lettering execution",
      "Detail refinement",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Multiple sessions beyond the first",
      "Touch-ups outside the included window"
    ],
    "suitablePlacements": [
      "Back",
      "Chest",
      "Rib panel",
      "Thigh",
      "Full forearm"
    ],
    "bookingQueryValue": "large-lettering"
  },
  {
    "id": 10,
    "slug": "custom-session",
    "category": "Lettering",
    "categorySlug": "lettering",
    "name": "Custom Lettering Session",
    "priceLabel": "Starting at",
    "amount": 600,
    "pricingType": "starting",
    "shortDescription": "An original multi-element typographic composition \u2014 lettering, ornament, and layout designed from scratch.",
    "scaleOrSession": "Original multi-element typographic composition",
    "includedItems": [
      "In-depth consultation",
      "Original typographic design",
      "Extended session execution",
      "Ornament and detail integration",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Additional sessions",
      "Touch-ups outside the included window"
    ],
    "suitablePlacements": [
      "Back",
      "Full sleeve",
      "Chest panel",
      "Rib panel"
    ],
    "bookingQueryValue": "lettering-custom-session"
  },
  {
    "id": 11,
    "slug": "small-blackwork",
    "category": "Blackwork",
    "categorySlug": "blackwork",
    "name": "Small Blackwork",
    "priceLabel": "Starting at",
    "amount": 150,
    "pricingType": "starting",
    "shortDescription": "A compact graphic or ornamental blackwork piece with strong contrast and clean silhouettes.",
    "scaleOrSession": "Small graphic or ornamental piece",
    "includedItems": [
      "Consultation",
      "Custom design",
      "Blackwork execution",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Touch-ups beyond the included window",
      "Expansion beyond the original design scope"
    ],
    "suitablePlacements": [
      "Forearm",
      "Calf",
      "Upper arm",
      "Ankle",
      "Hand"
    ],
    "bookingQueryValue": "small-blackwork"
  },
  {
    "id": 12,
    "slug": "medium-blackwork",
    "category": "Blackwork",
    "categorySlug": "blackwork",
    "name": "Medium Blackwork",
    "priceLabel": "Starting at",
    "amount": 300,
    "pricingType": "starting",
    "shortDescription": "A medium-format graphic composition with layered contrast, pattern density, and bold visual weight.",
    "scaleOrSession": "Medium graphic composition",
    "includedItems": [
      "Consultation",
      "Custom design with pattern development",
      "Blackwork execution",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Multiple sessions",
      "Touch-ups outside the included window"
    ],
    "suitablePlacements": [
      "Forearm",
      "Upper arm",
      "Calf",
      "Thigh",
      "Chest"
    ],
    "bookingQueryValue": "medium-blackwork"
  },
  {
    "id": 13,
    "slug": "large-blackwork",
    "category": "Blackwork",
    "categorySlug": "blackwork",
    "name": "Large Blackwork",
    "priceLabel": "Starting at",
    "amount": 500,
    "pricingType": "starting",
    "shortDescription": "A large or highly detailed blackwork composition with complex geometry, ornament, and deep saturation.",
    "scaleOrSession": "Large or highly detailed composition",
    "includedItems": [
      "Consultation",
      "Custom multi-element blackwork design",
      "Extended execution",
      "Saturation and refinement",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Additional sessions beyond the first",
      "Touch-ups outside the included window"
    ],
    "suitablePlacements": [
      "Back",
      "Chest",
      "Full sleeve",
      "Leg panel",
      "Rib panel"
    ],
    "bookingQueryValue": "large-blackwork"
  },
  {
    "id": 14,
    "slug": "half-day",
    "category": "Blackwork",
    "categorySlug": "blackwork",
    "name": "Blackwork Half-Day",
    "priceLabel": "Reservation deposit",
    "amount": 300,
    "pricingType": "deposit",
    "shortDescription": "An extended half-day session for substantial blackwork that benefits from uninterrupted time and deep saturation.",
    "scaleOrSession": "Extended half-day session",
    "includedItems": [
      "Pre-session consultation",
      "Dedicated half-day session",
      "Continuous blackwork execution",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Full design outside the session scope",
      "Additional sessions"
    ],
    "suitablePlacements": [
      "Forearm",
      "Upper arm",
      "Calf",
      "Thigh",
      "Shoulder"
    ],
    "bookingQueryValue": "blackwork-half-day"
  },
  {
    "id": 15,
    "slug": "full-day",
    "category": "Blackwork",
    "categorySlug": "blackwork",
    "name": "Blackwork Full-Day",
    "priceLabel": "Reservation deposit",
    "amount": 500,
    "pricingType": "deposit",
    "shortDescription": "A full-day session reserved entirely for your blackwork project \u2014 maximum saturation, uninterrupted focus.",
    "scaleOrSession": "Full-day session",
    "includedItems": [
      "Pre-session consultation",
      "Reserved full-day session",
      "Complete blackwork execution",
      "Aftercare kit",
      "Follow-up check-in"
    ],
    "excludedItems": [
      "Gratuity",
      "Additional full-day sessions",
      "Work beyond the agreed scope"
    ],
    "suitablePlacements": [
      "Back",
      "Chest",
      "Full sleeve",
      "Leg panel",
      "Large continuous composition"
    ],
    "bookingQueryValue": "blackwork-full-day"
  },
  {
    "id": 16,
    "slug": "small-realism",
    "category": "Realism",
    "categorySlug": "realism",
    "name": "Small Realism",
    "priceLabel": "Starting at",
    "amount": 250,
    "pricingType": "starting",
    "shortDescription": "A compact realism study \u2014 portrait, object, or nature detail rendered with depth and texture.",
    "scaleOrSession": "Compact realism study",
    "includedItems": [
      "Consultation",
      "Reference review",
      "Custom realism execution",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Multiple subjects",
      "Touch-ups outside the included window"
    ],
    "suitablePlacements": [
      "Forearm",
      "Calf",
      "Upper arm",
      "Shoulder",
      "Rib"
    ],
    "bookingQueryValue": "small-realism"
  },
  {
    "id": 17,
    "slug": "medium-realism",
    "category": "Realism",
    "categorySlug": "realism",
    "name": "Medium Realism",
    "priceLabel": "Starting at",
    "amount": 500,
    "pricingType": "starting",
    "shortDescription": "A medium-format realism piece with layered values, controlled texture, and lifelike depth.",
    "scaleOrSession": "Medium detailed realism piece",
    "includedItems": [
      "Consultation",
      "Reference study and composition",
      "Realism execution with layered values",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Additional subjects",
      "Touch-ups outside the included window"
    ],
    "suitablePlacements": [
      "Forearm",
      "Upper arm",
      "Calf",
      "Thigh",
      "Chest"
    ],
    "bookingQueryValue": "medium-realism"
  },
  {
    "id": 18,
    "slug": "large-realism",
    "category": "Realism",
    "categorySlug": "realism",
    "name": "Large Realism",
    "priceLabel": "Starting at",
    "amount": 800,
    "pricingType": "starting",
    "shortDescription": "A large-scale realism composition with cinematic depth, detailed texture, and immersive visual presence.",
    "scaleOrSession": "Large detailed realism composition",
    "includedItems": [
      "Consultation",
      "Extended reference and composition study",
      "Large-scale realism execution",
      "Value refinement and detail",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Multiple sessions beyond the first",
      "Touch-ups outside the included window"
    ],
    "suitablePlacements": [
      "Back",
      "Chest",
      "Full sleeve",
      "Thigh",
      "Leg panel"
    ],
    "bookingQueryValue": "large-realism"
  },
  {
    "id": 19,
    "slug": "half-day",
    "category": "Realism",
    "categorySlug": "realism",
    "name": "Realism Half-Day",
    "priceLabel": "Reservation deposit",
    "amount": 400,
    "pricingType": "deposit",
    "shortDescription": "An extended half-day session for realism work that demands unhurried rendering and continuous focus.",
    "scaleOrSession": "Extended half-day session",
    "includedItems": [
      "Pre-session consultation",
      "Dedicated half-day session",
      "Continuous realism rendering",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Full design outside the session scope",
      "Additional sessions"
    ],
    "suitablePlacements": [
      "Forearm",
      "Upper arm",
      "Calf",
      "Thigh",
      "Shoulder"
    ],
    "bookingQueryValue": "realism-half-day"
  },
  {
    "id": 20,
    "slug": "full-day",
    "category": "Realism",
    "categorySlug": "realism",
    "name": "Realism Full-Day",
    "priceLabel": "Reservation deposit",
    "amount": 600,
    "pricingType": "deposit",
    "shortDescription": "A full-day session reserved entirely for your realism project \u2014 deep rendering, uninterrupted focus.",
    "scaleOrSession": "Full-day session",
    "includedItems": [
      "Pre-session consultation",
      "Reserved full-day session",
      "Complete realism execution",
      "Aftercare kit",
      "Follow-up check-in"
    ],
    "excludedItems": [
      "Gratuity",
      "Additional full-day sessions",
      "Work beyond the agreed scope"
    ],
    "suitablePlacements": [
      "Back",
      "Chest",
      "Full sleeve",
      "Leg panel",
      "Large continuous composition"
    ],
    "bookingQueryValue": "realism-full-day"
  },
  {
    "id": 21,
    "slug": "small-traditional",
    "category": "Japanese & Traditional",
    "categorySlug": "japanese-traditional",
    "name": "Small Traditional",
    "priceLabel": "Starting at",
    "amount": 200,
    "pricingType": "starting",
    "shortDescription": "A compact traditional piece with bold outlines, disciplined composition, and enduring visual clarity.",
    "scaleOrSession": "Small traditional composition",
    "includedItems": [
      "Consultation",
      "Traditional design study",
      "Custom execution",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Color expansion beyond the original design",
      "Touch-ups outside the included window"
    ],
    "suitablePlacements": [
      "Forearm",
      "Upper arm",
      "Calf",
      "Shoulder",
      "Chest"
    ],
    "bookingQueryValue": "small-traditional"
  },
  {
    "id": 22,
    "slug": "medium-traditional",
    "category": "Japanese & Traditional",
    "categorySlug": "japanese-traditional",
    "name": "Medium Traditional",
    "priceLabel": "Starting at",
    "amount": 400,
    "pricingType": "starting",
    "shortDescription": "A medium-format traditional piece with strong composition, rich symbolism, and bold presence.",
    "scaleOrSession": "Medium traditional composition",
    "includedItems": [
      "Consultation",
      "Traditional motif research and design",
      "Full execution",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Significant motif expansion after approval",
      "Touch-ups outside the included window"
    ],
    "suitablePlacements": [
      "Forearm",
      "Upper arm",
      "Calf",
      "Thigh",
      "Back panel"
    ],
    "bookingQueryValue": "medium-traditional"
  },
  {
    "id": 23,
    "slug": "large-traditional",
    "category": "Japanese & Traditional",
    "categorySlug": "japanese-traditional",
    "name": "Large Traditional",
    "priceLabel": "Starting at",
    "amount": 700,
    "pricingType": "starting",
    "shortDescription": "A large-scale traditional composition with multiple elements, balanced flow, and powerful visual storytelling.",
    "scaleOrSession": "Large traditional composition",
    "includedItems": [
      "Consultation",
      "Extensive motif and composition development",
      "Large-scale execution",
      "Color and saturation work",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Multiple sessions beyond the first",
      "Touch-ups outside the included window"
    ],
    "suitablePlacements": [
      "Back",
      "Chest",
      "Full sleeve",
      "Leg panel",
      "Rib panel"
    ],
    "bookingQueryValue": "large-traditional"
  },
  {
    "id": 24,
    "slug": "half-day",
    "category": "Japanese & Traditional",
    "categorySlug": "japanese-traditional",
    "name": "Traditional Half-Day",
    "priceLabel": "Reservation deposit",
    "amount": 400,
    "pricingType": "deposit",
    "shortDescription": "An extended half-day session for traditional work that benefits from uninterrupted brush-inspired flow.",
    "scaleOrSession": "Extended half-day session",
    "includedItems": [
      "Pre-session consultation",
      "Dedicated half-day session",
      "Continuous traditional execution",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "Full design outside the session scope",
      "Additional sessions"
    ],
    "suitablePlacements": [
      "Forearm",
      "Upper arm",
      "Calf",
      "Thigh",
      "Shoulder"
    ],
    "bookingQueryValue": "traditional-half-day"
  },
  {
    "id": 25,
    "slug": "full-day",
    "category": "Japanese & Traditional",
    "categorySlug": "japanese-traditional",
    "name": "Traditional Full-Day",
    "priceLabel": "Reservation deposit",
    "amount": 600,
    "pricingType": "deposit",
    "shortDescription": "A full-day session reserved entirely for your traditional piece \u2014 bold, deliberate, and unhurried.",
    "scaleOrSession": "Full-day session",
    "includedItems": [
      "Pre-session consultation",
      "Reserved full-day session",
      "Complete traditional execution",
      "Aftercare kit",
      "Follow-up check-in"
    ],
    "excludedItems": [
      "Gratuity",
      "Additional full-day sessions",
      "Work beyond the agreed scope"
    ],
    "suitablePlacements": [
      "Back",
      "Chest",
      "Full sleeve",
      "Leg panel",
      "Large continuous composition"
    ],
    "bookingQueryValue": "traditional-full-day"
  },
  {
    "id": 26,
    "slug": "quarter-sleeve",
    "category": "Large Scale & Custom",
    "categorySlug": "large-scale-custom",
    "name": "Quarter-Sleeve Reservation",
    "priceLabel": "Reservation deposit",
    "amount": 300,
    "pricingType": "deposit",
    "shortDescription": "A quarter-sleeve project. This deposit reserves planning, design development, and appointment scheduling.",
    "scaleOrSession": "Quarter-sleeve",
    "includedItems": [
      "Consultation",
      "Custom quarter-sleeve design",
      "Project planning and scheduling",
      "Reserved session time",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "The full sleeve price",
      "Additional sessions beyond the reserved time"
    ],
    "suitablePlacements": [
      "Upper arm",
      "Lower arm",
      "Lower leg"
    ],
    "bookingQueryValue": "quarter-sleeve"
  },
  {
    "id": 27,
    "slug": "half-sleeve",
    "category": "Large Scale & Custom",
    "categorySlug": "large-scale-custom",
    "name": "Half-Sleeve Reservation",
    "priceLabel": "Reservation deposit",
    "amount": 500,
    "pricingType": "deposit",
    "shortDescription": "A half-sleeve project. The deposit secures your design process, artist time, and multi-session planning.",
    "scaleOrSession": "Half-sleeve",
    "includedItems": [
      "Consultation",
      "Custom half-sleeve design",
      "Multi-session project planning",
      "Reserved session blocks",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "The full sleeve price",
      "Additional sessions beyond the reserved blocks"
    ],
    "suitablePlacements": [
      "Full upper arm",
      "Full lower arm",
      "Full lower leg"
    ],
    "bookingQueryValue": "half-sleeve"
  },
  {
    "id": 28,
    "slug": "full-sleeve",
    "category": "Large Scale & Custom",
    "categorySlug": "large-scale-custom",
    "name": "Full-Sleeve Reservation",
    "priceLabel": "Reservation deposit",
    "amount": 800,
    "pricingType": "deposit",
    "shortDescription": "A complete full-sleeve project. The deposit reserves the full design, consultation, and multi-session scheduling.",
    "scaleOrSession": "Full sleeve",
    "includedItems": [
      "Extended consultation",
      "Complete sleeve design",
      "Multi-session scheduling",
      "Reserved session series",
      "Progress reviews",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "The total sleeve price",
      "Cover-up work unless specified"
    ],
    "suitablePlacements": [
      "Full arm",
      "Full leg"
    ],
    "bookingQueryValue": "full-sleeve"
  },
  {
    "id": 29,
    "slug": "backpiece",
    "category": "Large Scale & Custom",
    "categorySlug": "large-scale-custom",
    "name": "Backpiece Reservation",
    "priceLabel": "Reservation deposit",
    "amount": 1000,
    "pricingType": "deposit",
    "shortDescription": "A full backpiece project \u2014 the most ambitious canvas. The deposit reserves the complete design and multi-session journey.",
    "scaleOrSession": "Full backpiece",
    "includedItems": [
      "In-depth consultation",
      "Full backpiece design",
      "Comprehensive session planning",
      "Reserved session series",
      "Progress documentation",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "The total backpiece price",
      "Cover-up work unless specified"
    ],
    "suitablePlacements": [
      "Full back"
    ],
    "bookingQueryValue": "backpiece"
  },
  {
    "id": 30,
    "slug": "multi-session-project",
    "category": "Large Scale & Custom",
    "categorySlug": "large-scale-custom",
    "name": "Multi-Session Custom Project",
    "priceLabel": "Reservation deposit",
    "amount": 1500,
    "pricingType": "deposit",
    "shortDescription": "A fully custom, multi-session large-scale project designed from concept through completion with ongoing collaboration.",
    "scaleOrSession": "Multi-session custom project",
    "includedItems": [
      "Comprehensive consultation",
      "Original concept and design development",
      "Full multi-session scheduling",
      "Reserved session series",
      "Ongoing design refinement",
      "Progress documentation",
      "Aftercare kit"
    ],
    "excludedItems": [
      "Gratuity",
      "The total project price",
      "Cover-up work unless specified"
    ],
    "suitablePlacements": [
      "Full back",
      "Full sleeve",
      "Full leg",
      "Body suit section",
      "Multi-region composition"
    ],
    "bookingQueryValue": "multi-session-project"
  }
]

export const MEMBERSHIPS: Membership[] = [
  {
    "id": "essential",
    "name": "Essential",
    "amount": 88,
    "benefit": "5% off eligible tattoo services",
    "bestFor": "Best for occasional appointments and smaller pieces.",
    "buttonLabel": "SELECT ESSENTIAL",
    "route": "/membership/essential",
    "stripeUrl": "https://buy.stripe.com/4gM6oB91r1H6drzcFy6oo00"
  },
  {
    "id": "signature",
    "name": "Signature",
    "amount": 188,
    "benefit": "12% off eligible tattoo services",
    "bestFor": "Best for returning collectors and multi-session projects.",
    "buttonLabel": "SELECT SIGNATURE",
    "route": "/membership/signature",
    "stripeUrl": "https://buy.stripe.com/cNi00da5v71q9bj5d66oo01"
  },
  {
    "id": "black",
    "name": "Black",
    "amount": 288,
    "benefit": "20% off eligible tattoo services",
    "bestFor": "Best for committed collectors planning larger ongoing work.",
    "buttonLabel": "SELECT BLACK",
    "route": "/membership/black",
    "stripeUrl": "https://buy.stripe.com/5kQcMZfpPclK3QZ5d66oo02"
  }
]

export const PRICING_DISCLAIMER = "Displayed pricing is an initial estimate or reservation deposit only. Final pricing is determined after consultation and depends on placement, scale, complexity, detail, artist selection, and estimated session time. Gratuity is not included."
export const DEPOSIT_DISCLAIMER = "This payment reserves project planning and appointment availability. It is not the total tattoo price."