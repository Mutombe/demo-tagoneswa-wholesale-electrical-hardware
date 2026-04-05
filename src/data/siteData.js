export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Tagoneswa Wholesale",
    legalName: "Tagoneswa Wholesale Electrical Hardware",
    tagline: "Wholesale Power. Retail Service.",
    description:
      "Tagoneswa Wholesale Electrical Hardware is Harare's trusted source for bulk electrical and hardware supplies. Wholesale pricing, retail expertise, and a warehouse stocked with everything from cable to conduit.",
    phone: "+263 71 790 5915",
    phoneRaw: "+263717905915",
    whatsappNumber: "263717905915",
    email: "sales@tagoneswa.co.zw",
    address: "110 Coventry Road Workington After Rank/Speedline, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.3,
    ratingRounded: 4,
    reviewCount: 16,
    established: "2012",
    yearsExperience: "12+",
    projectsCompleted: "5,000+",
    employees: "35+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "tagoneswa-wholesale-electrical-hardware-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Tagoneswa",
    logoLine2: "Wholesale",
  },

  hero: {
    badge: "Harare's Wholesale Electrical & Hardware Specialists",
    titleParts: [
      { text: "WHOLESALE " },
      { text: "POWER", highlight: true },
      { text: " RETAIL SERVICE." },
    ],
    subtitle:
      "Bulk pricing on over 8,000 electrical and hardware products. From contractors buying by the pallet to homeowners needing a single switch, Tagoneswa delivers.",
    ctaPrimary: "Shop Wholesale",
    ctaSecondary: "Request Quote",
    trustBadge: "5,000+ Contractors Served",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85", alt: "Tagoneswa Wholesale professional image 1" },
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85", alt: "Tagoneswa Wholesale professional image 2" },
      { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85", alt: "Tagoneswa Wholesale showcase" },
    ],
  },

  stats: [
    { number: "5000+", label: "Contractors Served" },
    { number: "12+", label: "Years Trading" },
    { number: "8000+", label: "Products Stocked" },
    { number: "98%", label: "Order Accuracy" },
  ],

  servicesPreview: [
    {
      title: "Electrical Cabling",
      desc: "SURFIX, CABTYRE, armoured cable, and single-core wiring in every gauge from 1.5mm to 240mm.",
      icon: "HardHat",
    },
    {
      title: "Distribution Boards",
      desc: "DB boards, circuit breakers, isolators, and surge protection for residential and industrial installations.",
      icon: "Lightbulb",
    },
    {
      title: "Lighting Solutions",
      desc: "LED panels, downlights, floodlights, street lights, and decorative fixtures from trusted manufacturers.",
      icon: "Star",
    },
    {
      title: "Switches & Sockets",
      desc: "Premium and economy ranges in single, double, and triple configurations. Outdoor weatherproof options included.",
      icon: "Buildings",
    },
    {
      title: "Conduit & Trunking",
      desc: "PVC conduit, galvanized conduit, mini trunking, and cable management systems for neat installations.",
      icon: "Wrench",
    },
    {
      title: "Tools & Accessories",
      desc: "Crimping tools, wire strippers, testers, tape, cable ties, and junction boxes for every electrical job.",
      icon: "Ruler",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Electrical Cabling",
        slug: "electrical-cabling",
        desc: "SURFIX, CABTYRE, armoured cable, and single-core wiring in every gauge from 1.5mm to 240mm.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      },
      {
        title: "Distribution Boards",
        slug: "distribution-boards",
        desc: "DB boards, circuit breakers, isolators, and surge protection for residential and industrial installations.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      },
      {
        title: "Lighting Solutions",
        slug: "lighting-solutions",
        desc: "LED panels, downlights, floodlights, street lights, and decorative fixtures from trusted manufacturers.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      },
      {
        title: "Switches & Sockets",
        slug: "switches-and-sockets",
        desc: "Premium and economy ranges in single, double, and triple configurations. Outdoor weatherproof options included.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      },
      {
        title: "Conduit & Trunking",
        slug: "conduit-and-trunking",
        desc: "PVC conduit, galvanized conduit, mini trunking, and cable management systems for neat installations.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      },
      {
        title: "Tools & Accessories",
        slug: "tools-and-accessories",
        desc: "Crimping tools, wire strippers, testers, tape, cable ties, and junction boxes for every electrical job.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial Tagoneswa",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in electrical cabling.",
        client: "Commercial Client",
        services: ["Electrical Cabling", "Distribution Boards"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential Tagoneswa",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in distribution boards.",
        client: "Residential Client",
        services: ["Distribution Boards", "Lighting Solutions"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial Tagoneswa",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in lighting solutions.",
        client: "Industrial Client",
        services: ["Lighting Solutions", "Switches & Sockets"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional Tagoneswa",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in switches & sockets.",
        client: "Institutional Client",
        services: ["Switches & Sockets", "Conduit & Trunking"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial Tagoneswa",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in conduit & trunking.",
        client: "Commercial Client",
        services: ["Conduit & Trunking", "Tools & Accessories"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential Tagoneswa",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in tools & accessories.",
        client: "Residential Client",
        services: ["Tools & Accessories", "Electrical Cabling"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Tagoneswa saves us a fortune on cabling. Their SURFIX prices are the best in Harare and the stock is always fresh.",
      name: "Farai Maponga",
      role: "Electrical Contractor",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "I wired my entire house from Tagoneswa. The staff helped me calculate exactly what I needed so there was zero waste.",
      name: "Nyasha Sithole",
      role: "Homeowner, Tynwald",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "Fast service, good prices, and they always have what we need in stock. Our company has been buying here for six years.",
      name: "Peter Gumbo",
      role: "Operations Manager, ZPC",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "The LED lighting range is excellent and competitively priced. We fitted out our entire office from their catalogue.",
      name: "Linda Moyo",
      role: "Office Manager, TelOne",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Tagoneswa Wholesale Electrical Hardware began on Coventry Road with a simple premise: give Harare's electricians and contractors access to quality electrical components at wholesale prices without minimum order hassles.",
      "Twelve years later, our Workington warehouse has become the go-to destination for electrical professionals across Zimbabwe. We combine wholesale pricing with the product knowledge and personal service you expect from a specialist retailer.",
    ],
    values: [
      { title: "True Wholesale Pricing", desc: "No membership fees, no minimum orders. Wholesale prices on every product from your first purchase." },
      { title: "Full Range in Stock", desc: "Over 8,000 SKUs permanently stocked. If it is electrical, we have it." },
      { title: "Trade Expertise", desc: "Our counter staff are trained electricians who understand your specifications and can suggest alternatives." },
      { title: "Bulk Order Logistics", desc: "Palletized delivery for large orders. Free delivery within Harare on orders over a qualifying threshold." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Tagoneswa saves us a fortune on cabling. Their SURFIX prices are the best in Harare and the stock is always fresh.", name: "Farai Maponga", role: "Electrical Contractor", rating: 5 },
      { text: "I wired my entire house from Tagoneswa. The staff helped me calculate exactly what I needed so there was zero waste.", name: "Nyasha Sithole", role: "Homeowner, Tynwald", rating: 5 },
      { text: "Fast service, good prices, and they always have what we need in stock. Our company has been buying here for six years.", name: "Peter Gumbo", role: "Operations Manager, ZPC", rating: 5 },
      { text: "The LED lighting range is excellent and competitively priced. We fitted out our entire office from their catalogue.", name: "Linda Moyo", role: "Office Manager, TelOne", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "Tagoneswa Wholesale",
        address: "110 Coventry Road Workington After Rank/Speedline, Zimbabwe",
        phone: "+263 71 790 5915",
        email: "sales@tagoneswa.co.zw",
      },
    ],
  },

  homeCta: {
    title: "POWER YOUR PROJECT",
    subtitle: "Wholesale prices. Expert advice. Over 8,000 electrical and hardware products in stock and ready for collection or delivery.",
    ctaPrimary: "Shop Wholesale",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Tagoneswa! I need wholesale pricing on electrical supplies.",
    backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85",
  },

  footer: {
    description: "Tagoneswa Wholesale Electrical Hardware is Harare's trusted source for bulk electrical and hardware supplies. Wholesale pricing, retail expertise, and...",
    copyright: "Tagoneswa Wholesale",
  },
};

export default siteData;
