import React from 'react';
import BackgroundVideo from './BackgroundVideo';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <BackgroundVideo />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Hi, I'm Renny Thomas
        </h1>
        <p className="text-gray-100 text-lg md:text-xl mb-8">
          I'm a full-stack developer passionate about building modern web applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-all hover:scale-105">
            View My Work
          </a>
          <a href="#contact" className="border-2 border-blue-400 hover:bg-blue-400/20 text-blue-400 py-3 px-8 rounded-lg font-medium transition-all hover:scale-105">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;