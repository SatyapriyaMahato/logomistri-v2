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
    id: "different-view",
    title: "Different View",
    category: "Real Estate",
    // thumbnail: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800",
    // You can add more details for this project here later
  },
  {
    id: "pricep-cross",
    title: "Pricep Cross",
    category: "Industrial",
    // thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "macrochi",
    title: "Macrochi",
    category: "Corporate",
    // thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  }
];
