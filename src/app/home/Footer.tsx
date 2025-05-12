import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1F354A] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Dummy Name</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis placerat venenatis aliquet. Suspendisse tempus
              venenatis rhoncus. Nulla nec fermentum nibh.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-md font-semibold mb-4">Navigations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Transfer Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Universities</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Courses</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-md font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Technology & Data</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Business & Finance</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Design & Creativity</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Personal Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Business & Leadership</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">And Many More</a></li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="text-md font-semibold mb-4">Legals</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Help</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-md font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          Pick My Uni 2025 © All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
