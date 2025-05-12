"use client";

import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button'; // Removed
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; //Removed
// Removed unused Sheet imports
import { Menu, ChevronDown, X } from 'lucide-react'; // Import icons
import { cn } from "@/lib/utils" //Added this for conditional classes, will help with styling
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { usePathname } from 'next/navigation';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? 'text-gray-500' : 'text-[#2C5680] hover:text-blue-600';
    };

    const handleMobileMenuClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile dropdown when mobile menu closes
    useEffect(() => {
        if (!isMobileMenuOpen) {
            setIsMobileDropdownOpen(false);
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className={cn("bg-white/90 border-b border-gray-200 py-1 px-2 sm:py-2 sm:px-4 lg:px-8 sticky top-0 z-40", className)}>
                <div className="flex items-center justify-between h-12 sm:h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-lg sm:text-xl font-bold text-[#2C5680]">
                            Dummy Name
                        </Link>
                        <Image src="/Group.png" alt="arrow-right" width={40} height={12} className="inline-block lg:w-[50px] lg:h-[54px] sm:w-[50px] sm:h-[14px]" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-3 lg:gap-6">
                        <Link href="/" className={cn("transition-colors text-sm lg:text-base", isActive('/'))}>Home</Link>
                        <div className="relative group">
                            <button 
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={cn(
                                    "transition-colors flex items-center gap-1 text-sm lg:text-base",
                                    isActive('/compare'),
                                    "focus:outline-none"
                                )}
                            >
                                Compare <ChevronDown className={cn("w-3 h-3 lg:w-4 lg:h-4 transition-transform", isDropdownOpen && "transform rotate-180")} />
                            </button>
                            
                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-1 w-40 lg:w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                    <a 
                                        href="/compare/universities" 
                                        className="block px-3 py-1.5 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Compare Universities
                                    </a>
                                    <a 
                                        href="/compare/courses" 
                                        className="block px-3 py-1.5 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Compare Courses
                                    </a>
                                    <a 
                                        href="/compare/fees" 
                                        className="block px-3 py-1.5 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Compare Tuition Fees
                                    </a>
                                    <a 
                                        href="/compare/locations" 
                                        className="block px-3 py-1.5 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Compare Locations
                                    </a>
                                </div>
                            )}
                        </div>
                        <a href="#" className={cn("transition-colors text-sm lg:text-base", isActive('/examinations'))}>Examinations</a>
                        <a href="#" className={cn("transition-colors text-sm lg:text-base", isActive('/transfer'))}>Transfer Assistance</a>
                        <a href="#" className={cn("transition-colors text-sm lg:text-base", isActive('/resources'))}>Student Resources</a>
                        <button className="bg-[#2C5680] hover:bg-[#2C5680] text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded text-sm">Apply Now</button>
                        <button className="bg-[#FF882E] hover:bg-[#FF882E] text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded text-sm">Request a Free Consultation</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            className="text-gray-700 hover:text-blue-600 p-1"
                            onClick={handleMobileMenuClick}
                        >
                            <Menu className={cn("h-5 w-5 transition-transform", isMobileMenuOpen && "rotate-90")} />
                            <span className="sr-only">Toggle menu</span>
                        </button>
                        
                        {/* Mobile Menu Overlay - Conditionally rendered for smooth transition of overlay */}
                        {isMobileMenuOpen && (
                            <div 
                                className="fixed inset-0 z-40"
                                onClick={handleMobileMenuClick}
                            ></div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Content - Separate for independent transition */}
            <div 
                className={cn(
                    "fixed inset-y-0 left-0 w-[280px] sm:w-[300px] bg-white shadow-xl z-50 p-6 transform transition-transform duration-300 ease-in-out",
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex justify-between items-center mb-8">
                    <div className="text-left">
                        <a href="#" className="text-xl font-bold text-blue-700">
                            Dummy Name
                        </a>
                        <Image src="/Vector.png" alt="arrow-right" width={70} height={14} className="inline-block ml-1" />
                    </div>
                    <button 
                        onClick={handleMobileMenuClick}
                        className="text-gray-600 hover:text-gray-900 p-1 -mr-1"
                    >
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </button>
                </div>
                <div className="space-y-4">
                    <Link href="/" className={cn("block py-2 rounded-md transition-colors text-base hover:bg-gray-100", isActive('/'))}>Home</Link>
                    <div className="space-y-1">
                        <button 
                            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                            className={cn("w-full flex items-center justify-between py-2 rounded-md transition-colors text-base hover:bg-gray-100", isActive('/compare'))}
                        >
                            <span>Compare</span>
                            <ChevronDown className={cn("w-5 h-5 transition-transform", isMobileDropdownOpen && "transform rotate-180")} />
                        </button>
                        {isMobileDropdownOpen && (
                            <div className="pl-4 pt-1 space-y-1 border-l-2 border-gray-200 ml-2">
                                <a href="/compare/universities" className="block py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">Compare Universities</a>
                                <a href="/compare/courses" className="block py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">Compare Courses</a>
                                <a href="/compare/fees" className="block py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">Compare Tuition Fees</a>
                                <a href="/compare/locations" className="block py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">Compare Locations</a>
                            </div>
                        )}
                    </div>
                    <a href="#" className={cn("block py-2 rounded-md transition-colors text-base hover:bg-gray-100", isActive('/examinations'))}>Examinations</a>
                    <a href="#" className={cn("block py-2 rounded-md transition-colors text-base hover:bg-gray-100", isActive('/transfer'))}>Transfer Assistance</a>
                    <a href="#" className={cn("block py-2 rounded-md transition-colors text-base hover:bg-gray-100", isActive('/resources'))}>Student Resources</a>
                    
                    <div className="pt-6 space-y-3">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-md text-base font-medium">Apply Now</button>
                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-md text-base font-medium">Request a Free Consultation</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
