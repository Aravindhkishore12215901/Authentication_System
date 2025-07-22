import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home as HomeIcon, LogOut, Menu, X, User, ChevronDown, ChevronUp } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here (clear tokens, etc.)
    localStorage.removeItem("token");
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-white-500 to-pink-600">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <HomeIcon className="w-8 h-8 text-white mr-3" />
              <span className="text-xl font-bold text-white">MongoDB Auth Project</span>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white/80 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10 flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-white/80 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-sm border-t border-white/20 animate-slideDown">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                navigate('/profile');
                setIsMenuOpen(false);
                }}
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 w-full text-left flex items-center gap-2"
              >
              <User className="w-4 h-4" />
              Profile
              </button>

              <button
                onClick={handleLogout}
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 w-full text-left flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white shadow-lg">
          <h1 className="text-3xl font-bold mb-4">MongoDB Authentication Project</h1>
          <p className="text-lg mb-4">
            Secure authentication system using MongoDB as the backend database, enabling robust user management.
          </p>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="mt-4 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-white"
          >
            {showDetails ? 'Hide Project Details' : 'Show Project Details'}
            {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showDetails && (
            <div className="mt-6 text-left bg-white/10 rounded-xl p-4">
              <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
              <p className="mb-2">
                This project implements user signup and login functionality with MongoDB as the database.
                Users can register and log in securely, with data stored in MongoDB collections using Mongoose.
              </p>
              <h3 className="text-xl font-semibold mt-4 mb-2">Technologies Used</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><span className="font-medium">Node.js</span> - Backend runtime environment</li>
                <li><span className="font-medium">Express.js</span> - Server-side framework</li>
                <li><span className="font-medium">MongoDB</span> - Database for storing user data</li>
                <li><span className="font-medium">Mongoose</span> - ODM to interact with MongoDB</li>
                <li><span className="font-medium">React.js</span> - Frontend library for UI</li>
                <li><span className="font-medium">Tailwind CSS</span> - Utility-first CSS framework</li>
                <li><span className="font-medium">Lucide React</span> - Icon library for UI icons</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
