"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, ArrowRight, Line } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UniversityCost {
    university: string;
    course: string;
    cost: number;
}

const currentCosts: UniversityCost[] = [
    { university: 'Uni A', course: 'MBA', cost: 32000 },
    { university: 'Uni B', course: 'Engineering', cost: 47000 },
    { university: 'Uni C', course: 'Science', cost: 28000 },
    { university: 'Uni D', course: 'Accounting', cost: 50000 },
    { university: 'Uni E', course: 'Software', cost: 38000 },
];

const suggestedCosts: UniversityCost[] = [
    { university: 'Uni A', course: 'MBA', cost: 32000 },
    { university: 'Uni B', course: 'Engineering', cost: 42000 },
    { university: 'Uni C', course: 'Science', cost: 28000 },
    { university: 'Uni D', course: 'Accounting', cost: 50000 },
    { university: 'Uni E', course: 'Software', cost: 38000 },
];

const PickMyUniComparison = () => {
    return (
        <div className="container mx-auto px-4 py-22 ">
            <div className="flex w-full justify-center align-center flex-row items-center gap-140">

       
            <div className="text-start mb-12">
                <h2 className="text-2xl font-bold text-[#2C5680] mb-2">Compare Your Uni <span className="text-[#FF882E]">Costs</span></h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt placerat mollis, in interdum est non.</p>
              
            </div>
            <div className="flex justify-center">
            <Button className="mt-4 bg-[#2C5680] hover:bg-[#2C5680] hover:to-indigo-600 text-white" size="sm">
                    See More Savings
                </Button>
            </div>
            </div>
     
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {/* Current University Costs Table */}
                <div className='flex flex-col gap-4'>
                <h3 className="bg-transparent align-center justify-center  py-3 px-4 text-lg font-semibold text-[#2C5680]">CURRENT UNIVERSITIES COST PER YEAR</h3>
                
                <div className="shadow-md rounded-lg overflow-hidden">
                     <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-[#EAF0F5]">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#2C5680] uppercase tracking-wider">
                                        Current Uni
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#2C5680] uppercase tracking-wider">
                                        Course
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#2C5680] uppercase tracking-wider">
                                        Course Fee
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {currentCosts.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-[#F0F0F0]"}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.university}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.course}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.cost.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                {/* Suggested University Costs Table */}
                <div className='flex flex-col gap-4'>
                <h3 className="bg-transparent align-center justify-center  py-3 px-4 text-lg font-semibold text-[#FF882E]">UNIVERSITIES SUGGESTION FOR COST SAVING</h3>
                 
                 <div className="shadow-md rounded-lg overflow-hidden">
                       <div className="overflow-x-auto">
                         <table className="min-w-full divide-y divide-gray-200">
                             <thead className="bg-[#FAF4F0]">
                                 <tr>
                                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#FF882E] uppercase tracking-wider">
                                         Suggested Uni
                                     </th>
                                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#FF882E] uppercase tracking-wider">
                                         Course
                                     </th>
                                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#FF882E] uppercase tracking-wider">
                                         Course Fee
                                     </th>
                                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#FF882E] uppercase tracking-wider">
                                         Savings
                                     </th>
                                 </tr>
                             </thead>
                             <tbody className="bg-white divide-y divide-gray-200">
                                 {suggestedCosts.map((item, index) => {
                                     const currentCost = currentCosts.find(c => c.university === item.university && c.course === item.course)?.cost || 0;
                                     const savings = currentCost - item.cost;
                                     return (
                                         <tr key={index} className={index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-[#F0F0F0]"}>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.university}</td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.course}</td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.cost.toLocaleString()}</td>
                                             <td className={cn(
                                                 "px-6 py-4 whitespace-nowrap text-sm font-medium",
                                                 savings > 0 ? "text-green-600" : "text-gray-900"
                                             )}>
                                                 {savings > 0 ? `$${savings.toLocaleString()}` : '-'}
                                             </td>
                                         </tr>
                                     )
                                 })}
                             </tbody>
                         </table>
                     </div>
                 </div>
                </div>
              
            </div>

            {/* Why Choose PickMyUni Section */}
            <div className="bg-white rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                    {/* Placeholder image.  In a real app, you'd use Next.js's Image component. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/Layer.png" alt="PickMyUni Illustration" className="rounded-lg" />
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-4xl font-bold text-[#2C5680] mb-4">Why Choose  <span className='text-[#FF882E]'> PickMyUni </span></h3>
                    <p className="text-gray-600 mb-6">
                        We&apos;ve helped 1000+ international students successfully transfer and save money on education in Australia.
                    </p>
                    <div className="space-y-4">
                        <BenefitItem
                            title="Save on Tuition Fees"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam tincidunt et."
                            icon='/1.svg'
                        />

                        <BenefitItem
                            title="Easy Credit Transfer Process"
                            description="In et libero ut metus mollis fringilla. Nullam non accumsan enim, non aliquet lectus."
                            icon='/2.svg'
                        />
                        <BenefitItem
                            title="PR Pathway Courses"
                            description="Donec efficitur aliquet pretium. Cras consectetur nisi non mattis sagittis."
                            icon='/3.svg'
                        />
                        <BenefitItem
                            title="Expert Visa Support"
                            description="Maecenas cursus magna vel leo convallis cursus. Mauris mollis tempor dapibus."
                            icon='/4.svg'
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

interface BenefitItemProps {
    title: string;
    description: string;
    icon?: string;
    onClick?: () => void;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description, icon, onClick }) => {
    return (
        <div 
            className="group flex items-center gap-6 p-4 rounded-lg transition-all duration-200 hover:bg-gray-50 cursor-pointer"
            onClick={onClick}
            role="button"
            tabIndex={0}
        >
            {icon && (
                <div className="flex-shrink-0 flex items-center">
                    <img src={icon} alt={title} className="w-8 h-8 object-contain" />
                </div>
            )}
            <div className='flex-1 flex items-center justify-between'>
                <div>
                    <h4 className="text-base font-semibold text-[#2C5680] group-hover:text-[#FF882E] transition-colors">
                        {title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{description}</p>
                </div>
                <div className="flex-shrink-0 flex items-center ml-4">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#FF882E] transform group-hover:translate-x-1 transition-all" />
                </div>
            </div>
        </div>
    );
};

export default PickMyUniComparison;

