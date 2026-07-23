"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Listing } from "@/data/listings";
import { getWhatsAppLink } from "@/lib/whatsapp";
import ImageCarousel from "./ImageCarousel";

interface ListingModalProps {
  listing: Listing;
  onClose: () => void;
}

export default function ListingModal({ listing, onClose }: ListingModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const waLink = getWhatsAppLink(listing.whatsappNumber, listing.whatsappMessage);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-nearblack/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative z-10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Gallery Header */}
        <div className="w-full h-64 sm:h-80 md:h-96 relative bg-nearblack">
          <ImageCarousel images={listing.images} title={listing.name} />
          
          {/* Status Badges */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
            {!listing.available && (
              <span className="bg-nearblack text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                Kamar Penuh
              </span>
            )}
            {listing.highlight && (
              <span className="bg-amber text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                {listing.highlight}
              </span>
            )}
          </div>
        </div>

        {/* Details Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Left Column: Main Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-sm font-medium bg-sand text-forest px-3 py-1 rounded-full">
                  {listing.roomType}
                </span>
                <span className="text-sm font-medium bg-sand text-nearblack px-3 py-1 rounded-full">
                  Khusus {listing.gender}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-nearblack mb-2">
                {listing.name}
              </h2>
              
              <p className="text-warmgray flex items-start gap-2 mb-8">
                <svg className="w-5 h-5 text-forest shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {listing.address}
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-bold font-heading text-nearblack mb-3">Tentang Kos Ini</h3>
                <p className="text-warmgray leading-relaxed">
                  {listing.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-heading text-nearblack mb-4">Fasilitas Tersedia</h3>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                  {listing.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest"></div>
                      <span className="text-nearblack text-sm md:text-base">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Price & CTA Sidebar */}
            <div className="md:w-72 lg:w-80 shrink-0">
              <div className="bg-cream rounded-2xl p-6 border border-warmborder sticky top-0">
                <p className="text-sm text-warmgray mb-1">Harga Sewa</p>
                <div className="text-3xl font-bold text-amber mb-1">
                  {formatPrice(listing.pricePerMonth)}
                </div>
                <p className="text-sm text-warmgray mb-6">per bulan</p>

                <div className="space-y-3">
                  <a 
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl font-bold text-base bg-forest text-white hover:bg-sage transition-colors text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Tanya via WhatsApp
                  </a>
                  
                  <div className="text-center mt-4">
                    <p className="text-xs text-warmgray">
                      Tanya jadwal survei atau info ketersediaan kamar. Kami akan membalas secepatnya.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
