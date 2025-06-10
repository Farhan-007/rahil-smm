// components/HeroSection.jsx

import Image from 'next/image';
import AnimatingSphere from '../app/temp/hero/animatingSphere';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white text-gray-900 md:min-h-screen flex flex-col justify-center py-20 px-6 md:px-20 ">

      <div className="absolute z-0">
        {/* <AnimatingSphere /> */}
      </div>

      <div className="flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Digital Growth Experts.
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-6">
          Creative marketing. Targeted results.
        </p>
        <Link href={"#contact"}>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-medium">
            Book Strategy Call
          </button>
        </Link>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-orange-500">50+</h3>
            <p className="text-sm text-gray-500 mt-2">Professional Teams</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500">400+</h3>
            <p className="text-sm text-gray-500 mt-2">Total Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500">100M+</h3>
            <p className="text-sm text-gray-500 mt-2">Investments</p>
          </div>
        </div>
      </div>

      {/* <footer className="flex justify-center space-x-6 pb-8 text-sm text-gray-400">
        <span>Acme Corp</span>
        <span>Nimbus</span>
        <span>Aventis</span>
        <span>Pixelcraft</span>
        <span>Vertex</span>
      </footer> */}
    </section>
  );
}
