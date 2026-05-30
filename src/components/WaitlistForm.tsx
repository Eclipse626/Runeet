import React, { useState, useEffect } from "react";
import { Mail, Check, ArrowRight } from "lucide-react";

export const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("runeet_joined_waitlist_simple");
    if (saved) {
      setSubmitted(true);
    }
  }, []);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("runeet_joined_waitlist_simple", "true");
      setSubmitted(true);
      setLoading(false);
    }, 600);
  };

  const handleReset = () => {
    localStorage.removeItem("runeet_joined_waitlist_simple");
    setSubmitted(false);
    setEmail("");
  };

  return (
    <div className="w-full max-w-lg mx-auto" id="waitlist-form-card">
      {!submitted ? (
        <form onSubmit={handleSignup} className="relative z-10 flex flex-col sm:flex-row gap-3 items-stretch bg-[#0F172A] p-3 rounded-2.5xl border border-slate-800 shadow-xl">
          <div className="relative flex-grow">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
              <Mail className="w-4 h-4" />
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-[#1E293B] border border-transparent rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-green/60 transition-all font-sans"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3.5 bg-brand-green text-white font-display font-extrabold text-sm uppercase rounded-xl flex items-center justify-center gap-2 hover:bg-brand-green/95 active:scale-[0.99] transition-all cursor-pointer shadow-lg disabled:opacity-50"
          >
            {loading ? "Joining..." : "Join Waitlist"}
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </form>
      ) : (
        <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8 shadow-2xl text-center relative animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-4 border border-brand-green/20">
            <Check className="w-6 h-6 stroke-[3]" />
          </div>
          <h3 className="font-display font-bold text-white text-xl tracking-tight mb-2">
            You're on the list!
          </h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Thank you for joining. We will notify you as soon as Runeet launches in your city.
          </p>
          <button
            onClick={handleReset}
            className="text-xs text-slate-500 hover:text-brand-green transition-colors cursor-pointer underline underline-offset-4"
          >
            Sign up another email
          </button>
        </div>
      )}
    </div>
  );
};
