import { Hero, SplitSection, Objectives, Stats, Gallery, CTA } from "@/components/projects";

const dripco = {
  slug: "dripco",
  title: "DripCo — Specialty Coffee Brewers",
  theme: {
    primary: "#9C6644",
    secondary: "#E6CCB2",
    accent: "#7F5539",
  },
  thumbnail: "/images/dripco/hero.jpg",
  layout: [
    {
      component: Hero,
      props: {
        tagline: "Indore’s No.1 Coffee Experience ☕️ #Stay_Dripped",
        image: "/images/dripco/hero.jpg",
      },
    },
    {
      component: SplitSection,
      props: {
        heading: "The Challenge",
        content:
          "Despite a strong product, DripCo struggled to stand out in a competitive café market and needed a social presence that reflected its premium vibe.",
        image: "/images/dripco/challenge.jpg",
      },
    },
    {
      component: Objectives,
      props: {
        items: [
          "Build a premium Instagram presence",
          "Increase engagement with local coffee lovers",
          "Drive café footfall via campaigns",
        ],
      },
    },
    {
      component: Stats,
      props: {
        data: [
          { label: "Follower growth (3 months)", value: "245%" },
          { label: "Avg. engagement rate", value: "9.4%" },
          { label: "Avg. reel views", value: "10k+" },
        ],
      },
    },
    {
      component: Gallery,
      props: {
        images: [
          "/images/dripco/1.jpg",
          "/images/dripco/2.jpg",
          "/images/dripco/3.jpg",
        ],
      },
    },
    {
      component: CTA,
      props: {
        text: "Loved this project? Let’s brew something for your brand ☕️",
        link: "/contact",
      },
    },
  ],
};

export default dripco;
