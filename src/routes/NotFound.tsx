"use client"

import React from 'react';
import { motion } from "framer-motion";
import { Leaf, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {Link} from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4"
    >
      <div className="text-center max-w-3xl">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block bg-green-100 p-4 rounded-full mb-6"
        >
          <Leaf className="w-12 h-12 text-green-600" />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6"
        >
          404
        </motion.h1>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;