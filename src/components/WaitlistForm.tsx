import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const WaitlistForm: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto text-center" id="waitlist-form-card">
      <a
        href="https://tally.so/r/Y5k0EN"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-5 bg-brand-green hover:bg-brand-green/95 text-white font-display font-black text-base uppercase tracking-wider rounded-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-brand-green/30 w-full justify-center group"
      >
        <span>Join the Waitlist</span>
        <ArrowRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};
