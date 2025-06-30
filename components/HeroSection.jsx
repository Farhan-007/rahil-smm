import Image from 'next/image';
import AnimatingSphere from '../app/temp/hero/animatingSphere';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-white text-gray-900 py-20 px-6 md:px-20 flex flex-col gap-12 md:gap-30">

      <div className="absolute inset-0 z-0">
        {/* <AnimatingSphere /> */}
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="md:w-1/2 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Transforming Brands with Smarter Digital Marketing
          </h1>
        </div>

        <div className="md:w-1/2 w-full pt-4 md:pt-0 md:pl-12">
          <p className="text-base md:text-xl text-gray-500 mb-6">
            Digital marketing agency management commitment to excellence and results, we ensure your business thrives in today's competitive digital landscape.
          </p>
          <Link href={"#contact"}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-medium">
              Book Strategy Call
            </button>
          </Link>
        </div>
      </div>

      <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-4xl font-bold text-orange-500">50+</h3>
          <p className="text-sm text-gray-500 mt-2">Professional Teams</p>
        </div>
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
