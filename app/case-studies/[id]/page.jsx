import { caseStudiesData } from "@/data/caseStudies";

export async function generateStaticParams() {
    // Build all possible URLs like /case-studies/a93fjk29
    return caseStudiesData.map((c) => ({ id: c.id }));
}

export default async function CaseStudyPage({ params }) {
    // If you fetch data from an API, use await here
    // For static data, this is fine, but keeping async for future-proofing
    const study = caseStudiesData.find((c) => c.id === params.id);

    if (!study) return <div>Not found</div>;

    return (
        <section className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen py-24 px-6 md:px-20 bg-[#eff8e200] text-[#252422]">
            <h1 className="text-3xl font-bold">{study.title}</h1>
            {/* Video */}
            <video
                src={study.video} // put your video in /public/videos/
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/images/product-thumb.jpg" // fallback image
                className=" top-0 left-0 w-full h-full object-cover"
            />

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                    Experience the Product
                </h1>
                <p className="text-lg md:text-2xl text-center max-w-2xl">
                    Smooth, fast, and seamless.
                </p>
            </div>
            <p className="mt-4 text-lg">{study.description || "Coming soon..."}</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea molestias hic porro aperiam quo quod earum similique. Nulla voluptate iure porro ducimus, esse vero non labore, magnam incidunt laborum accusamus eos a ratione placeat maxime illum! Amet architecto vel reiciendis quo non explicabo, asperiores error vero illo sunt, sit, beatae quos consequuntur aut? Consectetur voluptates vero hic alias provident eveniet aspernatur, dolor ullam aliquam maiores sunt tempore, quis illum beatae veritatis distinctio, placeat fuga maxime exercitationem libero. Iusto, in corporis, id itaque vero neque incidunt laboriosam fugit modi quas voluptate natus repellendus qui assumenda aliquam. Eaque minima voluptas incidunt corrupti impedit, iste aliquam voluptatum earum officia consequatur vel nisi odit fugiat quos? Doloremque corporis quisquam rerum error velit ea blanditiis, eveniet sint a debitis quibusdam dolorem assumenda voluptate, amet, ut cumque enim ipsum excepturi delectus ipsa! Atque nam explicabo veniam, perferendis, dolorum voluptatem, id maiores provident vel sunt labore hic fuga nisi. Corrupti ab sequi eum, doloribus enim ipsa magnam. Labore vero sint amet qui quis fuga, fugiat molestias ipsam. Ullam ea suscipit quas, nulla voluptate quis sint sequi quos animi rerum numquam aliquam eum necessitatibus veniam quasi a. Atque perferendis officiis doloremque natus corporis minus amet fuga dicta consectetur?</p>
        </section>
    );
}
