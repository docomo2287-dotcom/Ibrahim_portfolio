'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import profileData from '../data/profile.json';

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-8">المهارات</h1>
          
          <div className="space-y-12">
            {profileData.skills.map((skillGroup, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-blue-600 mb-6">{skillGroup.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="mr-4">
                        <h3 className="text-lg font-medium text-gray-900">{skill}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">مهارات إضافية</h2>
            <p className="text-gray-700 mb-4">
              بالإضافة إلى المهارات المذكورة أعلاه، أتمتع بمجموعة من المهارات الشخصية التي تساعدني في العمل بفعالية:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>القدرة على العمل ضمن فريق</li>
              <li>مهارات التواصل الفعال</li>
              <li>إدارة الوقت وتنظيم المهام</li>
              <li>حل المشكلات واتخاذ القرارات</li>
              <li>التفكير الإبداعي والابتكار</li>
              <li>القدرة على التكيف مع المتغيرات</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
