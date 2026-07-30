import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center gap-4 bg-cream/10">
      {/* Spinning Ring */}
      <div className="w-10 h-10 rounded-full border-4 border-cardborder border-t-terracotta animate-spin" />
      
      {/* Loading Text */}
      <span className="font-sans text-xs font-bold text-ink/40 uppercase tracking-widest animate-pulse">
        Lezzetler Hazırlanıyor...
      </span>
    </div>
  );
}