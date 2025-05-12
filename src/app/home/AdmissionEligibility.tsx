import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AdmissionEligibility = () => {
  return (
    <div
      className={cn(
        'flex items-center justify-center py-8 md:py-12',
        // 'bg-gradient-to-r from-gray-50 to-gray-100', // Removed background gradient
        'bg-gray-50', //Added background color
      )}
    >
      <div
        className={cn(
          'flex flex-col md:flex-row items-center justify-between',
          'backdrop-blur-md',
          'h-auto py-6',
          'h-28', // Changed fixed height to auto with padding
          'rounded-xl shadow-lg',
          'max-w-5xl w-full mx-4 md:mx-8',
          'px-6 md:px-12',
          'border border-gray-200/50',
          'bg-[#FAF4F0]',
        )}
      >
        <div
          className={cn(
            'flex flex-col md:flex-row items-center justify-center', // Changed to centered alignment
            'gap-4 md:gap-10',
            'w-full md:w-auto', // Full width on mobile
          )}
        >
          <h2
            className={cn(
              'text-1xl md:text-2xl font-semibold',
              'text-[#2C5680] text-center',
              'tracking-tight',
            )}
          >
            Check Eligibility for Admission
          </h2>
          <Button
            variant="default"
            size="lg"
            className={cn(
              'bg-[#FF882E]',
              'text-white font-semibold',
              'px-8 py-3',
              'rounded-2',
              'shadow-md hover:shadow-lg',
              'transition-all duration-300',
              'hover:bg-[#2C5680]',
              'focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75',
            )}
          >
            Check Now
          </Button>
        </div>
       
        <div className="flex-shrink-0 mt-6 md:mt-0 flex items-center justify-center">
          <img
            src="/LOGO.png"
            alt="Student"
            className="h-32 md:h-40"
          />
        </div>
      </div>
    </div>
  );
};

export default AdmissionEligibility;
