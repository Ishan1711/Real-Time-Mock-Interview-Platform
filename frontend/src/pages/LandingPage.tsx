import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      
      {/* 2. HERO SECTION */}
      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Master your next interview</span>
            <span className="block text-blue-600 mt-2">with real-time practice</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Our Real-Time Mock Interview Platform helps you build confidence, practice answering industry-standard questions, and improve your communication skills before the big day.
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
            <div className="rounded-md shadow">
              <Link 
                to="/interview" 
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg transition-colors"
              >
                Start Interview
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link 
                to="/register" 
                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>
        </section>

        {/* 3. FEATURES SECTION */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Everything you need to succeed
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Real-Time Practice</h3>
                <p className="text-gray-500">
                  Simulate the exact environment of a live interview. Practice managing your time, nerves, and responses on the spot.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Interview Questions</h3>
                <p className="text-gray-500">
                  Access a curated list of standard and behavioral questions that top companies ask during their actual screening processes.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Performance Feedback</h3>
                <p className="text-gray-500">
                  Review your sessions to identify areas of improvement. Perfect your delivery before facing a real hiring manager.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} MockInterview Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;