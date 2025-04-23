"use client"

import React from 'react';
import { Leaf, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 page-fade-in">
      <div className="text-center max-w-3xl">
        <div className="inline-block bg-green-100 p-4 rounded-full mb-6 logo-animation">
          <Leaf className="w-12 h-12 text-green-600" />
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6 title-animation">
          404
        </h1>
        
        <div className="content-animation">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Looks like we're off the grid
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.<br/>
            Let's get you back to monitoring sustainability efforts!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-6 py-6 h-auto text-lg rounded-lg flex items-center gap-2">
              <Link to="/">
                <Home className="w-5 h-5" />
                Dashboard Home
              </Link>
            </Button>
            <Button asChild className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-6 h-auto text-lg rounded-lg flex items-center gap-2">
              <Link to="/about">
                <ArrowLeft className="w-5 h-5" />
                About the Project
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        /* Page fade-in animation */
        .page-fade-in {
          opacity: 0;
          animation: fadeIn 0.5s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Logo animation */
        .logo-animation {
          opacity: 0;
          transform: scale(0.8);
          animation: scaleIn 0.5s ease forwards;
          animation-delay: 0.2s;
        }

        @keyframes scaleIn {
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Title animation */
        .title-animation {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.5s ease forwards;
          animation-delay: 0.3s;
        }

        /* Content animation */
        .content-animation {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.5s ease forwards;
          animation-delay: 0.4s;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;