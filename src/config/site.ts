export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Astral Signs",
  description: "30+ years of experience in sign work",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "",
    twitter: "",
    discord: "",
    contact: "/contact",
  },
  services: [
    {
      title: "Vehicle",
      description: "Custom vinyl lettering for your signs.",
      image: "./src/components/assets/Vehicle.jpg",
      id: 0,
    },
    {
      title: "Wraps",
      description: "Unique sign designs tailored to your preferences.",
      image: "./src/components/assets/Wraps.png",
      id: 1,
    },
    {
      title: "Signs",
      description: "Unique sign designs tailored to your preferences.",
      image: "./src/components/assets/Signs.png",
      id: 2,
    },
    {
      title: "Prints",
      description: "Personalized readings based on your birth chart.",
      image: "./src/components/assets/Prints.png",
      id: 3,
    },
    {
      title: "Business Cards",
      description: "Custom vinyl lettering for your signs.",
      image: "./src/components/assets/BusinessCards.png",
      id: 4,
    },
    {
      title: "Printed Banners",
      description: "Pavement signs to attract attention.",
      image: "./src/components/assets/PrintedBanners.png",
      id: 5,
    },
  ],
};
