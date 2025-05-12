import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface UniversityCardProps {
  name: string;
  location: string;
  tuition: string;
  prPathway: string;
  intakes: string;
  courses: string;
  logo: string;
}

const UniversityCard: React.FC<UniversityCardProps> = ({
  name,
  location,
  tuition,
  prPathway,
  intakes,
  courses,
  logo,
}) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/90 border-2 border-[#2C5680]/20 hover:border-[#FF882E]/70 rounded-xl overflow-hidden">
      <CardHeader className="border-b border-gray-100 pb-4">
        <div className="flex items-center gap-4">
          <img src={logo} alt={`${name} Logo`} className="w-16 h-16 rounded-full object-contain" />
          <div>
            <CardTitle className="text-lg font-semibold text-[#2C5680]">{name}</CardTitle>
            <CardDescription className="text-gray-600">{location}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex h-[50px] bg-[#FAF4F0] my-5 rounded-md overflow-hidden shadow-sm">
          <div
            className="bg-[#FAF4F0] flex items-center pl-0 pr-10 py-2"
            style={{
              flexBasis: '90%',
              clipPath: 'polygon(0% 0%, 100% 0%, calc(100% - 25px) 100%, 0% 100%)',
              
            }}
          >
            <span className="text-sm  ml-5 font-semibold text-[#E77D34]">Tuitions Start From</span>
          </div>
          <div
            className="bg-[#FF882E] flex items-center justify-center text-white text-xl font-bold py-2"
            style={{
              flexBasis: '90%',
              clipPath: 'polygon(25px 0%, 100% 0%, 100% 100%, 0% 100%)',
              marginLeft: '0px',
              paddingLeft: '35px',
              paddingRight: '10px'
            }}
          >
            {tuition}
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-between mb-2">
            <span className="text-gray-700 text-sm">PR Pathway:</span>
            <span className="font-semibold text-gray-800 text-sm">{prPathway}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700 text-sm">Intakes:</span>
            <span className="font-semibold text-gray-800 text-sm">{intakes}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-700 text-sm">Courses:</span>
            <span className="font-semibold text-gray-800 text-sm">{courses}</span>
          </div>
        </div>
        <div className="mt-5">
         
        </div>
      </CardContent>
      <Button
            variant="default"
            className="w-full bg-[#F0F3F7] hover:bg-[#E0E5EB] text-[#4A5568] hover:text-[#3A4558] font-semibold py-3 shadow-sm border-0"
          >
            Check Transfer Options
          </Button> 
    </Card>
  );
};

export default UniversityCard; 