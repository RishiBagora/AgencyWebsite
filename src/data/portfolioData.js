// src/data/portfolioData.js

const portfolioData = [
  {
    /* ===============================
       BASIC INFO
    =============================== */
    id: "hr-1",
    slug: "hotel-bhakti-palace",
    title: "Hotel Bhakti Palace",
    industry: "Hotels & Resorts",
    category: "Hotels & Resorts",
    location: "Nathdwara, Rajasthan",
    year: "2024",
    thumbnail: "/images/bhakti.png",

    /* ===============================
       HERO SECTION
    =============================== */
    hero: {
      headline: "Premium Hotel Website for Direct Bookings",
      subheadline:
        "A fast, SEO-optimized hotel website designed to increase direct bookings and showcase a premium brand experience.",
      coverImage: "/Videos/bhaktione.mp4",
      ctaText: "Build a Similar Website"
    },

    /* ===============================
       OVERVIEW
    =============================== */
    overview: {
      clientType: "Mid-size hotel business",
      projectType: "Business Website Development",
      timeline: "3 Weeks",
      servicesProvided: [
        "Website Design",
        "Website Development",
        "Performance Optimization",
        "SEO Setup"
      ],
      shortDescription:
        "Hotel Bhakti Palace required a modern, fast-loading website focused on direct bookings and strong brand presence."
    },

    /* ===============================
       CHALLENGES
    =============================== */
    challenges: [
      "Outdated website design that did not reflect the hotel’s premium experience",
      "Low direct bookings and over-dependence on third-party platforms",
      "Slow loading speed affecting mobile users",
      "Poor SEO visibility on Google"
    ],

    /* ===============================
       SOLUTION
    =============================== */
    solution: {
      approach:
        "We designed a clean, premium website focused on mobile-first design, fast performance, and SEO-ready structure.",
      highlights: [
        "Modern UI tailored for hotel guests",
        "Mobile-first and responsive layout",
        "Optimized booking flow",
        "SEO-friendly structure and metadata"
      ]
    },

    /* ===============================
       PROCESS
    =============================== */
    process: [
      {
        step: "Discovery & Planning",
        description:
          "Understood hotel goals, target audience, and booking requirements."
      },
      {
        step: "Design & UX",
        description:
          "Created a premium UI aligned with the hotel’s brand identity."
      },
      {
        step: "Development",
        description:
          "Built a fast, responsive website using modern web technologies."
      },
      {
        step: "Testing & Optimization",
        description:
          "Optimized performance, mobile experience, and SEO fundamentals."
      },
      {
        step: "Launch & Support",
        description:
          "Launched the website and provided post-launch support."
      }
    ],

    /* ===============================
       TECH STACK
    =============================== */
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "SEO Best Practices"
    ],

    /* ===============================
       GALLERY
    =============================== */
    gallery: {
      desktop: [
        "/images/bhaktiMockup1.png",
        "/images/bhaktiMockup2.png"
      ],
      mobile: [
        "/images/bhaktiMockup2.png",
        "/images/bhaktiMockup4.png"
      ]
    },

    /* ===============================
       RESULTS
    =============================== */
    results: [
      "Improved website loading speed",
      "Better mobile user experience",
      "Increased direct booking inquiries",
      "Stronger brand presentation online"
    ],

    /* ===============================
       TESTIMONIAL (OPTIONAL)
    =============================== */
    testimonial: {
      enabled: true,
      quote:
        "The new website perfectly represents our hotel brand and has significantly improved our online presence.",
      author: "Hotel Bhakti Palace Management"
    },

    /* ===============================
       LINKS
    =============================== */
    links: {
      liveWebsite: "https://hotelbhaktipalace.com",
      contactCTA: "/contact"
    },

    /* ===============================
       SEO (CASE STUDY SEO)
    =============================== */
    seo: {
      title:
        "Hotel Bhakti Palace Website Case Study | Hotel Website Design",
      description:
        "Case study of Hotel Bhakti Palace website showcasing premium hotel website design, fast performance, and SEO optimization for direct bookings."
    }
  }
];

export default portfolioData;
