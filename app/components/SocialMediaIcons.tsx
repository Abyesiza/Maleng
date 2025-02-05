'use client';

import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function SocialMediaIcons() {
  return (
    <div className="flex items-center space-x-3">
      <Link 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative p-2 bg-white/10 rounded-full hover:bg-blue-600/20 transition-all duration-300"
        aria-label="Follow us on Facebook"
      >
        <div className="absolute inset-0 rounded-full bg-blue-600/20 group-hover:scale-110 transition-transform duration-300" />
        <Facebook className="w-4 h-4 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
      </Link>
      <Link 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative p-2 bg-white/10 rounded-full hover:bg-pink-600/20 transition-all duration-300"
        aria-label="Follow us on Instagram"
      >
        <div className="absolute inset-0 rounded-full bg-pink-600/20 group-hover:scale-110 transition-transform duration-300" />
        <Instagram className="w-4 h-4 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
      </Link>
      <Link 
        href="https://tiktok.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative p-2 bg-white/10 rounded-full hover:bg-black/20 transition-all duration-300"
        aria-label="Follow us on TikTok"
      >
        <div className="absolute inset-0 rounded-full bg-black/20 group-hover:scale-110 transition-transform duration-300" />
        <svg 
          className="w-4 h-4 text-white relative z-10 group-hover:scale-110 transition-transform duration-300"
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      </Link>
    </div>
  );
} 