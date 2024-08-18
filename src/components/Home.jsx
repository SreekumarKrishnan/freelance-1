import React from 'react';
import demo from '../assets/images/sage.jpg';

const Home = () => {
  return (
    <div>
      {/* Image Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src={demo}
          alt="Demo"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center p-6 md:p-12 text-center bg-black bg-opacity-40">
          <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold">
            Lorem Ipsum
          </h1>
          <h3 className="text-white text-lg md:text-2xl lg:text-4xl mt-4">
            is simply dummy text of the printing and typesetting industry.
          </h3>
        </div>
      </div>

      {/* Cards Section */}
      <div className="p-6 md:p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-300 p-6 rounded-lg shadow-lg flex items-center justify-center h-[200px]">
          <h2 className="text-xl font-bold">7+ years of experience</h2>
        </div>
        <div className="bg-gray-300 p-6 rounded-lg shadow-lg flex items-center justify-center h-[200px]">
          <h2 className="text-xl font-bold">2500+ satisfied customers</h2>
        </div>
        <div className="bg-gray-300 p-6 rounded-lg shadow-lg flex items-center justify-center h-[200px]">
          <h2 className="text-xl font-bold">600+ completed projects in MNRE DBT SCHEME Kerala</h2>
        </div>
        <div className="bg-gray-300 p-6 rounded-lg shadow-lg flex items-center justify-center h-[200px]">
          <h2 className="text-xl font-bold">8.5 MW Roof top Solar Installations</h2>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
