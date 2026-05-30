import React from "react";
import rLogo from "../assets/images/logo.png";

interface LogoProps {
  variant?: "full" | "icon" | "badge" | "monochrome";
  height?: number;
  className?: string;
  lightBackground?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "full",
  height = 40,
  className = "",
  lightBackground = false,
}) => {
  // Brand Colors
  const greenColor = "#13FD76"; // Vibrant neon/high-speed green from user request
  const blueColor = "#0B84D9";  // Deep electric blue accent
  const whiteOrDark = lightBackground ? "#0F172A" : "#FFFFFF";

  // Calculate proportional width
  let width = height;
  if (variant === "full") {
    width = height * 3.5;
  }

  if (variant === "icon" || variant === "badge") {
    return (
      <img
        src={rLogo}
        alt="Runeet Logo"
        className={`rounded-2xl object-contain ${className}`}
        style={{ height: `${height}px`, width: `${height}px` }}
        referrerPolicy="no-referrer"
        id="runeet-logo-img-icon"
      />
    );
  }

  // Full horizontal layout: [Image Icon] [Runeet Text Header]
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`} id="runeet-nav-brand">
      {/* Absolute exact user logo image as the icon part */}
      <img
        src={rLogo}
        alt="Runeet Icon"
        className="rounded-[20%] object-contain shadow-sm border border-slate-200/20"
        style={{ height: `${height * 1.15}px`, width: `${height * 1.15}px` }}
        referrerPolicy="no-referrer"
        id="runeet-logo-img-main"
      />

      {/* Brand Text styling */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline">
          <span
            className="font-display text-[26px] font-extrabold italic tracking-[-0.03em] uppercase leading-none"
            style={{ color: whiteOrDark }}
          >
            Run
          </span>
          <span
            className="font-display text-[26px] font-extrabold italic tracking-[-0.03em] uppercase leading-none"
            style={{ color: variant === "monochrome" ? whiteOrDark : greenColor }}
          >
            eet
          </span>
        </div>
        <div className="mt-1 flex gap-1 text-[7.5px] font-extrabold tracking-[0.06em] uppercase whitespace-nowrap italic">
          <span style={{ color: variant === "monochrome" ? whiteOrDark : greenColor }}>
            Meet a friend.
          </span>
          <span style={{ color: variant === "monochrome" ? whiteOrDark : blueColor }}>
            And run it.
          </span>
        </div>
      </div>
    </div>
  );
};
