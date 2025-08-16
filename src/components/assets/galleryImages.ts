export type GalleryImage = {
  src?: string;
  alt: string;
  id?: string;
};

const galleryImages: GalleryImage[] = [
  {
    src: "https://picsum.photos/seed/image1/800/600",
    alt: "Placeholder 1",
    id: "Vehicle",
  },
  {
    src: "https://picsum.photos/seed/image2/800/600",
    alt: "Placeholder 2",
    id: "Business",
  },
  {
    src: "https://picsum.photos/seed/image3/800/600",
    alt: "Placeholder 3",
  },
  {
    src: "https://picsum.photos/seed/image4/800/600",
    alt: "Placeholder 4",
  },
  {
    src: "https://picsum.photos/seed/image5/800/600",
    alt: "Placeholder 5",
  },
  {
    src: "https://picsum.photos/seed/image6/800/600",
    alt: "Placeholder 6",
  },
];

export default galleryImages;
