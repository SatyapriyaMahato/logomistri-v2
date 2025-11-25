// This file contains your portfolio data. 
// Add new objects here to create new project pages.

export const projects = [
  {
    id: "bytheleashk9",
    title: "ByTheLeashK9",
    client: "By The Leash",
    category: "Logo Design and Branding",
    thumbnail: "/images/projects/bytheleashk9/Bytheleashk9-Branding-thumbnail-300x300.jpg",
    description: "Full branding project...",
    fullDescription: "Extended description...",
    keywords: ["Bold", "Natural", "Friendly", "Professional"],

    heroImage: "/images/projects/bytheleashk9/Bytheleashk9-Branding-image-0.jpg",

    gallery: Array.from({ length: 14 }, (_, i) => {
      const num = i + 1;
      const ext = num <= 8 ? "png" : "jpg";
      return `/images/projects/bytheleashk9/Bytheleashk9-Branding-image-${num}.${ext}`;
    })

  },
  {
    id: "differentView",
    title: "Different View",
    client: "Delmond Landry",
    category: "Logo Design and Branding",
    thumbnail: "/images/projects/differentview/Different-View-Branding-image-thumbnail.jpg",
    description: "Full branding project...",
    fullDescription: "Extended description...",
    keywords: ["Bold", "Natural", "Friendly", "Professional"],

    heroImage: "/images/projects/differentview/Different-View-Branding-image-10.jpg",

    gallery: Array.from({ length: 14 }, (_, i) => {
      const num = i + 1;
      const ext = num <= 9 ? "png" : "jpg";
      return `/images/projects/differentview/Different-View-Branding-image-${num}.${ext}`;
    })

  },
  {
    id: "trailercross",
    title: "Trailer Cross",
    client: "Trailer Cross",
    category: "Logo Design and Branding",
    thumbnail: "/images/projects/trailercross/Trailer-Cross-Branding-image-0.jpg",
    description: "Full branding project...",
    fullDescription: "Extended description...",
    keywords: ["Bold", "Natural", "Friendly", "Professional"],

    heroImage: "/images/projects/trailercross/Trailer-Cross-Branding-image-10.jpg",

    gallery: Array.from({ length: 14 }, (_, i) => {
      const num = i + 1;
      const ext = num <= 9 ? "png" : "jpg";
      return `/images/projects/trailercross/Trailer-Cross-Branding-image-${num}.${ext}`;
    })

  },
  {
    id: "macrochi",
    title: "  Macrochi",
    client: " Macrochi",
    category: "Logo Design and Branding",
    thumbnail: "/images/projects/macrochi/Macrochi-Branding-image-0.jpg",
    description: "Full branding project...",
    fullDescription: "Extended description...",
    keywords: ["Bold", "Natural", "Friendly", "Professional"],

    heroImage: "/images/projects/macrochi/Macrochi-Branding-image-10.jpg",

    gallery: Array.from({ length: 16 }, (_, i) => {
      const num = i + 1;
      const ext = num <= 11 ? "png" : "jpg";
      return `/images/projects/macrochi/Macrochi-branding-image-${num}.${ext}`;
    })

  },
  {
    id: "ttc",
    title: "  Trens Tech Co Ltd",
    client: " TTC",
    category: "Logo Design and Branding",
    thumbnail: "/images/projects/ttc/TTC-Branding-image-0.jpg",
    description: "Full branding project...",
    fullDescription: "Extended description...",
    keywords: ["Bold", "Natural", "Friendly", "Professional"],

    heroImage: "/images/projects/ttc/TTC-Branding-image-19.jpg",

    gallery: Array.from({ length: 20 }, (_, i) => {
      const num = i + 1;
      const ext = num <= 15 ? "png" : "jpg";
      return `/images/projects/ttc/TTC-branding-image-${num}.${ext}`;
    })

  },
];
