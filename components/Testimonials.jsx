const clients = [
    {
        name: "Sophia Reynolds",
        title: "CMO at Nova Retail",
        comment:
            "Working with this team completely transformed our online presence. Their strategy led to a 40% increase in sales within three months.",
        image: "/case1.jpg",
    },
    {
        name: "Liam Patel",
        title: "Founder & CEO of Startly",
        comment:
            "They didn’t just give us a brand identity — they helped shape the way our audience sees us. Highly professional and detail-oriented.",
        image: "/case2.jpg",
    },
    {
        name: "Amelia Chen",
        title: "HOM at Cloudwise",
        comment:
            "Our SEO ranking skyrocketed thanks to their in-depth strategy. We went from page 5 to page 1 on several key terms in under 8 weeks.",
        image: "/case3.jpg",
    },
    {
        name: "Jackson Moore",
        title: "Product Manager at Finloop",
        comment:
            "We’ve worked with many agencies, but this team stands out for their communication, creativity, and consistent results.",
        image: "/case4.jpg",
    },
];


export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-[#FFF7F1] py-16 px-6 md:px-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Client Stories.
                <br />
                <p className="text-[#adadad]">Trusted by industry experts.</p>
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                {
                    clients.map((client, index) => (
                        <div key={index} className="flex flex-col justify-between bg-[#f3f3f3] rounded-xl p-6 gap-5 shadow hover:shadow-md transition">
                            <p className="comment text-[#818181]">{client.comment}</p>
                            <div>
                                <p className="name ">{client.name}</p>
                                <p className="title text-[#818181]">{client.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}