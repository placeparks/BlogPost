import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='mt-10'>
      <section className="bg-zinc-400 dark:bg-gray-900 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
          <div className="lg:col-span-6 place-self-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white mt-20">Mirac.eth Blog</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Dive into a world of insights, stories, and ideas.<br/>Join us on a journey of discovery and inspiration.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Contact Us
            </a>
          </div>
          <div className="lg:col-span-6">
            <div className="relative w-full h-64 lg:h-[500px]">
              <Image
                src="/bg.webp"
                alt="mockup"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

