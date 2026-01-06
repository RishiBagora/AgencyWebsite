const servicesData = [
  {
    slug: "website-development",
    serviceName: "Website Development",
    hero: {
      heading: "Website Development That Helps Your Business Grow",
      subheading:
        "We design and develop fast, responsive, and SEO-friendly websites built to convert visitors into customers.",
      ctaText: "Discuss Website Development"
    },
    intro: {
      title: "Professional Website Development Services",
      description:
        "A website is more than just an online presence. It is a business tool. We build websites that are visually clean, technically strong, and focused on real business outcomes."
    },
    problemsWeSolve: [
      "Outdated or unprofessional website design",
      "Slow loading speed affecting user experience",
      "Website not mobile-friendly",
      "Low enquiries or conversions",
      "Poor SEO structure"
    ],
    ourSolution: [
      "Business-focused website strategy",
      "Clean and premium UI/UX design",
      "Fast, responsive development",
      "SEO-ready structure",
      "Easy content management"
    ],
    whatYouGet: [
      "Custom designed website",
      "Mobile-responsive layout",
      "SEO-friendly structure",
      "Fast loading performance",
      "Contact & enquiry integration",
      "Basic security setup"
    ],
    processTimeline: [
      "Requirement understanding",
      "Structure & design planning",
      "UI design approval",
      "Development & testing",
      "Launch & support"
    ],
    techStack: ["React", "Tailwind CSS", "HTML5", "JavaScript", "SEO best practices"],
    whoItsFor: [
      "Small & medium businesses",
      "Hotels & resorts",
      "Startup founders",
      "Service-based businesses"
    ],
    faqs: [
      {
        question: "How much does website development cost?",
        answer:
          "Pricing depends on features, pages, and complexity. We provide clear pricing after understanding requirements."
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "Most websites are completed within 2–6 weeks depending on scope."
      },
      {
        question: "Will the website be mobile-friendly?",
        answer:
          "Yes, all our websites are fully responsive across devices."
      }
    ],
    cta: {
      heading: "Ready to Build a Professional Website?",
      buttonText: "Start Website Project"
    }
  },

  {
    slug: "ecommerce",
    serviceName: "E-Commerce Development",
    hero: {
      heading: "E-Commerce Websites Designed to Sell",
      subheading:
        "We build secure, scalable, and easy-to-manage online stores that deliver a smooth shopping experience.",
      ctaText: "Discuss E-Commerce Project"
    },
    intro: {
      title: "E-Commerce Website Development",
      description:
        "An e-commerce website should be simple for users and powerful for business owners. We create online stores that are easy to manage and optimized for conversions."
    },
    problemsWeSolve: [
      "Low conversion rate",
      "Complex checkout process",
      "Slow website performance",
      "Poor mobile shopping experience",
      "Difficult product management"
    ],
    ourSolution: [
      "User-friendly store structure",
      "Optimized product pages",
      "Secure payment integration",
      "Mobile-first design",
      "Performance optimization"
    ],
    whatYouGet: [
      "Custom e-commerce design",
      "Product & category setup",
      "Payment gateway integration",
      "Order & inventory management",
      "Mobile-responsive store"
    ],
    processTimeline: [
      "Requirement & product planning",
      "Design & UI approval",
      "Store development",
      "Payment & testing",
      "Launch & training"
    ],
    techStack: ["React", "Node.js", "Payment Gateways", "SEO", "Secure Hosting"],
    whoItsFor: [
      "Retail businesses",
      "Product-based startups",
      "Local brands going online"
    ],
    faqs: [
      {
        question: "Can I manage products myself?",
        answer:
          "Yes, we provide an easy admin system for product and order management."
      },
      {
        question: "Is payment integration secure?",
        answer:
          "Yes, we integrate trusted and secure payment gateways."
      }
    ],
    cta: {
      heading: "Launch Your Online Store",
      buttonText: "Start E-Commerce Project"
    }
  },

  {
    slug: "ui-ux-design",
    serviceName: "UI / UX Design",
    hero: {
      heading: "UI/UX Design That Feels Simple and Looks Premium",
      subheading:
        "We design user experiences that are intuitive, clean, and aligned with your brand identity.",
      ctaText: "Discuss UI/UX Design"
    },
    intro: {
      title: "User-Focused UI/UX Design Services",
      description:
        "Good design is not about looks alone. It is about clarity, usability, and user comfort. We design interfaces users love to interact with."
    },
    problemsWeSolve: [
      "Confusing website layout",
      "Poor user experience",
      "Low engagement",
      "Inconsistent branding"
    ],
    ourSolution: [
      "User research-based design",
      "Clean layout structure",
      "Brand-aligned visuals",
      "Mobile-first design approach"
    ],
    whatYouGet: [
      "Wireframes & layouts",
      "High-fidelity UI designs",
      "Mobile & desktop designs",
      "Design system consistency"
    ],
    processTimeline: [
      "User research",
      "Wireframing",
      "Visual design",
      "Feedback & refinement"
    ],
    techStack: ["Figma", "Design systems", "UX principles"],
    whoItsFor: [
      "Startups",
      "SaaS products",
      "Businesses redesigning websites"
    ],
    faqs: [
      {
        question: "Do you provide only design or development too?",
        answer:
          "We offer both design-only and full design-to-development services."
      }
    ],
    cta: {
      heading: "Design a Better User Experience",
      buttonText: "Start UI/UX Design"
    }
  },

  {
    slug: "website-redesign",
    serviceName: "Website Redesign",
    hero: {
      heading: "Website Redesign for Better Performance and Clarity",
      subheading:
        "We redesign outdated websites to improve user experience, speed, and business results.",
      ctaText: "Discuss Website Redesign"
    },
    intro: {
      title: "Website Redesign Services",
      description:
        "If your website looks outdated or does not generate enquiries, a redesign can help realign it with your business goals."
    },
    problemsWeSolve: [
      "Outdated design",
      "Poor mobile experience",
      "Low conversions",
      "Slow website speed"
    ],
    ourSolution: [
      "Modern UI redesign",
      "Content restructuring",
      "Performance improvements",
      "SEO optimization"
    ],
    whatYouGet: [
      "Fresh modern design",
      "Improved user experience",
      "Better performance",
      "SEO-ready structure"
    ],
    processTimeline: [
      "Website audit",
      "Design planning",
      "Redesign execution",
      "Testing & launch"
    ],
    techStack: ["React", "Tailwind CSS", "SEO optimization"],
    whoItsFor: [
      "Growing businesses",
      "Brands re-positioning online"
    ],
    faqs: [
      {
        question: "Will my existing content be reused?",
        answer:
          "Yes, we optimize and reuse relevant content wherever possible."
      }
    ],
    cta: {
      heading: "Upgrade Your Website",
      buttonText: "Start Website Redesign"
    }
  }
];

export default servicesData;
