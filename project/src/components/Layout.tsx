import React from 'react';
import { User, Home, Info, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-indigo-900/40 text-indigo-300'
          : 'hover:bg-gray-800 text-gray-400 hover:text-gray-300'
      }`}
    >
      {children}
    </Link>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Profile Section */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-indigo-900 to-purple-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-24 flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Card */}
            <div className="z-10 w-full md:w-80">
              <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
                <div className="h-32 bg-gradient-to-br from-indigo-900 to-purple-900"></div>
                <div className="px-6 -mt-24">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80"
                    alt="Profile"
                    className="w-48 h-48 mx-auto rounded-full object-cover ring-8 ring-gray-800"
                  />
                </div>
                <div className="p-6 mt-4 bg-gray-800/95 space-y-4">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail size={18} />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone size={18} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin size={18} />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex justify-center gap-4 pt-4 border-t border-gray-700">
                    <a href="#" className="text-gray-400 hover:text-indigo-300 transition-colors">
                      <Github size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-indigo-300 transition-colors">
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="flex-1 text-center md:text-left mt-8 md:mt-28">
              <h1 className="text-4xl font-bold text-white mb-4">John Doe</h1>
              <p className="text-xl text-gray-300">
                Full-stack developer passionate about creating beautiful and functional web applications.
                With over 5 years of experience in modern web technologies, I specialize in building
                scalable solutions that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-gray-800/80 backdrop-blur-sm shadow-lg z-20 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-start h-16">
            <div className="flex space-x-4">
              <NavLink to="/"><Home size={20} /> Home</NavLink>
              <NavLink to="/about"><Info size={20} /> About</NavLink>
              <NavLink to="/contact"><Mail size={20} /> Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}