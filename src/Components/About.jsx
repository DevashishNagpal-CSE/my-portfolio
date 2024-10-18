import React, { useEffect, useState, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaDocker } from 'react-icons/fa';
import { SiPostgresql, SiPython } from 'react-icons/si';

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <div id="about" className="flex items-start justify-center px-8 md:px-14 lg:px-36 py-16 min-h-screen" ref={aboutRef}>
            <div className="w-full max-w-6xl mx-auto flex gap-16"> 
              
                <div className="bg-transparent border-black rounded-lg shadow-lg p-6 w-full h-[400px] flex flex-col justify-between transition-opacity duration-1000 ease-in-out transform">
                    <div className={`transition-opacity duration-1000 ease-in-out transform ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}>
                        <h2 className="text-4xl font-bold mb-4 text-left text-white">About Me</h2>
                        <p className="text-lg text-left text-white">
                            Hello! I’m <span className="font-semibold">Devashish Nagpal</span>, an undergraduate student at
                            JK Lakshmipat University (JKLU). Currently pursuing my degree, I am passionate about technology and innovation,
                            constantly seeking to enhance my skills in programming and development. 
                        </p>
                    </div>
                </div>

             
                <div className="bg-transparent border-black rounded-lg shadow-lg p-6 w-full h-[400px] flex items-center justify-center transition-opacity duration-1000 ease-in-out transform">
                    <div className={`grid grid-cols-3 gap-12 transition-opacity duration-1000 ease-in-out transform ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}>
                        <FaHtml5 className="text-6xl text-orange-600" title="HTML5" />
                        <FaCss3Alt className="text-6xl text-blue-500" title="CSS3" />
                        <FaJs className="text-6xl text-yellow-400" title="JavaScript" />
                        <FaReact className="text-6xl text-blue-400" title="React" />
                        <FaGithub className="text-6xl text-white" title="GitHub" />
                        <SiPython className="text-6xl text-yellow-500" title="Python" />
                        <SiPostgresql className="text-6xl text-blue-600" title="PostgreSQL" />
                        <FaDocker className="text-6xl text-blue-500" title="Docker" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
