// components/Navbar.jsx

import Link from 'next/link';

export default function Navbar() {
  return (
    <section className='bg-[#ffffffc9] backdrop-blur sticky top-0 z-20'>
      <div className="drawer drawer-end  py-2 px-6 md:px-12">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full">
            {/* <div className="mx-2 flex-1 px-2">Navbar Title</div> */}
            <div className="font-bold text-xl mx-2 flex-1 px-2">
              <span className="text-black">DIGITAL</span> <span className="text-orange-500">AGENCY</span>
            </div>
            <div className="hidden flex-1 lg:flex ">
              <ul className="menu menu-horizontal items-center justify-center w-full">
                <nav className=" hidden md:flex space-x-6 text-sm text-gray-600">
                  <Link href="/">Home</Link>
                  <Link href="#services">Services</Link>
                  <Link href="#casestudies">Projects</Link>
                  <Link href="/blog">Blog</Link>
                </nav>
              </ul>
            </div>
            <Link className='flex-1 lg:flex hidden justify-end ' href={'#contact'}>
              <button className="bg-black text-white px-8 py-3 rounded-full text-sm">Let’s Talk</button>
            </Link>
            <div className="flex-none lg:hidden z-10">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="flex flex-col text-xl bg-white min-h-full w-80 p-8 z-20 ">
            <nav className=" flex flex-col space-y-4 py-6 text-gray-600">
              <Link href="/">Home</Link>
              <Link href="#services">Services</Link>
              <Link href="#casestudies">Projects</Link>
              <Link href="/blog">Blog</Link>
            </nav>
            <Link href={'#contact'}>
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm">Let’s Talk</button>
            </Link>
          </ul>
        </div>
      </div>
    </section>

    // <header className="flex items-center justify-between py-6 px-6 md:px-20 ">
    // <div className="font-bold text-xl w-[12rem]">
    //   <span className="text-black">DIGITAL</span> <span className="text-orange-500">AGENCY</span>
    // </div>
    //   <nav className=" hidden md:flex space-x-6 text-sm text-gray-600">
    //     <Link href="/">Home</Link>
    //     <Link href="#services">Services</Link>
    //     <Link href="#casestudies">Projects</Link>
    //     <Link href="/blog">Blog</Link>
    //   </nav>
    //   <Link href={'#contact'}>
    //     <button className="bg-black text-white w-[12rem] px-4 py-2 rounded-full text-sm">Let’s Talk</button>
    //   </Link>
    // </header>
  );
}
