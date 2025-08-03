'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import profileData from '../data/profile.json';

export default function Certificates() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-8">الشهادات والدبلومات</h1>
          
          <div className="grid grid-cols-1 gap-6">
            {profileData.certificates.map((cert, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-blue-600">{cert.title}</h2>
                    <p className="text-gray-600 mt-1">{cert.issuer}</p>
                    {cert.year && <p className="text-gray-500 text-sm mt-1">{cert.year}</p>}
                  </div>
                  {/* Certificate URL link - commented out until URL data is available */}
                  {/* {cert.url && (
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      عرض الشهادة
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )} */}
                </div>
                {/* Certificate description - commented out until description data is available */}
                {/* {cert.description && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-700">{cert.description}</p>
                  </div>
                )} */}
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">المؤهلات الأكاديمية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profileData.education.map((edu, index) => (
                <div key={index} className="bg-white shadow-sm rounded-lg p-4">
                  <h3 className="text-lg font-medium">{edu.degree}</h3>
                  <p className="text-gray-600 mt-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mt-1">{edu.location} {edu.year && `| ${edu.year}`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
