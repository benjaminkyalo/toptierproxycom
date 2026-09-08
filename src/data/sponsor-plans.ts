export type SponsorPlanId = "sidebar-1m" | "sidebar-3m" | "sidebar-12m" | "newsletter-1m" | "bundle-1m";

export type SponsorPlan = {
  id: SponsorPlanId;
  name: string;
  price: number;
  priceLabel: string;
  priceKES: number;
  priceKESLabel: string;
  period: string;
  blurb: string;
};

export const sponsorPlans: Record<SponsorPlanId, SponsorPlan> = {
  "sidebar-1m": {
    id: "sidebar-1m",
    name: "Sidebar Plan",
    price: 29,
    priceLabel: "$29.00",
    priceKES: 3753,
    priceKESLabel: "KES 3,753",
    period: "1 month",
    blurb: "Featured placement in our homepage sidebar and on every provider and blog page.",
  },
  "sidebar-3m": {
    id: "sidebar-3m",
    name: "Sidebar Plan (3 Months)",
    price: 59,
    priceLabel: "$59.00",
    priceKES: 7635,
    priceKESLabel: "KES 7,635",
    period: "3 months",
    blurb: "Sustained sidebar visibility for three months - our best value placement.",
  },
  "sidebar-12m": {
    id: "sidebar-12m",
    name: "Sidebar Plan (12 Months)",
    price: 199,
    priceLabel: "$199.00",
    priceKES: 25751,
    priceKESLabel: "KES 25,751",
    period: "12 months",
    blurb: "Long-term sidebar visibility for a full year at our lowest monthly rate.",
  },
  "newsletter-1m": {
    id: "newsletter-1m",
    name: "Newsletter Plan",
    price: 89,
    priceLabel: "$89.00",
    priceKES: 11517,
    priceKESLabel: "KES 11,517",
    period: "1 month",
    blurb: "Featured placement in our weekly newsletter for 1 month.",
  },
  "bundle-1m": {
    id: "bundle-1m",
    name: "Bundle Plan",
    price: 99,
    priceLabel: "$99.00",
    priceKES: 12811,
    priceKESLabel: "KES 12,811",
    period: "1 month",
    blurb: "Get both sidebar and newsletter plan for maximum reach.",
  },
};

export function getSponsorPlan(id?: string): SponsorPlan {
  return sponsorPlans[(id as SponsorPlanId) ?? "sidebar-1m"] ?? sponsorPlans["sidebar-1m"];
}
