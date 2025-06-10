// components/ContactSection.jsx

export default function ContactSection() {
  return (
    <section id="contact" className=" w-full py-20 px-6 md:px-20 ">
      <div className="mx-auto flex md:flex-row flex-col w-full items-center justify-between mb-12">
        <h2 className="text-2xl md:text-3xl font-black text-left md:w-1/3 text-[#1B1B1B]">
          Let’s Connect And Elevate Your Brand
        </h2>
        <div className="flex md:flex-row flex-col items-center md:w-1/2 gap-12">
          <span className="arrow flex items-center">
            <span className="block h-[2px] w-[150px] bg-[#ff7300]"> </span>
            <span className="block triangle-right"></span>
          </span>
          <p className="text-gray-600">
            Have a project in mind or want to learn more about our services?
            Send us a message.
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="Details md:flex hidden  flex-col w-1/2 gap-6 text-black">
          <span className="text-lg font-bold max-w-1/2">
            Let's start building your digital success story now
          </span>
          <span>
            <label>Phone</label>
            <p>+91 1234567890</p>
          </span>
          <span>
            <label>Email</label>
            <p>rahil@gmail.com</p>
          </span>
          <span className="max-w-1/2">
            <label>Office</label>
            <p>
              address, city, state Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quia, sint!
            </p>
          </span>
          <span className=" underline">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              See on Google Map
            </a>
          </span>
        </div>
        <div className="flex w-full md:w-1/2">
          <form className=" w-full mx-auto bg-black text-white p-8 rounded-xl shadow space-y-6">
            <h1 className="text-3xl">Contact</h1>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="floating-label">
                  <span>Name</span>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className=" w-full border-b border-b-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>
              </div>
              <div>
                <label className="floating-label">
                  <span>Email</span>
                  <input
                    type="text"
                    placeholder="mail@site.com"
                    className=" w-full border-b border-b-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>
              </div>
              <div>
                <label className="floating-label">
                  <span>Phone</span>
                  <input
                    type="text"
                    placeholder="+91-1234567980"
                    className=" w-full border-b border-b-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>
              </div>
              <div>
                <label className="floating-label">
                  <span>Location</span>
                  <input
                    type="text"
                    placeholder="Location"
                    className=" w-full border-b border-b-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>
              </div>
            </div>
            <div>
              <label className="floating-label">
                <span>Message</span>
                <textarea
                  rows="5"
                  className=" w-full border-b border-b-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
