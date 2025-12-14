import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Committees | Amanat-E-Nazirpara",
  description: "View the complete history of our committees",
};

export default function CommitteesPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Committee History
        </h1>
        <p className="text-center text-gray-600">
          Coming soon - View complete committee history in vertical timeline
        </p>
      </div>
    </main>
  );
}
