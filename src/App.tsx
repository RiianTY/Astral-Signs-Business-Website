import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import GalleryPage from "@/pages/gallery";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<GalleryPage />} path="/gallery" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
