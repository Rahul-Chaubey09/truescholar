import React from 'react';
import Navbar from '../Navbar';
import Footer from '../home/Footer';

const AboutUsPage = () => {
  return (
    <>
    <Navbar className="sticky top-0 z-50" />
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-[#2C5680] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">About Our Company</h1>
          <p className="text-xl font-light">
            Dedicated to helping you achieve your dreams and succeed in your educational journey.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-6 py-16">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to our &quot;About Us&quot; page! We are dedicated to providing the best services and information to guide students towards their ideal universities and courses. Our core belief is in making education accessible, transparent, and tailored to individual aspirations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We strive to empower students by offering comprehensive resources, expert advice, and a supportive community. Our goal is to simplify the complex process of university selection and application, ensuring that every student can make informed decisions that pave the way for a successful academic and professional future.
          </p>
        </section>

        <section className="bg-white p-10 rounded-xl shadow-lg mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Founded with a passion for education and a vision to bridge the gap between students and their future academic paths, our journey began with a simple idea: to create a platform that makes a real difference.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Over the years, we&apos;ve grown into a trusted resource, helping thousands of students navigate their options. We continuously adapt and innovate, leveraging technology and insights to enhance our services.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The placeholder text you saw earlier, &quot;Lorem ipsum dolor sit amet...&quot;, represents the kind of detailed narrative we envision here. It would typically elaborate on our founding principles, milestones, and the values that drive us every day. We are committed to excellence and to the success of every student we serve.
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Expert Guidance</h3>
              <p className="text-gray-600">Benefit from our team&apos;s extensive knowledge and personalized advice.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Comprehensive Resources</h3>
              <p className="text-gray-600">Access a wide array of tools and information to make informed decisions.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Student Focused</h3>
              <p className="text-gray-600">Your success is our priority. We are committed to supporting your journey.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
    <Footer />
    </>
  );
};

export default AboutUsPage; 