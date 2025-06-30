// components/ContactSection.jsx

export default function Footer() {
    return (
        <footer className="bg-[#0f0f0f] text-[#d4d4d4] px-6 md:px-20 py-14 flex flex-col gap-16">
            {/* Top: Logo & Socials */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <h2 className="text-2xl font-semibold tracking-wide">Digital Agency</h2>
                <div className="flex gap-4 text-xl text-[#d4d4d4]">
                    <a href="#" className="hover:text-white transition"><i className="ri-facebook-fill" /></a>
                    <a href="#" className="hover:text-white transition"><i className="ri-instagram-line" /></a>
                    <a href="#" className="hover:text-white transition"><i className="ri-twitter-x-line" /></a>
                    <a href="#" className="hover:text-white transition"><i className="ri-linkedin-fill" /></a>
                </div>
            </div>

            {/* Middle: Footer Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-t border-[#2a2a2a] pt-10">
                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold mb-1 text-white">Digital Agency</h3>
                    <p className="text-sm leading-relaxed text-[#aaaaaa]">
                        We help ambitious brands thrive in the digital world through innovative strategies and bold design.
                    </p>
                    <p className="text-sm text-[#cecece] mt-2">📞 +91 12345 67890</p>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold mb-1 text-white">Category</h3>
                    <a href="#" className="text-sm text-[#bbbbbb] hover:text-white transition">Creative Growth</a>
                    <a href="#" className="text-sm text-[#bbbbbb] hover:text-white transition">Digital Impact</a>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold mb-1 text-white">Company</h3>
                    <a href="#" className="text-sm text-[#bbbbbb] hover:text-white transition">About Us</a>
                    <a href="#" className="text-sm text-[#bbbbbb] hover:text-white transition">Blog</a>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold mb-1 text-white">Services</h3>
                    <a href="#" className="text-sm text-[#bbbbbb] hover:text-white transition">Partner</a>
                    <a href="#" className="text-sm text-[#bbbbbb] hover:text-white transition">Market</a>
                    <a href="#" className="text-sm text-[#bbbbbb] hover:text-white transition">Capital</a>
                </div>
            </div>

            {/* Bottom: Copyright */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-[#888888] border-t border-[#2a2a2a] pt-6">
                <span>© 2025 Digital Agency. All rights reserved.</span>
                <a href="#" className="hover:text-white transition">Rate us on TrustPilot →</a>
            </div>
        </footer>
    );
}
