import React, { useState } from 'react';

// Sample project data
const projects = [
    {
        title: 'Project One',
        info: 'This is the description for project one. It covers various aspects and technologies used in the project.'
    },
    {
        title: 'Project Two',
        info: 'This is the description for project two. It explains the key features and benefits of the project.'
    },
    {
        title: 'Project Three',
        info: 'This is the description for project three. This project showcases advanced features and integrations.'
    },
];

function Project() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-8 md:px-14 lg:px-36">
            <div className="flex items-center">
                <button 
                    onClick={handlePrev} 
                    className={`text-white text-3xl mx-4 bg-transparent border-2 rounded-full p-2 `}
                >
                    &#8592;
                </button>
                
                <div className={`transform transition-transform duration-700 ${currentIndex % 2 === 0 ? 'rotate-y-0' : 'rotate-y-180'} w-full max-w-md bg-transparent rounded-lg shadow-2xl p-6 flex flex-col items-center`}>
                    <h2 className="text-2xl font-bold text-center text-white">{projects[currentIndex].title}</h2>
                    <p className="text-white mt-4 text-center">{projects[currentIndex].info}</p>
                </div>
                
                <button 
                    onClick={handleNext} 
                    className={`text-white text-3xl mx-4 bg-transparent border-2 rounded-full p-2`}
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
}

export default Project;
