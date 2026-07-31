"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Search, Menu, X, Soup, Salad, UtensilsCrossed, Cake } from "lucide-react";
import { useFavorites } from "./FavoritesProvider";
import { CATEGORIES } from "@/lib/categories";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { favorites } = useFavorites();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/ara?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Soup": return <Soup className="w-4 h-4" />;
      case "Salad": return <Salad className="w-4 h-4" />;
      case "UtensilsCrossed": return <UtensilsCrossed className="w-4 h-4" />;
      case "Cake": return <Cake className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-cardborder-dark/50 py-3"
          : "bg-cream/80 backdrop-blur-sm border-b border-cardborder/30 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl sm:text-3xl font-bold text-terracotta tracking-tight transition-colors duration-200 group-hover:text-terracotta-dark">
            Nefis & Özgün
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {CATEGORIES.map((cat) => {
            const isActive = pathname === `/kategori/${cat.slug}`;
            return (
              <Link
                key={cat.slug}
                href={`/kategori/${cat.slug}`}
                className={`relative font-sans text-sm font-medium transition-colors duration-200 py-1 ${
                  isActive ? "text-terracotta" : "text-ink/80 hover:text-terracotta"
                }`}
              >
                {cat.label}
                {isActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-terracotta"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Bar (Desktop Expandable) */}
          <div className="relative hidden sm:flex items-center">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.form
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  onSubmit={handleSearchSubmit}
                  className="absolute right-10"
                >
                  <input
                    type="text"
                    placeholder="Tarif ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-cream-dark border border-cardborder-dark rounded-full py-1.5 pl-4 pr-8 text-sm text-ink focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta"
                    autoFocus
                  />
                </motion.form>
              )}
            </AnimatePresence>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 -m-0.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-ink/80 hover:text-terracotta transition-colors duration-200 rounded-full hover:bg-cream-dark"
              aria-label="Arama yap"
            >
              {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </button>
          </div>

          {/* Favorites Link */}
          <Link
            href="/favorilerim"
            className={`p-2 text-ink/80 hover:text-terracotta transition-colors duration-200 rounded-full hover:bg-cream-dark relative ${
              pathname === "/favorilerim" ? "text-terracotta bg-cream-dark" : ""
            }`}
            aria-label="Favorilerim"
          >
            <Heart className={`w-5 h-5 ${mounted && favorites.length > 0 ? "fill-terracotta text-terracotta" : ""}`} />
            {mounted && favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-terracotta text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-scale-in">
                {favorites.length}
              </span>
            )}
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 -m-0.5 min-w-[44px] min-h-[44px] md:hidden flex items-center justify-center text-ink/80 hover:text-terracotta transition-colors duration-200 rounded-full hover:bg-cream-dark"
            aria-label="Menüyü aç/kapat"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden w-full bg-cream border-t border-cardborder-dark/50 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-5">
              {/* Mobile Search Form */}
              <form onSubmit={handleSearchSubmit} className="relative w-full sm:hidden">
                <input
                  type="text"
                  placeholder="Tarif ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-cream-dark border border-cardborder-dark rounded-full py-2 pl-4 pr-10 text-sm text-ink focus:outline-none focus:border-terracotta"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/60 hover:text-terracotta"
                  aria-label="Ara"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>

              {/* Mobile Category Links */}
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-ink/60 uppercase tracking-wider px-3 mb-1">
                  Kategoriler
                </span>
                {CATEGORIES.map((cat) => {
                  const isActive = pathname === `/kategori/${cat.slug}`;
                  return (
                    <Link
                      key={cat.slug}
                      href={`/kategori/${cat.slug}`}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-base font-medium transition-colors duration-150 ${
                        isActive
                          ? "bg-terracotta/10 text-terracotta"
                          : "text-ink/80 hover:bg-cream-dark hover:text-terracotta"
                      }`}
                    >
                      {getCategoryIcon(cat.icon)}
                      {cat.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Favorites Link */}
              <div className="border-t border-cardborder-dark/50 pt-4 flex flex-col gap-1">
                <Link
                  href="/favorilerim"
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium transition-colors duration-150 ${
                    pathname === "/favorilerim"
                      ? "bg-terracotta/10 text-terracotta"
                      : "text-ink/80 hover:bg-cream-dark hover:text-terracotta"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Heart className={`w-5 h-5 ${mounted && favorites.length > 0 ? "fill-terracotta text-terracotta" : ""}`} />
                    <span>Favorilerim</span>
                  </div>
                  {mounted && favorites.length > 0 && (
                    <span className="bg-terracotta text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {favorites.length} Tarif
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}