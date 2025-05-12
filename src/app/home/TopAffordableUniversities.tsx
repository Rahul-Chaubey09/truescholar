'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import UniversityCard from '@/components/UniversityCard';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { universityService, University } from '@/services/universityService';

const categories = [
    "All", "MBA", "Engineering", "Data Science", "Law", "Medicine", 
    "Social Science", "Business Analytics", "Artificial Intelligence"
];

const TopAffordableUniversities = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [displayedUniversities, setDisplayedUniversities] = useState<University[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    useEffect(() => {
        loadUniversities();
    }, []);

    const loadUniversities = async () => {
        try {
            const data = await universityService.getAllUniversities();
            setDisplayedUniversities(data);
        } catch (error) {
            console.error('Error loading universities:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCategoryClick = async (category: string) => {
        setIsLoading(true);
        setSelectedCategory(category);
        try {
            if (category === 'All') {
                const allUniversities = await universityService.getAllUniversities();
                setDisplayedUniversities(allUniversities);
            } else {
                const filteredUniversities = await universityService.getUniversitiesByCategory(category);
                setDisplayedUniversities(filteredUniversities.slice(0, 3));
            }
        } catch (error) {
            console.error('Error filtering universities:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="bg-gray-100 py-16" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-10 text-gray-800"
                >
                    <span className="text-[#2C5680]">Top Affordable </span> Universities
                </motion.h2>

                {/* Category Filters */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center mb-8 space-x-2 sm:space-x-4"
                >
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`bg-transparent hover:text-[#FF882E] border-none hover:bg-transparent py-2 px-3 mb-2 sm:mb-0 ${
                                selectedCategory === category ? 'text-[#FF882E] font-semibold underline' : 'text-[#7C7E80]'
                            }`}
                            disabled={isLoading}
                        >
                            {category}
                        </Button>
                    ))}
                </motion.div>

                {/* Loading State */}
                {isLoading && (
                    <div className="text-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2C5680] mx-auto"></div>
                    </div>
                )}

                {/* University Cards Grid */}
                {!isLoading && (
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {displayedUniversities.map((university) => (
                            <motion.div
                                key={university.name}
                                variants={itemVariants}
                            >
                                <UniversityCard 
                                    name={university.name}
                                    location={university.location}
                                    tuition={university.tuition}
                                    prPathway={university.prPathway}
                                    intakes={university.intakes}
                                    courses={university.courses}
                                    logo={university.logo}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* View All Universities Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <Button
                        variant="default"
                        className="bg-[#2C5680] hover:bg-[#2C5680] text-white px-10 py-6 rounded-2 font-semibold"
                        onClick={() => handleCategoryClick('All')}
                        disabled={isLoading}
                    >
                        View All Universities
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};

export default TopAffordableUniversities;
