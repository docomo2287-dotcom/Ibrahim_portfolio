'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import profileData from './data/profile.json';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{profileData.name}</h1>
              <p className="text-xl md:text-2xl mb-8">{profileData.title}</p>
              <p className="text-lg max-w-3xl mx-auto mb-8">{profileData.summary}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/resume" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium">
                  السيرة الذاتية
                </Link>
                <Link href="/portfolio" className="bg-transparent hover:bg-blue-600 border border-white px-6 py-3 rounded-md font-medium">
                  معرض الأعمال
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">المهارات والخبرات</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {profileData.skills.map((skillGroup, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <svg className="h-5 w-5 text-blue-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certificates Preview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">المؤهلات والشهادات</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">التعليم</h3>
                <ul className="space-y-4">
                  {profileData.education.slice(0, 2).map((edu, index) => (
                    <li key={index} className="border-r-4 border-blue-500 pr-4">
                      <h4 className="font-medium">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-gray-500 text-sm">{edu.location}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/resume" className="text-blue-600 hover:text-blue-800 font-medium">
                    عرض المزيد &larr;
                  </Link>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">الشهادات</h3>
                <ul className="space-y-4">
                  {profileData.certificates.slice(0, 2).map((cert, index) => (
                    <li key={index} className="border-r-4 border-blue-500 pr-4">
                      <h4 className="font-medium">{cert.title}</h4>
                      <p className="text-gray-600">{cert.issuer}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/certificates" className="text-blue-600 hover:text-blue-800 font-medium">
                    عرض المزيد &larr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">هل تبحث عن شخص بمهاراتي؟</h2>
            <p className="text-xl mb-8">أنا متاح للعمل في مشاريع جديدة ومثيرة</p>
            <Link href="/contact" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium inline-block">
              تواصل معي
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
