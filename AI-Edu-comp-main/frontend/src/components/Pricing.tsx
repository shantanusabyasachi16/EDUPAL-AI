import { useState } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "./../components/ui/badge";
import { cn } from "../lib/utils";
import { ArrowBigRight, Check, X } from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  name: string;
  description: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: Feature[];
  highlight?: boolean;
  badge?: string;
  icon: React.ReactNode;
  hideButton?: boolean;
}

interface PricingSectionProps {
  className?: string;
}

function PricingSection({ className }: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(false);

  const buttonStyles = {
    default: cn(
      "h-10 bg-white dark:bg-zinc-900",
      "hover:bg-zinc-50 dark:hover:bg-zinc-800",
      "text-zinc-900 dark:text-zinc-100",
      "border border-zinc-200 dark:border-zinc-800",
      "hover:border-zinc-300 dark:hover:border-zinc-700",
      "shadow-sm hover:shadow-md",
      "text-xs font-medium"
    ),
    highlight: cn(
      "h-10 bg-zinc-900 dark:bg-zinc-100",
      "hover:bg-zinc-800 dark:hover:bg-zinc-300",
      "text-white dark:text-zinc-900",
      "shadow-[0_1px_10px_rgba(0,0,0,0.1)]",
      "hover:shadow-[0_1px_15px_rgba(0,0,0,0.15)]",
      "font-semibold text-sm"
    ),
  };

  const badgeStyles = cn(
    "px-3 py-1 text-xs font-medium",
    "bg-zinc-900 dark:bg-zinc-100",
    "text-white dark:text-zinc-900",
    "border-none shadow-lg"
  );

  const tiers: PricingTier[] = [
    {
      name: "Free",
      price: {
        monthly: 0,
        yearly: 0,
      },
      description: "Perfect for getting started",
      features: [
        {
          name: "basic-explanations",
          description:
            "Basic topic explanations (3 sentences + 3 key points) with basic resources",
          included: true,
        },
        {
          name: "daily-qa",
          description: "5 Q&A per day (1-mark & 5-mark only)",
          included: true,
        },
        {
          name: "common-mistakes",
          description: "2 common mistakes per topic",
          included: true,
        },
        {
          name: "custom-question-sets",
          description: "Share custom question sets",
          included: false,
        },
        {
          name: "auto-graded-quizzes",
          description: "Generate auto-graded quizzes",
          included: false,
        },
        {
          name: "api-access",
          description: "API access",
          included: false,
        },
      ],
      highlight: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      ),
      hideButton: true,
    },
    {
      name: "Pro",
      price: {
        monthly: 49,
        yearly: 469,
      },
      description: "For students and professors",
      features: [
        {
          name: "unlimited-questions",
          description: "Unlimited 1/5/10-mark predicted questions",
          included: true,
        },
        {
          name: "mistake-analysis",
          description: "Personalized mistake analysis",
          included: true,
        },
        {
          name: "upload-content",
          description: "Upload images & documents",
          included: true,
        },
        {
          name: "mnemonics-mindmaps",
          description: "Mnemonics + AI-generated mind maps / chat history",
          included: true,
        },
        {
          name: "Aunthetication",
          description: "User authentication & management system",
          included: true,
        },
        {
          name: "custom-question-sets",
          description: "Share custom question sets (unlimited)",
          included: true,
        },
        {
          name: "auto-graded-quizzes",
          description: "Generate auto-graded quizzes (unlimited)",
          included: true,
        },
        {
          name: "custom-models",
          description: "Make your custom fine-tuned models for your curriculum",
          included: true,
        },
        {
          name: "api-access",
          description: "API access",
          included: true,
        },
      ],
      highlight: true,
      badge: "Popular",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M12 2v4" />
          <path d="m16 6 3 3" />
          <path d="M18 9h4" />
          <path d="M17 16.5a9 9 0 1 1-10 0" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className={cn(
        "relative bg-[#030303] text-foreground",
        "py-6 px-3 sm:py-8 md:py-12 lg:py-16",
        "overflow-hidden",
        className
      )}
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-3 mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 p-3 sm:p-4"
          >
            <motion.h2
              initial={{
                backgroundPosition: "200% 50%",
                opacity: 0.5,
              }}
              whileInView={{
                backgroundPosition: "0% 50%",
                opacity: 1,
              }}
              transition={{
                duration: 1.9,
                ease: "easeInOut",
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-[length:200%_100%] text-center"
            >
              Simple, Transparent Pricing
            </motion.h2>
          </motion.div>
          <div className="inline-flex items-center p-1 bg-black dark:bg-zinc-800/50 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm">
            {["Monthly", "Yearly"].map((period) => (
              <button
                key={period}
                onClick={() => setIsYearly(period === "Yearly")}
                className={cn(
                  "px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs font-medium rounded-full transition-all duration-300",
                  (period === "Yearly") === isYearly
                    ? "!bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 dark:bg-zinc-100 text-black dark:text-zinc-900 shadow-lg"
                    : "text-white dark:text-zinc-400"
                )}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative group",
                "rounded-xl sm:rounded-2xl transition-all duration-300",
                "flex flex-col",
                tier.name === "Free"
                  ? "bg-zinc-100 dark:bg-zinc-800"
                  : "bg-transparent",
                "border",
                tier.highlight
                  ? "border-zinc-400/50 dark:border-zinc-400/20 shadow-md"
                  : "border-zinc-200 dark:border-zinc-700 shadow-sm",
                "hover:translate-y-0 hover:shadow-md"
              )}
            >
              {tier.badge && tier.highlight && (
                <div className="absolute -top-2 sm:-top-3 left-3 sm:left-4">
                  <Badge className={badgeStyles}>{tier.badge}</Badge>
                </div>
              )}

              <div className="p-4 sm:p-5 flex-1">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={cn(
                      "p-1.5 sm:p-2 rounded-md sm:rounded-lg",
                      tier.highlight
                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                        : tier.name === "Free"
                        ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    )}
                  >
                    {tier.icon}
                  </div>
                  <h3
                    className={cn(
                      "text-base sm:text-lg font-semibold",
                      tier.name === "Free"
                        ? "text-zinc-900 dark:text-zinc-100"
                        : "text-white dark:text-zinc-100"
                    )}
                  >
                    {tier.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={cn(
                        "text-2xl sm:text-3xl font-bold",
                        tier.name === "Free"
                          ? "text-zinc-900 dark:text-zinc-100"
                          : "text-white"
                      )}
                    >
                      Rs.{isYearly ? tier.price.yearly : tier.price.monthly}
                    </span>
                    <span
                      className={cn(
                        "text-xs",
                        tier.name === "Free"
                          ? "text-zinc-700 dark:text-zinc-300"
                          : "text-white dark:text-zinc-400"
                      )}
                    >
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "mt-1 text-xs",
                      tier.name === "Free"
                        ? "text-zinc-700 dark:text-zinc-300"
                        : "text-white"
                    )}
                  >
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  {tier.features.map((feature) => (
                    <div key={feature.name} className="flex gap-2 sm:gap-3">
                      <div
                        className={cn(
                          "mt-0.5 p-0.5 rounded-full transition-colors duration-200",
                          feature.included
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-red-500 dark:text-red-400"
                        )}
                      >
                        {feature.included ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <X className="w-3 h-3" />
                        )}
                      </div>
                      <div>
                        <div
                          className={cn(
                            "text-xs",
                            tier.name === "Free"
                              ? "text-zinc-700 dark:text-zinc-300"
                              : "text-zinc-400 dark:text-zinc-400"
                          )}
                        >
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {!tier.hideButton && (
                <div className="p-4 sm:p-5 pt-0 mt-auto">
                  <Button
                    className={cn(
                      "w-full relative transition-all duration-300 !bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-xs",
                      tier.highlight
                        ? buttonStyles.highlight
                        : buttonStyles.default
                    )}
                  >
                    <span className="text-black font-bold relative z-10 flex items-center justify-center gap-1">
                      {tier.highlight ? (
                        <>
                          Buy now
                          <ArrowBigRight className="w-2.5 h-2.5" />
                        </>
                      ) : (
                        <></>
                      )}
                    </span>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { PricingSection };
