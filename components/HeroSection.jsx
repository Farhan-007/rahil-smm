// components/HeroSection.jsx

import Image from 'next/image';
import AnimatingSphere from '../app/temp/hero/animatingSphere';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white text-gray-900 md:min-h-screen flex flex-col md:gap-30 py-20 px-6 md:px-20 ">

      <div className="absolute z-0">
        {/* <AnimatingSphere /> */}
      </div>

      <div className="flex items-start justify-center px-6">
        <div className="flex-1/2">
          <h1 className="text-4xl md:text-5xl font-bold ">
            Transforming Brands with Smarter Digital Marketing
          </h1>
        </div>
        <div className="flex-1/2 pt-5 pl-20">
          <p className="text-lg md:text-xl text-gray-500 mb-6">
            Digital marketing agency management commitment to excellence and results, we ensure your business thrives in today's competitive digital landscape
          </p>
          <Link href={"#contact"}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-medium">
              Book Strategy Call
            </button>
          </Link>
        </div>

      </div>
      <div className="mt-12 flex justify-between gap-8">
        <div>
          <h3 className="text-4xl font-bold text-orange-500">50+</h3>
          <p className="text-sm text-gray-500 mt-2">Professional Teams</p>
        </div>
        {/* <div className="image-div">
          <Image
            src="https://via.placeholder.com/120x120.png?text=Image"
            alt="Placeholder"
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
        </div> */}
        <div>
          <h3 className="text-4xl font-bold text-orange-500">400+</h3>
          <p className="text-sm text-gray-500 mt-2">Total Projects</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-orange-500">100M+</h3>
          <p className="text-sm text-gray-500 mt-2">Investments</p>
        </div>
      </div>

    </section>
  );
}
