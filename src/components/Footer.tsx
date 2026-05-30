import React, { useState } from "react";
import { Logo } from "./Logo";
import { Shield, Info, X } from "lucide-react";

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<"privacy" | "contact" | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("frame.6.photo@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <>
      <footer className="bg-slate-900 border-t border-slate-850 py-12 md:py-16 relative" id="runeet-landing-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: Logo (small horizontal, dark backgrounds friendly) */}
            <div className="flex-shrink-0" id="footer-logo-box">
              <Logo variant="full" height={32} />
            </div>

            {/* Center: Interactive Privacy Policy and Contact Links */}
            <div className="flex items-center gap-8 text-sm text-slate-400 font-medium" id="footer-center-links">
              <button
                onClick={() => setActiveModal("privacy")}
                className="hover:text-brand-green transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-slate-800 select-none">|</span>
              <button
                onClick={() => setActiveModal("contact")}
                className="hover:text-brand-green transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Bottom Copyright bar */}
          <div className="mt-12 pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span>© 2025 Runeet. All rights reserved.</span>
            <span>Created for runners, by runners. Track safe, match smart.</span>
          </div>
        </div>
      </footer>

      {/* Lightweight Dialog/Modal for Privacy Policy */}
      {activeModal === "privacy" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn" id="privacy-modal">
          <div className="bg-[#1E293B] border border-slate-800 rounded-3xl p-6 md:p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-xl border border-slate-750 text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-brand-green mb-4">
              <Shield className="w-5 h-5" />
              <h4 className="font-display font-extrabold text-xl tracking-tight text-white">Privacy Policy</h4>
            </div>

            <div className="text-slate-200 text-sm space-y-4 leading-relaxed">
              <p className="font-medium text-white text-xs uppercase tracking-widest font-mono">Effective date: June 2025</p>
              <p>
                At <strong>Runeet</strong>, your safety, physical sovereignty, and personal telemetry are completely in your hands. We do not sell your navigation vectors or GPS logs to third parties.
              </p>
              <h5 className="font-bold text-white text-xs uppercase">1. Verification Checks</h5>
              <p>
                To provide safe running cohorts, every runner is certified using mobile device authentication before joining a meetup coordinate. Real names and exact ages are verified.
              </p>
              <h5 className="font-bold text-white text-xs uppercase">2. GPS Protection</h5>
              <p>
                Runeet does not track your historic routes indefinitely. Live tracking is exclusively used during active runs, automatically turning off 15 minutes after completion.
              </p>
              <p>
                No third-party SDKs have access to raw location coordinates inside the app.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lightweight Dialog/Modal for Contact */}
      {activeModal === "contact" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn" id="contact-modal">
          <div className="bg-[#1E293B] border border-slate-800 rounded-3xl p-6 md:p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-xl border border-slate-750 text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-brand-green mb-4">
              <Info className="w-5 h-5" />
              <h4 className="font-display font-extrabold text-xl tracking-tight text-white">Get in touch</h4>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Have questions, partnership inquiries, or suggestions representing other cities? Drop us a line!
            </p>

            <div className="bg-[#0A0D14] border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-widest">OFFICIAL EMAIL</span>
                <span className="font-mono text-white text-sm font-semibold">frame.6.photo@gmail.com</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-xl bg-brand-green text-white text-xs font-bold transition-all hover:bg-brand-green/95 shadow-md shadow-brand-green/10 cursor-pointer"
              >
                {copiedEmail ? "Copied!" : "Copy Email"}
              </button>
            </div>

            <div className="mt-6 text-center text-xs text-slate-500">
              Response time: usually under 24 business hours.
            </div>
          </div>
        </div>
      )}
    </>
  );
};
