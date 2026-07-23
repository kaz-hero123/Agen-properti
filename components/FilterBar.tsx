"use client";

import { useState } from "react";

interface FilterBarProps {
  locationFilter: string;
  setLocationFilter: (val: string) => void;
  priceFilter: string;
  setPriceFilter: (val: string) => void;
  typeFilter: string;
  setTypeFilter: (val: string) => void;
  locations: string[];
}

export default function FilterBar({
  locationFilter,
  setLocationFilter,
  priceFilter,
  setPriceFilter,
  typeFilter,
  setTypeFilter,
  locations,
}: FilterBarProps) {
  // Mobile toggle for filters
  const [isOpen, setIsOpen] = useState(false);

  const priceRanges = ["Semua", "< 1 Juta", "1-1.5 Juta", "1.5-2 Juta", "> 2 Juta"];
  const roomTypes = ["Semua", "Standar", "Eksklusif"];

  const FilterChip = ({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
        active 
          ? "bg-forest text-white border-transparent" 
          : "bg-white text-nearblack border border-warmborder hover:border-forest/50"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-warmborder mb-8">
      
      <div className="flex justify-between items-center md:hidden mb-4">
        <h3 className="font-heading font-bold text-nearblack text-lg">Filter Kamar</h3>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-forest p-2 bg-forest/5 rounded-lg"
        >
          <svg className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className={`space-y-6 md:space-y-6 ${isOpen ? "block" : "hidden md:block"}`}>
        
        {/* Location Filter */}
        <div>
          <h4 className="text-sm font-bold text-warmgray mb-3 uppercase tracking-wider">Lokasi</h4>
          <div className="flex flex-wrap gap-2">
            {locations.map(loc => (
              <FilterChip 
                key={loc} 
                label={loc} 
                active={locationFilter === loc} 
                onClick={() => setLocationFilter(loc)} 
              />
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h4 className="text-sm font-bold text-warmgray mb-3 uppercase tracking-wider">Harga per Bulan</h4>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map(range => (
              <FilterChip 
                key={range} 
                label={range} 
                active={priceFilter === range} 
                onClick={() => setPriceFilter(range)} 
              />
            ))}
          </div>
        </div>

        {/* Room Type Filter */}
        <div>
          <h4 className="text-sm font-bold text-warmgray mb-3 uppercase tracking-wider">Tipe Kamar</h4>
          <div className="flex flex-wrap gap-2">
            {roomTypes.map(type => (
              <FilterChip 
                key={type} 
                label={type} 
                active={typeFilter === type} 
                onClick={() => setTypeFilter(type)} 
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
