import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Amanat-E-Nazirpara",
  description: "View photos of our journey from foundation to completion",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Photo Gallery
        </h1>
        <p className="text-center text-gray-600">
          Coming soon - View our complete photo gallery
        </p>
      </div>
    </main>
  );
}
