"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);
  
  const testimonials = [
    {
      type: 'text',
      name: 'Aamani Majumdar',
      title: 'Marketing Professional',
      content:
        'A seamless and user-friendly platform. I found the perfect course and improved my skills in no time! Highly recommended.',
    },
    {
      type: 'text',
      name: 'Steven John',
      title: 'Marketing Professional',
      content:
        'A seamless and user-friendly platform. I found the perfect course and improved my skills in no time! Highly recommended.',
    },
    {
      type: 'video',
      name: 'Sarah L,',
      title: 'Marketing Professional',
      image: '/sakshi.png',
      content: '',
    },
    {
      type: 'video',
      name: 'Vinay Rattan',
      title: 'Marketing Professional',
      image: '/amit.png',
      content: '',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate visible testimonials based on the current index
  const getVisibleTestimonials = () => {
    // For mobile, show one testimonial
    if (windowWidth < 640) {
      return [testimonials[currentIndex]];
    } else if (windowWidth < 1024) {
      // For medium screens, show up to 2 testimonials
      const result = [];
      for (let i = 0; i < 2; i++) {
        const index = (currentIndex + i) % testimonials.length;
        result.push(testimonials[index]);
      }
      return result;
    } else {
      // For larger screens, show up to 4 testimonials
      const result = [];
      for (let i = 0; i < 4; i++) {
        const index = (currentIndex + i) % testimonials.length;
        result.push(testimonials[index]);
      }
      return result;
    }
  };

  return (
    <section className="bg-[#2C5680] text-white py-16 h-120 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">
            What Students <span className="text-[#FF882E]">Say!</span>
          </h2>
          
          <div className="flex space-x-3">
            <button 
              onClick={handlePrev}
              className="text-white p-2"
              aria-label="Previous testimonial"
            >
              <IoIosArrowBack className="text-2xl" />
            </button>
            <button 
              onClick={handleNext}
              className="text-white p-2"
              aria-label="Next testimonial"
            >
              <IoIosArrowForward className="text-2xl" />
            </button>
          </div>
        </div>
        
        <div className="absolute">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getVisibleTestimonials().map((t, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="flex flex-col"
              >
                {t.type === 'text' ? (
                  <>
                    <div className="bg-white text-black rounded-2xl p-6 relative mb-5 speech-bubble min-h-[200px]">
                      <FaQuoteLeft className="text-3xl text-gray-300 mb-4" />
                      <p className="mb-2 text-black">{t.content}</p>
                    </div>
                    <div className="flex items-start pl-4">
                      <div className="flex flex-col">
                        <p className="font-semibold text-white">{t.name}</p>
                        <p className="text-sm text-gray-300">{t.title}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white rounded-2xl overflow-hidden mb-5">
                      <div className="relative">
                        <Image
                          src={t.image || "/homepage.png"}
                          alt={t.name}
                          width={400}
                          height={250}
                          className="object-cover w-full h-[200px]"
                        />
                        <button className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/70 rounded-full p-3">
                            <FaPlay className="text-black text-xl" />
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-start pl-4">
                      <div className="flex flex-col">
                        <p className="font-semibold text-white">{t.name}</p>
                        <p className="text-sm text-gray-300">{t.title}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .speech-bubble:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 30px;
          width: 0;
          height: 0;
          border: 15px solid transparent;
          border-top-color: white;
          border-bottom: 0;
          margin-left: -15px;
          margin-bottom: -15px;
        }
      `}</style>
    </section>
  );
}