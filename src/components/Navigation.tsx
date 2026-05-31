import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X, ArrowRight, Shield } from "lucide-react";

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition past hero point (e.g. 100px of scrolling)
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        id="runeet-sticky-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 border-b border-slate-200/80 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.02)] backdrop-blur-md"
            : "bg-transparent py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Runeet Logo */}
            <a href="#hero" className="outline-none" id="nav-logo-link">
              <Logo
                variant="full"
                height={35}
                lightBackground={true}
              />
            </a>

            {/* Center & Right: Large screen navigation links */}
            <nav className="hidden md:flex items-center gap-8" id="nav-desktop-links">
              <a
                href="#how-it-works"
                className="text-sm font-semibold transition-colors text-slate-700 hover:text-brand-green duration-200"
              >
                How it works
              </a>
              <a
                href="#safety"
                className="text-sm font-semibold transition-colors text-slate-700 hover:text-brand-green duration-200"
              >
                Safety
              </a>
              <a
                href="https://tally.so/r/Y5k0EN"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isScrolled
                    ? "bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
                    : "bg-brand-green text-white hover:bg-brand-green/95 shadow-md shadow-brand-green/10 active:scale-[0.98]"
                }`}
              >
                Join the Waitlist
              </a>
            </nav>

            {/* Mobile Menu Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border transition-all border-slate-200 text-slate-700 hover:bg-slate-100"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Overlay Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 ease-out flex flex-col justify-between ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ top: "0" }}
        id="nav-mobile-overlay"
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-8 flex-1 flex flex-col justify-between">
          <nav className="flex flex-col gap-5 text-center mt-8">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-2xl font-bold text-slate-700 hover:text-brand-green transition-colors py-3"
            >
              How it works
            </a>
            <a
              href="#safety"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-2xl font-bold text-slate-700 hover:text-brand-green transition-colors py-3"
            >
              Safety
            </a>
            <a
              href="https://tally.so/r/Y5k0EN"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 rounded-xl bg-brand-green text-white font-display font-extrabold text-sm uppercase tracking-wider mt-6 flex items-center justify-center gap-2 max-w-sm mx-auto w-full shadow-lg shadow-brand-green/15"
            >
              Join the Waitlist <ArrowRight className="w-4 h-4 stroke-[3]" />
            </a>
          </nav>

          {/* safety note in mobile drawer footer */}
          <div className="border-t border-slate-200 pt-6 mt-12 text-center max-w-xs mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-600 font-semibold mb-2">
              <Shield className="w-4 h-4 text-brand-green" /> Verified Runners Network
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Every runner is verified before receiving meetup location matches. Privacy is built in.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
