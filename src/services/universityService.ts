// Types for our data
export interface University {
    name: string;
    location: string;
    tuition: string;
    prPathway: string;
    intakes: string;
    courses: string;
    logo: string;
    category: string;
}

// Mock data
const universitiesData: University[] = [
    {
        name: 'Edith Cowan University',
        location: '270 Joondalup Drive, Joondalup WA 6027, Australia',
        tuition: '$18,000/year',
        prPathway: 'Yes',
        intakes: 'Feb, July, Nov',
        courses: '40+',
        logo: '/1.png',
        category: 'Engineering',
    },
    {
        name: 'Bond University',
        location: '270 Joondalup Drive, Joondalup WA 6027, Australia',
        tuition: '$18,000/year',
        prPathway: 'Yes',
        intakes: 'Feb, July, Nov',
        courses: '40+',
        logo: '/2.png',
        category: 'MBA',
    },
    {
        name: 'Curtin University',
        location: '270 Joondalup Drive, Joondalup WA 6027, Australia',
        tuition: '$18,000/year',
        prPathway: 'Yes',
        intakes: 'Feb, July, Nov',
        courses: '40+',
        logo: '/3.png',
        category: 'Data Science',
    },
    {
        name: 'Flinders University',
        location: '270 Joondalup Drive, Joondalup WA 6027, Australia',
        tuition: '$18,000/year',
        prPathway: 'Yes',
        intakes: 'Feb, July, Nov',
        courses: '40+',
        logo: '/4.png',
        category: 'Law',
    },
    {
        name: 'La Trobe University',
        location: '270 Joondalup Drive, Joondalup WA 6027, Australia',
        tuition: '$18,000/year',
        prPathway: 'Yes',
        intakes: 'Feb, July, Nov',
        courses: '40+',
        logo: '/5.png',
        category: 'Medicine',
    },
    {
        name: 'Monash University',
        location: '270 Joondalup Drive, Joondalup WA 6027, Australia',
        tuition: '$18,000/year',
        prPathway: 'Yes',
        intakes: 'Feb, July, Nov',
        courses: '40+',
        logo: '/6.png',
        category: 'Engineering',
    },
    // ... existing universities data ...
];

// Mock API functions
export const universityService = {
    // Get all universities
    getAllUniversities: async (): Promise<University[]> => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        return universitiesData;
    },

    // Get universities by category
    getUniversitiesByCategory: async (category: string): Promise<University[]> => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return universitiesData.filter(uni => uni.category === category);
    },

    // Search universities
    searchUniversities: async (query: string): Promise<University[]> => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const searchTerm = query.toLowerCase();
        return universitiesData.filter(uni => 
            uni.name.toLowerCase().includes(searchTerm) ||
            uni.location.toLowerCase().includes(searchTerm) ||
            uni.category.toLowerCase().includes(searchTerm)
        );
    }
}; 