import React from 'react';
import {ExampleGraph} from '@/components/ExampleGraph';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the UW Campus Sustainability Dashboard</h1>
      <p className="text-lg text-gray-600">This is what the main page should be.</p>
      <ExampleGraph />
    </div>
  );
};

export default Home;