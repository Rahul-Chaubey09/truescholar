'use client'
import React, { useEffect, useRef } from 'react';

// We'll use standard <img> tags for simplicity here.
// For optimized images in Next.js, you would typically use:
// import Image from 'next/image';

interface StepInfo {
  step: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const stepsContent: StepInfo[] = [
  {
    step: 1,
    title: "Search Your Desired Course",
    description: "Search Your Desired Course Browse a wide range of courses tailored for your learning goals.",
    imageSrc: "/step1.png", // Uses the image you provided
    imageAlt: "Search courses illustration - books and magnifying glass",
  },
  {
    step: 2,
    title: "View Course Details",
    description: "View Course Details Compare course features, reviews, and select the best fit for you.",
    imageSrc: "/step2.png", // Placeholder: Replace with your image for step 2 (e.g., person at laptop)
    imageAlt: "View course details illustration",
  },
  {
    step: 3,
    title: "Enroll Online",
    description: "Enroll Online Simple and secure online enrollment within minutes.",
    imageSrc: "/step3.png", // Placeholder: Replace with your image for step 3 (e.g., person with shield)
    imageAlt: "Enroll online illustration",
  },
  {
    step: 4,
    title: "Start Learning",
    description: "Start Learning Access your course material and start learning anytime, anywhere.",
    imageSrc: "/step4.png", // Placeholder: Replace with your image for step 4 (e.g., person reading)
    imageAlt: "Start learning illustration",
  },
];

const ProcessSteps: React.FC = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-step');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px 20px', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#333' }}>
      <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 'bold', color: '#0D1B3E', marginBottom: '70px', textAlign: 'center' }}>
        Our Process 4 <span style={{color: '#FF6B00'}}> Simple Steps</span>
      </h2>
      
      <div style={{ position: 'relative', width: '100%', maxWidth: '900px' }}>
        {/* Central Dotted Line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '20px',
          bottom: '20px',
          width: '3px',
          backgroundImage: 'linear-gradient(to bottom, #DFDFDF 5px, transparent 5px, transparent 10px)',
          backgroundSize: '3px 15px',
          transform: 'translateX(-1.5px)',
          zIndex: 1,
        }}></div>

        {stepsContent.map((item, index) => {
          const isImageLeft = index % 2 === 0;

          const currentImage = <img src={item.imageSrc} alt={item.imageAlt} style={{ maxWidth: '220px', maxHeight:'200px', width: 'auto', height: 'auto', display:'block' }} />;

          const currentText = (textAlignSide: 'left' | 'right') => (
            <div style={{ textAlign: textAlignSide, maxWidth: '380px' }}>
              <h3 style={{ color: '#2C5680', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '2px', textTransform: 'uppercase' }}>STEP {item.step}</h3>
              <p style={{ color: '#555D74', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', lineHeight: '1.6' }}>{item.description}</p>
            </div>
          );

          return (
            <div 
              key={item.step} 
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '60px',
                position: 'relative',
                zIndex: 2,
                width: '100%',
                opacity: 0,
                transform: `translateX(${isImageLeft ? '-50px' : '50px'})`,
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              }}
              className="step-container"
            >
              {/* Orange Circle on the Timeline */}
              <div style={{
                width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#FF6B00',
                border: '4px solid white',
                boxShadow: '0 0 0 2px #FF6B00',
                position: 'absolute',
                top: 'calc(50% - 14px)',
                left: 'calc(50% - 14px)',
                zIndex: 3,
                opacity: 0,
                transform: 'scale(0)',
                transition: 'opacity 0.4s ease-out 0.3s, transform 0.4s ease-out 0.3s',
              }}
              className="timeline-circle"
              ></div>

              {/* Slot 1 (Physical Left Column) */}
              <div style={{
                flex: '1 1 calc(50% - 20px)',
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: '40px',
              }}>
                {isImageLeft ? currentImage : currentText('right')}
              </div>

              {/* Slot 2 (Physical Right Column) */}
              <div style={{
                flex: '1 1 calc(50% - 20px)',
                display: 'flex',
                justifyContent: 'flex-start',
                paddingLeft: '40px',
              }}>
                {isImageLeft ? currentText('left') : currentImage}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .animate-step {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        .animate-step .timeline-circle {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
      `}</style>
    </div>
  );
};

export default ProcessSteps;
