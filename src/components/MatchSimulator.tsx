import React, { useState, useEffect } from "react";
import { SIMULATED_RUNNERS } from "../data/runners";
import { Runner } from "../types";
import { Shield, Sparkles, MapPin, Calendar, Compass, User, Clock, Check } from "lucide-react";

export const MatchSimulator: React.FC = () => {
  // Simulator Filter State
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedPace, setSelectedPace] = useState<string>("5:00/km");
  const [selectedSchedule, setSelectedSchedule] = useState<string>("Morning");
  
  const [isMatching, setIsMatching] = useState<boolean>(false);
  const [matches, setMatches] = useState<Runner[]>([]);
  const [showMessage, setShowMessage] = useState<string>("");

  // Helper lists
  const cities = ["All", "Porto", "Lisbon", "Coimbra", "Braga", "Faro"];
  const paces = ["4:15/km", "4:45/km", "5:00/km", "5:15/km", "5:30/km", "6:00/km", "6:30/km"];
  const schedules = ["Morning", "Lunch", "Evening", "Weekend"];

  // Run matching logic with micro-loading for realistic feeling
  useEffect(() => {
    setIsMatching(true);
    const timer = setTimeout(() => {
      // Direct filter
      let filtered = SIMULATED_RUNNERS.filter((runner) => {
        const cityMatch = selectedCity === "All" || runner.city === selectedCity;
        const paceMatch = runner.pace === selectedPace;
        const scheduleMatch = runner.schedule === selectedSchedule;
        return cityMatch && paceMatch && scheduleMatch;
      });

      if (filtered.length > 0) {
        setMatches(filtered);
        setShowMessage("Perfect matches found near you!");
      } else {
        // Fallback: search for runners that match at least pace or city, sorted by closest pace
        let backupMatches = SIMULATED_RUNNERS.filter((runner) => {
          const cityMatch = selectedCity === "All" || runner.city === selectedCity;
          return cityMatch;
        });

        // If city had no matches, fallback to overall closest pace
        if (backupMatches.length === 0) {
          backupMatches = SIMULATED_RUNNERS;
        }

        // Sort backupMatches by closeness to selected pace
        const [targetMin, targetSec] = selectedPace.split(":").map(Number);
        const targetSeconds = (targetMin || 5) * 60 + (targetSec || 0);

        backupMatches.sort((a, b) => {
          const diffA = Math.abs(a.paceSeconds - targetSeconds);
          const diffB = Math.abs(b.paceSeconds - targetSeconds);
          return diffA - diffB;
        });

        // Limit fallback matches to 2 items
        setMatches(backupMatches.slice(0, 2));
        setShowMessage("No perfect matches. Check out these highly compatible runners nearby!");
      }
      setIsMatching(false);
    }, 550);

    return () => clearTimeout(timer);
  }, [selectedCity, selectedPace, selectedSchedule]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="match-simulator-widget">
      {/* Interactive Controls Panel (Left, 5 cols) */}
      <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden flex flex-col justify-between h-full">
        {/* Decorative corner glow */}
        <div className="absolute -top-12 -left-12 w-28 h-28 rounded-full bg-brand-green/5 blur-xl pointer-events-none" />

        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="p-2 rounded-xl bg-brand-green/10 text-brand-green">
              <Compass className="w-5 h-5" />
            </span>
            <span className="font-display font-bold tracking-tight text-slate-800">
              Pace Matcher
            </span>
            <span className="ml-auto text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-150 text-brand-green font-semibold">
              Simulator Live
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold tracking-tight text-slate-950 mb-2">
            Configure your run style.
          </h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            Choose your ideal criteria to see how Runeet finds your perfect companion in real-time.
          </p>

          <div className="space-y-5">
            {/* City selector */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Where do you run?
              </label>
              <div className="flex flex-wrap gap-1.5">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedCity === city
                        ? "bg-brand-green text-white shadow-md shadow-brand-green/15"
                        : "bg-slate-50 text-slate-600 border border-slate-200/80 hover:border-brand-green/30"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Pace selector */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Your Average Pace
              </label>
              <div className="flex flex-wrap gap-1.5">
                {paces.map((pace) => (
                  <button
                    key={pace}
                    onClick={() => setSelectedPace(pace)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedPace === pace
                        ? "bg-brand-green text-white shadow-md shadow-brand-green/15"
                        : "bg-slate-50 text-slate-600 border border-slate-200/80 hover:border-brand-green/30"
                    }`}
                  >
                    {pace}
                  </button>
                ))}
              </div>
            </div>

            {/* Schedule selector */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Preferred Time
              </label>
              <div className="flex flex-wrap gap-1.5">
                {schedules.map((schedule) => (
                  <button
                    key={schedule}
                    onClick={() => setSelectedSchedule(schedule)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedSchedule === schedule
                        ? "bg-brand-green text-white shadow-md shadow-brand-green/15"
                        : "bg-slate-50 text-slate-600 border border-slate-200/80 hover:border-brand-green/30"
                    }`}
                  >
                    {schedule}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Informational Footer Strip */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
          <Shield className="w-5 h-5 text-brand-green flex-shrink-0" />
          <span>Real-time matches are encrypted, showing only initials and average metrics.</span>
        </div>
      </div>

      {/* Simulator Results & Device Mockup Visual (Right, 7 cols) */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        {/* Device Wrapper Header */}
        <div className="mb-4 flex items-center justify-between text-xs px-2">
          <span className="text-slate-500 font-semibold font-mono flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isMatching ? "bg-amber-400 animate-pulse" : "bg-brand-green"}`} />
            {isMatching ? "Recalculating network..." : showMessage}
          </span>
          <span className="text-slate-400 text-[11px] font-medium font-mono">Mock Platform Preview v1.1</span>
        </div>

        {/* Matches Container simulating Smartphone Viewport */}
        <div className="bg-slate-950 border-2 border-slate-800 rounded-3xl p-6 min-h-[440px] relative transition-all overflow-hidden shadow-2xl">
          {/* Internal Glowing Circle behind phones */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />

          {isMatching ? (
            /* Radar Matching Loader */
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/95 z-10">
              <div className="relative w-28 h-28 mb-4">
                {/* Radar Sweep Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-brand-green/20 animate-ping" />
                <div className="absolute inset-2 rounded-full border border-brand-green/30 animate-pulse" />
                <div className="absolute inset-0 rounded-full border-t-2 border-brand-green animate-spin" />
                <div className="absolute inset-10 bg-emerald-950/40 rounded-full flex items-center justify-center text-brand-green text-sm">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
              </div>
              <p className="font-display font-medium text-white text-sm animate-pulse tracking-wide">
                Analyzing runner coordinates...
              </p>
              <p className="text-xs text-slate-500 mt-1">Cross-referencing schedule alignment</p>
            </div>
          ) : null}

          {/* Matches List */}
          <div className="space-y-4 relative z-0">
            {matches.map((runner, index) => (
              <div
                key={runner.id}
                className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-brand-green/30 rounded-2xl p-5 transition-all duration-300 group shadow-md"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Avatar Circle with Dynamic Color */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-black ${runner.avatarColor} shadow-md flex-shrink-0 text-sm`}>
                    {runner.avatarText}
                  </div>

                  {/* Profile info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-display font-semibold text-white tracking-tight group-hover:text-brand-green transition-colors truncate">
                        {runner.name}
                      </h4>
                      {runner.safetyVerified && (
                        <span className="flex items-center gap-0.5 text-[9px] font-bold text-brand-green bg-brand-green/10 px-1.5 py-0.5 rounded-full border border-brand-green/20 select-none">
                          <Check className="w-2.5 h-2.5 stroke-[3]" /> Verified
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-y-1 gap-x-2.5 text-xs text-slate-300 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-green opacity-80" />
                        {runner.city}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5 text-brand-green opacity-80" />
                        {runner.pace}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-green opacity-80" />
                        {runner.schedule} / {runner.distance}
                      </span>
                    </div>

                    <p className="text-slate-300 text-xs leading-relaxed italic border-l-2 border-slate-700 pl-2.5 mb-3">
                      "{runner.bio}"
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {runner.goals.map((goal, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-emerald-400"
                        >
                          {goal}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Interactive "Connect" CTA simulator card */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div className="text-center sm:text-left">
                <p className="text-xs font-semibold text-white">
                  Want to sync with {matches[0]?.name || "Sara M."}?
                </p>
                <p className="text-[11px] text-slate-400">
                  Secure matching matches you with real runners like them.
                </p>
              </div>
              <a
                href="#waitlist"
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-brand-green hover:bg-brand-green/95 text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow shadow-brand-green/10"
              >
                Join waitlist to match <Sparkles className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
