export interface GalleryImage {
  id: string;
  imageUrl: string;
  category: string;
  aspectRatio: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    imageUrl: "/gallary/car-front-view.webp",
    category: "Exterior",
    aspectRatio: "4/3",
  },
  {
    id: "2",
    imageUrl: "/gallary/car-dashboard.webp",
    category: "Interior",
    aspectRatio: "4/3",
  },
  {
    id: "3",
    imageUrl: "/gallary/car-side-view.webp",
    category: "Exterior",
    aspectRatio: "4/3",
  },
  {
    id: "4",
    imageUrl: "/gallary/car-interior.webp",
    category: "Interior",
    aspectRatio: "4/3",
  },
  {
    id: "5",
    imageUrl: "/gallary/led-headlamps-and-drls.webp",
    category: "Parts",
    aspectRatio: "16/9",
  },
  {
    id: "6",
    imageUrl: "/gallary/kia-carens-exterior.webp",
    category: "Exterior",
    aspectRatio: "16/9",
  },
  {
    id: "7",
    imageUrl: "/gallary/luxury-seats.webp",
    category: "Interior",
    aspectRatio: "4/3",
  },
  {
    id: "8",
    imageUrl: "/gallary/engine-bay.webp",
    category: "Parts",
    aspectRatio: "4/3",
  },
  {
    id: "9",
    imageUrl: "/gallary/altroz-front-teaser.webp",
    category: "Exterior",
    aspectRatio: "16/9",
  },
  {
    id: "10",
    imageUrl: "/gallary/altroz-side-profile.webp",
    category: "Exterior",
    aspectRatio: "16/9",
  },
  {
    id: "11",
    imageUrl: "/gallary/altroz-rear-view.webp",
    category: "Exterior",
    aspectRatio: "16/9",
  },
  {
    id: "12",
    imageUrl: "/gallary/altroz-front-view.webp",
    category: "Exterior",
    aspectRatio: "16/9",
  },
];

export const galleryCategories = ["All", "Exterior", "Interior", "Parts"];
