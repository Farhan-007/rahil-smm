// components/ContactSection.jsx

export default function Footer() {
    return (
        <section className="bg-[#131313] text-[#cecece] md:px-20 px-6 py-12 flex flex-col justify-between gap-12">
            <div className="icon-logo flex justify-between ">
                <p>DIGITAL AGENCY</p>
                <span className=" flex gap-3">
                    <i>i</i>
                    <i>i</i>
                    <i>i</i>
                    <i>i</i>
                </span>
            </div>
            <div className="services flex flex-wrap items-start justify-between gap-6">
                {/* <div className="flex items-start justify-between gap-6"> */}
                    <div className="blockleft flex flex-col gap-3 w-1/3">
                        <span className=" font-bold">Digital Agency</span>
                        <span className=" text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, beatae laboriosam. Possimus!
                        </span>
                        <span>+911234567890</span>
                    </div>

                    <div className="block1 flex flex-col gap-3 w-1/3">
                        <span className=" font-bold">Category</span>
                        <span className=" text-sm">Creative Growth</span>
                        <span className=" text-sm">Digital Impact</span>
                    </div>
                    <div className="block2 flex flex-col gap-3 w-1/3">
                        <span className=" font-bold">Company</span>
                        <span className=" text-sm">About Us</span>
                        <span className=" text-sm">Blog</span>
                    </div>
                    <div className="block3 flex flex-col gap-3 w-1/3">
                        <span className=" font-bold">Services</span>
                        <span className=" text-sm">Partner</span>
                        <span className=" text-sm">Market</span>
                        <span className=" text-sm">Capital</span>
                    </div>

                {/* </div> */}

            </div>
            <div className="copyright flex justify-between">
                <span className="">Digital Agency @ 2025</span>
                <span className="">excellent rate us</span>
            </div>
        </section>
    );
}
