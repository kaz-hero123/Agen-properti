"use client";

import { useState, useMemo } from "react";
import { listings, Listing } from "@/data/listings";
import FilterBar from "./FilterBar";
import ListingCard from "./ListingCard";
import ListingModal from "./ListingModal";

export default function ListingsView() {
  const [locationFilter, setLocationFilter] = useState("Semua");
  const [priceFilter, setPriceFilter] = useState("Semua");
  const [typeFilter, setTypeFilter] = useState("Semua");
  
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  // Extract unique locations from data
  const locations = useMemo(() => {
    const locs = new Set(listings.map(l => l.location));
    return ["Semua", ...Array.from(locs)];
  }, []);

  const filteredListings = useMemo(() => {
    return listings.filter(listing => {
      // Location match
      const matchLocation = locationFilter === "Semua" || listing.location === locationFilter;
      
      // Type match
      const matchType = typeFilter === "Semua" || listing.roomType === typeFilter;
      
      // Price match
      let matchPrice = true;
      if (priceFilter !== "Semua") {
        if (priceFilter === "< 1 Juta") matchPrice = listing.pricePerMonth < 1000000;
        else if (priceFilter === "1-1.5 Juta") matchPrice = listing.pricePerMonth >= 1000000 && listing.pricePerMonth <= 1500000;
        else if (priceFilter === "1.5-2 Juta") matchPrice = listing.pricePerMonth > 1500000 && listing.pricePerMonth <= 2000000;
        else if (priceFilter === "> 2 Juta") matchPrice = listing.pricePerMonth > 2000000;
      }

      return matchLocation && matchType && matchPrice;
    });
  }, [locationFilter, priceFilter, typeFilter]);

  const resetFilters = () => {
    setLocationFilter("Semua");
    setPriceFilter("Semua");
    setTypeFilter("Semua");
  };

  return (
    <section id="kamar" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-nearblack mb-4">
            Pilih Kamar Impianmu
          </h2>
          <p className="text-warmgray text-lg max-w-2xl mx-auto">
            Gunakan filter di bawah untuk menemukan kamar yang paling sesuai dengan kebutuhan dan budget Anda.
          </p>
        </div>

        <FilterBar 
          locationFilter={locationFilter} setLocationFilter={setLocationFilter}
          priceFilter={priceFilter} setPriceFilter={setPriceFilter}
          typeFilter={typeFilter} setTypeFilter={setTypeFilter}
          locations={locations}
        />

        {/* Results Info */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-warmgray font-medium">
            Menampilkan <span className="font-bold text-nearblack">{filteredListings.length}</span> kamar
          </p>
          
          {(locationFilter !== "Semua" || priceFilter !== "Semua" || typeFilter !== "Semua") && (
            <button 
              onClick={resetFilters}
              className="text-forest text-sm font-bold hover:underline"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Grid */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListings.map(listing => (
              <ListingCard 
                key={listing.id} 
                listing={listing} 
                onClick={(l) => setSelectedListing(l)} 
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-warmborder shadow-sm">
            <div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mx-auto mb-4 text-warmgray">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-bold text-nearblack mb-2">Tidak ada kamar yang cocok</h3>
            <p className="text-warmgray mb-6">Coba ubah kombinasi filter Anda untuk melihat lebih banyak pilihan.</p>
            <button 
              onClick={resetFilters}
              className="bg-forest text-white px-6 py-2.5 rounded-lg font-medium hover:bg-sage transition-colors"
            >
              Tampilkan Semua Kamar
            </button>
          </div>
        )}

      </div>

      {/* Modal is rendered conditionally at the root of the section */}
      {selectedListing && (
        <ListingModal 
          listing={selectedListing} 
          onClose={() => setSelectedListing(null)} 
        />
      )}
    </section>
  );
}
