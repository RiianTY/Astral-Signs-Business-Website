import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import Gallery from "./../components/gallery";

export default function GalleryPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Gallery</h1>
        </div>
      </section>
      <Gallery />
    </DefaultLayout>
  );
}
