import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TourCard } from "@/components/tour-card";
import { featuredTours } from "@/data/tours";

export default function ToursPage() {
  return <main className="min-h-screen overflow-hidden"><Navbar /><section className="bg-teal-950 pb-16 pt-32 sm:pb-20 sm:pt-40"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Explora Skyland</p><h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">Tours y recorridos increíbles</h1><p className="mt-5 max-w-2xl text-lg leading-7 text-white/80">Encuentra experiencias seleccionadas para descubrir Colombia a tu manera.</p></div></section><section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{featuredTours.map((tour) => <TourCard key={tour.id} tour={tour} />)}</div></div></section><Footer /></main>;
}
