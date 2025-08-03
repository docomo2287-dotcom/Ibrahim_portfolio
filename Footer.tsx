'use client';

import { useEffect } from 'react';
import profileData from '../data/profile.json';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">{profileData.name}</h2>
            <p className="text-gray-300">{profileData.title}</p>
          </div>
          <div className="flex space-x-4 space-x-reverse">
            {profileData.contact.social && profileData.contact.social.length > 0 && profileData.contact.social.map((social, index) => (
              <a 
                key={index} 
                href={social.url || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} {profileData.name}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
