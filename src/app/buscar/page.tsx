import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TourCard } from "@/components/tour-card";
import { featuredTours } from "@/data/tours";
import { filterTours } from "@/lib/tour-search";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const { q } = await searchParams;
  const query = (Array.isArray(q) ? q[0] : q)?.trim() ?? "";
  const tours = filterTours(featuredTours, query);
  const hasQuery = query.length > 0;

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <section className="bg-teal-950 pb-16 pt-32 sm:pb-20 sm:pt-40"><div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Explora Skyland</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">{hasQuery ? <>Resultados para &quot;{query}&quot;</> : "Todas las experiencias"}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-7 text-white/80">{hasQuery ? "Encuentra experiencias seleccionadas para tu próxima aventura." : "Explora todos los tours disponibles en Skyland."}</p>
      </div></section>
      <section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8">
        {tours.length > 0 ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{tours.map((tour) => <TourCard key={tour.id} tour={tour} />)}</div> : (
          <div className="mx-auto max-w-2xl rounded-3xl bg-emerald-50 px-6 py-14 text-center sm:px-10">
            <Compass className="mx-auto text-emerald-600" size={34} />
            <h2 className="mt-5 text-2xl font-bold text-teal-950">No encontramos experiencias para &quot;{query}&quot;.</h2>
            <p className="mt-3 text-slate-600">Prueba con otro destino, categoría o tipo de experiencia.</p>
            <Link className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-bold text-teal-950 transition hover:bg-emerald-400" href="/tours"><ArrowLeft size={18} />Explorar todos los tours</Link>
          </div>
        )}
      </div></section>
      <Footer />
    </main>
  );
}
