import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Lock } from "lucide-react";
import { getSponsorPlan } from "@/data/sponsor-plans";

type Search = { plan?: string };

const PAYSTACK_PUBLIC_KEY = "pk_test_b59854afeeb4221e6a82db520090daef680087cc";

declare global {
  interface Window {
    PaystackPop?: {
      setup: (opts: {
        key: string;
        email: string;
        amount: number;
        currency: string;
        ref: string;
        callback: (response: { reference: string }) => void;
        onClose: () => void;
      }) => { openIframe: () => void };
    };
  }
}

export const Route = createFileRoute("/sponsors_/checkout")({
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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function payWithPaystack() {
    if (!email || !email.includes("@")) {
      setError("Enter a valid email to continue.");
      return;
    }
    setError("");
    if (!window.PaystackPop) {
      setError("Payment system is still loading, try again in a moment.");
      return;
    }
    setLoading(true);
    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email,
      amount: Math.round(plan.price * 100),
      currency: "USD",
      ref: `TTP-${plan.id}-${Date.now()}`,
      callback: (response) => {
        navigate({
          to: "/sponsors/form",
          search: { plan: plan.id, paid: "1", ref: response.reference },
        });
      },
      onClose: () => {
        setLoading(false);
      },
    });
    handler.openIframe();
  }

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
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className={inputCls}
                />
              </label>
            </div>

            {error && <p className="mt-3 text-xs font-semibold text-destructive">{error}</p>}

            <button
              type="button"
              onClick={payWithPaystack}
              disabled={loading}
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-blue-hover disabled:opacity-60"
            >
              {loading ? "Opening secure payment..." : `Pay ${plan.priceLabel}`}
            </button>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" /> Payments are processed securely by Paystack.
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
