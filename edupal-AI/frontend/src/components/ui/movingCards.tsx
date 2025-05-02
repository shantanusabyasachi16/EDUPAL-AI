// components/ui/moving-cards.tsx
import { cn } from "../../lib/utils";
import React, { useEffect } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    author: {
      name: string;
      handle: string;
      avatar: string;
    };
    text: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!items.length) return;

    // Calculate total width needed for all items
    const scrollerContent = Array.from(scrollerRef.current?.children || []);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem);
      }
    });

    // Set animation properties
    getDirection();
    getSpeed();
  }, [items, direction, speed]);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "20s";
          break;
        case "normal":
          duration = "40s";
          break;
        case "slow":
          duration = "80s";
          break;
        default:
          duration = "40s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 w-full overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full w-max flex-nowrap gap-4 py-4",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        data-animated="true"
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[280px] max-w-full shrink-0 rounded-2xl border border-zinc-700 bg-[#030303] px-4 py-5 sm:w-[320px] sm:px-6 md:w-[350px] md:px-8 md:py-6 lg:w-[400px]"
            key={item.author.name + idx}
          >
            <blockquote>
              <span className="relative z-20 block text-sm leading-[1.6] font-normal text-white">
                {item.text}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="mr-3 h-10 w-10 overflow-hidden rounded-full sm:mr-4 sm:h-12 sm:w-12">
                  <img
                    src={item.author.avatar || "/placeholder.svg"}
                    alt={item.author.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-medium text-gray-100">
                    {item.author.name}
                  </span>
                  <span className="text-xs leading-[1.6] font-normal text-gray-200 sm:text-sm">
                    {item.author.handle}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
