import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-700 text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <Link 
        to="/" 
        className="text-xl font-semibold mt-8 underline hover:text-gray-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
