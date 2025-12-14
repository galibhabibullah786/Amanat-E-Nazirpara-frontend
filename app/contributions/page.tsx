import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contributions | Amanat-E-Nazirpara",
  description: "View transparent records of all community contributions",
};

export default function ContributionsPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Transparency Ledger
        </h1>
        <p className="text-center text-gray-600">
          Coming soon - View all contributions and donation records
        </p>
      </div>
    </main>
  );
}
