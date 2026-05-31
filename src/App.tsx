/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Navigation } from "./components/Navigation";
import { HeroVisual } from "./components/HeroVisual";
import { MatchSimulator } from "./components/MatchSimulator";
import { WaitlistForm } from "./components/WaitlistForm";
import { Footer } from "./components/Footer";
import showcaseImage from "./assets/images/runeet_showcase_1780225315246.png";
import {
  Users,
  MapPin,
  Check,
  Shield,
  Calendar,
  Lock,
  ArrowDown,
  Sparkles,
  Award,
  Activity,
  Flame,
  CheckCircle2
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-[#0F172A] selection:bg-brand-green selection:text-white font-sans overflow-x-hidden">
      {/* Dynamic Header & Sticky Navigation */}
      <Navigation />

      {/* =======================================
          SECTION 01: HERO
          ======================================= */}
      <section
        id="hero"
        className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40 flex flex-col items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Rich Animated GPS track background visual */}
        <HeroVisual />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mt-4">
          {/* Subtle tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/25 text-xs font-semibold tracking-wide text-emerald-800 mb-6 backdrop-blur-sm animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            Launching Summer 2026
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold italic tracking-tight leading-[1.05] text-slate-900">
            Run with people <br className="hidden sm:block" />
            <span className="text-brand-green underline decoration-brand-green/20">who get it.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans">
            Runeet matches you with runners who share your pace, your schedule,
            and your goals. No awkward mismatches. Just good runs with the
            right people.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <a
              href="https://tally.so/r/Y5k0EN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-brand-green hover:bg-brand-green/95 text-white font-display font-black text-sm uppercase tracking-wider rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-brand-green/20"
            >
              Join the waitlist
            </a>
            <span className="text-xs text-slate-400 font-medium">
              No spam, ever.
            </span>
          </div>

          {/* New App Showcase Image Mockup */}
          <div className="mt-16 sm:mt-24 max-w-5xl mx-auto px-4 relative z-20 animate-fadeIn" style={{ animationDelay: "200ms" }} id="hero-app-mockup">
            <div className="rounded-[24px] sm:rounded-[32px] p-2 sm:p-3 bg-white/85 backdrop-blur-md border border-slate-200/60 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] overflow-hidden">
              <img
                src={showcaseImage}
                alt="Runeet Application Showcase mockup"
                className="w-full h-auto rounded-[16px] sm:rounded-[24px] object-cover border border-slate-200/40"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Elegant Animated Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
          <span className="text-[10px] uppercase font-mono tracking-widest">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 text-brand-green" />
        </div>
      </section>

      {/* =======================================
          SECTION 02: HOW IT WORKS
          ======================================= */}
      <section
        id="how-it-works"
        className="py-24 md:py-32 border-t border-slate-200 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header block */}
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-[#16364D] font-mono block mb-3">
              HOW IT WORKS
            </span>
            <span className="block h-1.5 w-16 bg-brand-green/25 mx-auto mb-5 rounded-full"></span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold italic text-slate-800 tracking-tight">
              Three steps to your next run.
            </h2>
          </div>

          {/* Steps container (horizontal flows on desktop, stack on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting visual trace line behind steps on large screen */}
            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-slate-200 z-0" />

            {/* Step 1 */}
            <div className="bg-white border border-slate-200/80 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-green/40 hover:shadow-lg transition-all duration-300 shadow-sm">
              {/* Backlight subtle glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-green/5 rounded-full blur-xl pointer-events-none" />
              {/* Step Rank number behind */}
              <span className="absolute right-4 top-2 text-8xl font-display font-black text-slate-100 select-none group-hover:text-slate-200 transition-all">
                01
              </span>

              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 border border-brand-green/20 text-brand-green flex items-center justify-center mb-6 relative z-10 group-hover:bg-brand-green group-hover:text-white transition-all">
                <Users className="w-5 h-5" />
              </div>

              <h3 className="font-display text-xl font-extrabold text-slate-800 mb-3 tracking-tight">
                Build your runner profile
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Tell us your pace, how far you usually run, when you like to go out,
                and what you are training for. We care about the specs that dictate a good pacing session.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-slate-200/80 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-green/40 hover:shadow-lg transition-all duration-300 shadow-sm">
              {/* Backlight subtle glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-green/5 rounded-full blur-xl pointer-events-none" />
              {/* Step Rank number behind */}
              <span className="absolute right-4 top-2 text-8xl font-display font-black text-slate-100 select-none group-hover:text-slate-200 transition-all">
                02
              </span>

              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 border border-brand-green/20 text-brand-green flex items-center justify-center mb-6 relative z-10 group-hover:bg-brand-green group-hover:text-white transition-all">
                <MapPin className="w-5 h-5" />
              </div>

              <h3 className="font-display text-xl font-extrabold text-slate-800 mb-3 tracking-tight">
                Get matched
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Runeet finds runners nearby who fit your profile. Same rhythm,
                same schedule, same ambition. No slow crawls, no frantic catching up.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-slate-200/80 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-green/40 hover:shadow-lg transition-all duration-300 shadow-sm">
              {/* Backlight subtle glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-green/5 rounded-full blur-xl pointer-events-none" />
              {/* Step Rank number behind */}
              <span className="absolute right-4 top-2 text-8xl font-display font-black text-slate-100 select-none group-hover:text-slate-200 transition-all">
                03
              </span>

              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 border border-brand-green/20 text-brand-green flex items-center justify-center mb-6 relative z-10 group-hover:bg-brand-green group-hover:text-white transition-all">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>

              <h3 className="font-display text-xl font-extrabold text-slate-800 mb-3 tracking-tight">
                Head out together
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Meet at an automated public spot and run. It is that simple. Learn their style, share a trail, and sync miles in actual real life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================
          SECTION 03: WHY RUNEET (White Cards, Contrast Background)
          ======================================= */}
      <section
        id="safety"
        className="py-24 md:py-32 bg-[#F5F6F7] text-[#0B0E14] relative scroll-mt-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header block with Dark title on light surface */}
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-[#16364D] font-mono block mb-3">
              WHY RUNEET
            </span>
            <span className="block h-1.5 w-16 bg-brand-blue/30 mx-auto mb-5 rounded-full"></span>
            <h2 className="font-display text-3xl md:text-5xl font-black italic text-brand-blue tracking-tight">
              Matching. Safety. Community.
            </h2>
            <p className="mt-4 text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Why we are building a dedicated platform instead of leaving it to social media scrambles and forum listings.
            </p>
          </div>

          {/* White Card Grid - as requested */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Runner Matching */}
            <div className="bg-white border border-gray-200/80 p-8 rounded-3xl shadow-sm transition-all duration-300 hover:-translate-y-[3px] flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-full bg-brand-green/15 text-[#16364D] flex items-center justify-center mb-6">
                  <Users className="w-5 h-5 font-bold" />
                </div>
                <h3 className="font-display text-xl font-extrabold text-black mb-3 tracking-tight">
                  Your kind of runner.
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We match you on what actually matters: pace, distance, goals,
                  and availability. No random pairings, no wasted runs, and no scheduling friction.
                </p>
              </div>
            </div>

            {/* Card 2: Safety First */}
            <div className="bg-white border border-gray-200/80 p-8 rounded-3xl shadow-sm transition-all duration-300 hover:-translate-y-[3px] flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-full bg-brand-green/15 text-[#16364D] flex items-center justify-center mb-6">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-extrabold text-black mb-3 tracking-tight">
                  Safe by design.
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every member is verified. Meetups start at public locations only.
                  Your GPS telemetry data stays absolute private, protected, and fully under your control.
                </p>
              </div>
            </div>

            {/* Card 3: Events and Communities */}
            <div className="bg-white border border-gray-200/80 p-8 rounded-3xl shadow-sm transition-all duration-300 hover:-translate-y-[3px] flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-full bg-brand-green/15 text-[#16364D] flex items-center justify-center mb-6">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-extrabold text-black mb-3 tracking-tight">
                  More than a running partner.
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Join local running events, discover community hubs that resonate with your vibe,
                  and build a running life that extends comfortably beyond solo miles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* =======================================
          INTERACTIVE MATCH SIMULATOR (Visual Anchor)
          ======================================= */}
      <section className="py-24 md:py-32 relative overflow-hidden z-10 bg-brand-bg text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header block */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#16364D] font-mono block mb-3">
              PREVIEW SYSTEM
            </span>
            <span className="block h-1.5 w-16 bg-brand-green/25 mx-auto mb-5 rounded-full"></span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold italic text-slate-900 tracking-tight">
              Test the matching engine.
            </h2>
            <p className="mt-4 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              We match you on strict criteria to ensure immediate group synchronization. Drag variables below to see simulated companions nearby.
            </p>
          </div>

          <MatchSimulator />
        </div>
      </section>

      {/* =======================================
          SECTION 05: WAITLIST CTA
          ======================================= */}
      <section
        id="waitlist"
        className="py-24 md:py-32 bg-gradient-to-b from-slate-900 to-[#0B0F19] border-t border-slate-800 relative overflow-hidden scroll-mt-20 text-white"
      >
        {/* Subtle grid background suggesting closing, matching guidelines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold italic text-white tracking-tight mb-4 leading-none">
              Ready to find your <br />
              <span className="text-brand-green">running match?</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Runeet is almost here. Join the waiting list below.
            </p>
          </div>

          {/* Interactive Form Component carrying the Waitlist signup + validation */}
          <WaitlistForm />

          <div className="text-center mt-6">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block">
              No app yet. Just a spot saved on the prioritized starter grid for you.
            </span>
          </div>
        </div>
      </section>

      {/* Footer Element carries links, socials, privacy policy modals */}
      <Footer />
    </div>
  );
}
