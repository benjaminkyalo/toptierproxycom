import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";
import { getSponsorPlan } from "@/data/sponsor-plans";

type Search = { plan?: string };

export const Route = createFileRoute("/sponsors/checkout")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    plan: typeof search.plan === "string" ? search.plan : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Sponsorship Checkout | ToptierProxy.com" },
      { name: "description", content: "Review your ToptierProxy sponsorship order and complete payment." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: SponsorCheckoutPage,
});

const inputCls =
  "mt-1.5 h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
const labelCls = "text-xs font-semibold text-muted-foreground";

function SponsorCheckoutPage() {
  const { plan: planId } = Route.useSearch();
  const plan = getSponsorPlan(planId);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
        {/* Order summary */}
        <section className="border-border px-6 py-12 lg:border-r lg:px-12">
          <div className="mx-auto max-w-sm">
            <div className="flex items-center gap-3">
              <Link
                to="/sponsors"
                aria-label="Back to sponsorship plans"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <span className="text-sm font-semibold text-foreground">ToptierProxy.com</span>
            </div>

            <h1 className="mt-8 text-base font-semibold text-foreground">
              Pay ToptierProxy.com
            </h1>

            <p className="mt-6 text-xs font-semibold text-muted-foreground">Choose currency</p>
            <div className="mt-2 flex gap-3">
              <button
                type="button"
                className="h-11 flex-1 rounded-md border-2 border-primary bg-card px-3 text-sm font-semibold text-foreground"
              >
                USD {plan.priceLabel}
              </button>
              <button
                type="button"
                className="h-11 flex-1 rounded-md border border-border bg-card px-3 text-sm text-muted-foreground"
              >
                EUR €{(plan.price * 0.92).toFixed(2)}
              </button>
            </div>

            <div className="mt-8 flex items-start justify-between gap-6 border-b border-border pb-5">
              <div>
                <p className="text-sm font-semibold text-foreground">{plan.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{plan.blurb}</p>
              </div>
              <p className="shrink-0 text-sm text-foreground">{plan.priceLabel}</p>
            </div>

            <div className="flex items-center justify-between py-5">
              <p className="text-sm text-foreground">Subtotal</p>
              <p className="text-sm text-foreground">{plan.priceLabel}</p>
            </div>
            <button
              type="button"
              className="rounded-md bg-muted px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted/70"
            >
              Add promotion code
            </button>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
              <p className="text-sm font-semibold text-foreground">Total due</p>
              <p className="text-sm font-semibold text-foreground">{plan.priceLabel}</p>
            </div>
          </div>
        </section>

        {/* Payment */}
        <section className="px-6 py-12 lg:px-12">
          <div className="mx-auto max-w-sm">
            <div>
              <p className={labelCls}>Contact information</p>
              <label className="mt-3 block">
                <span className={labelCls}>Email</span>
                <input type="email" placeholder="email@example.com" className={inputCls} />
              </label>
            </div>

            <p className="mt-8 text-xs font-semibold text-muted-foreground">Payment method</p>
            <div className="mt-3 rounded-lg border border-border p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <CreditCard className="h-4 w-4" /> Card
              </div>

              <label className="mt-4 block">
                <span className={labelCls}>Card information</span>
                <input placeholder="1234 1234 1234 1234" className={inputCls} />
              </label>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <input placeholder="MM / YY" className={`${inputCls} mt-0`} />
                <input placeholder="CVC" className={`${inputCls} mt-0`} />
              </div>

              <label className="mt-3 block">
                <span className={labelCls}>Cardholder name</span>
                <input placeholder="Full name on card" className={inputCls} />
              </label>

              <label className="mt-3 block">
                <span className={labelCls}>Country or region</span>
                <select className={inputCls}>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>Kenya</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-blue-hover"
            >
              Pay {plan.priceLabel}
            </button>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" /> Secure checkout — card processing goes live shortly.
            </p>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Questions?{" "}
              <Link to="/contact" className="font-semibold text-primary underline">
                Contact our team
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
