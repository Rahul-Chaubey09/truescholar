"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { universityService, University } from '../services/universityService';

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<University[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchResultsRef.current && 
        searchInputRef.current &&
        !searchResultsRef.current.contains(event.target as Node) &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setSearchResults([]);
      }
    };

    const handleScroll = () => {
      setSearchResults([]);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    try {
      const results = await universityService.searchUniversities(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching universities:', error);
    } finally {
      setIsSearching(false);
    }
  };

  return (<>
    <div>
        <div className="h-20 w-full relative overflow-hidden bg-[#2C5680]">
            <div className="container mx-auto px-4 h-full flex items-center">
                <div className="w-full max-w-3xl mx-auto">
                    <div className="relative" ref={searchInputRef}>
                        <div className="flex items-center">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 bg-white p-0">
                                <svg width="20" height="18" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" d="M0 0L10 11.2119V19.6296L15 22V11.2119L25 0H0Z" fill="#242424"/>
                                </svg>
                            </div>
                            
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search universities, courses, or locations..."
                                className="w-full pl-10 pr-30 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm bg-white text-gray-800"
                            />
                            <button 
                                onClick={handleSearch}
                                disabled={isSearching}
                                className="absolute right-0 rounded-lg top-1/2 p-2 transform -translate-y-1/2 flex h-full items-center bg-[#DCE3E9] text-gray-800 hover:bg-gray-200 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <span>{isSearching ? 'Searching...' : 'Search'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
            <div ref={searchResultsRef} className="absolute top-30 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-4 py-8 z-50">
                <div className="bg-white rounded-xl shadow-lg p-6 max-h-[80vh] overflow-hidden flex flex-col relative">
                    <div className="flex items-center justify-between sticky top-0 bg-white z-[22] py-3 px-2 border-b border-gray-100 mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">Search Results</h2>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full shadow-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <p className="text-green-700 font-medium">{searchResults.length} universities found</p>
                            </div>
                            <select className="border rounded-lg px-3 py-1.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white shadow-sm">
                                <option>Sort by: Relevance</option>
                                <option>Sort by: Name</option>
                                <option>Sort by: Tuition</option>
                            </select>
                        </div>
                    </div>
                    <div className="overflow-y-auto overflow-x-hidden pr-2 space-y-4 custom-scrollbar relative">
                        {searchResults.map((university, index) => (
                            <div 
                                key={index} 
                                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 bg-white hover:border-orange-200 group relative"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-24 h-24 relative flex-shrink-0 bg-gray-50 rounded-lg p-2 group-hover:scale-105 transition-transform shadow-sm">
                                        <Image 
                                            src={university.logo} 
                                            alt={university.name} 
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <div className="flex justify-between items-start flex-wrap gap-4">
                                            <div className="flex-grow min-w-[200px]">
                                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors truncate">{university.name}</h3>
                                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                                    <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full shadow-sm">
                                                        <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                        </svg>
                                                        <span className="truncate">{university.location}</span>
                                                    </div>
                                                    <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full shadow-sm">
                                                        <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                        </svg>
                                                        <span className="font-medium truncate">{university.tuition}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="bg-orange-50 hover:bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 group-hover:bg-orange-600 group-hover:text-white shadow-sm">
                                                View Details
                                                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="flex gap-4 mt-4">
                                            <button className="flex-1 bg-[#2C5680] text-white py-2 px-4 rounded-lg hover:bg-[#1e3c5a] transition-colors font-medium flex items-center justify-center gap-2 shadow-sm">
                                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                                </svg>
                                                Compare
                                            </button>
                                            <button className="flex-1 border border-[#2C5680] text-[#2C5680] py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2 shadow-sm">
                                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                                                </svg>
                                                Save for Later
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
    </div>
    <div className="h-200 w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-200">
        <Image 
          src="/homepage.png" 
          alt="Smiling student" 
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative px-4 md:px-24 py-40 md:py-40 text-white">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            TRANSFER TO A BETTER UNI IN AUSTRALIA -
            <span className="text-yellow-400"> HASSLE-FREE, AFFORDABLE, FAST.</span>
          </h1>
          <p className="text-lg mb-6">
            Struggling with high fees or course dissatisfaction? <br />
            We&apos;ll help you transfer to the right university.
          </p>
          <button className="bg-[#FF882E] hover:bg=[#FF882E] text-white font-semibold py-3 px-8 rounded-lg shadow h-14 flex items-center justify-center gap-2 overflow-hidden">
            Compare University
            <Image src="/Vector.png" alt="arrow-right" width={80} height={16} className="inline-block" />
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
