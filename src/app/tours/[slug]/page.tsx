import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, MapPin, Star } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ReviewsSection } from "@/components/reviews-section";
import { featuredTours } from "@/data/tours";

const currency = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

export function generateStaticParams() {
  return featuredTours.map(({ slug }) => ({ slug }));
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = featuredTours.find((item) => item.slug === slug);

  if (!tour) notFound();

  return <main className="min-h-screen overflow-hidden"><Navbar /><section className="bg-teal-950 pb-12 pt-28 sm:pt-36"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Link className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-white" href="/tours"><ArrowLeft size={17} />Volver a tours</Link></div></section><section className="pb-36 sm:pb-40 lg:pb-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="-mt-4 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(20rem,0.8fr)] lg:gap-12"><div><div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-teal-950 shadow-xl shadow-teal-950/10"><Image className="object-cover" src={tour.image} alt={tour.title} fill priority sizes="(max-width: 1024px) 100vw, 60vw" /></div><div className="mt-8"><div className="flex flex-wrap items-center gap-3"><span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700">{tour.category}</span><span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600"><Star className="fill-amber-400 text-amber-400" size={17} />{tour.rating} ({tour.reviews} reseñas)</span></div><h1 className="mt-4 text-3xl font-bold tracking-tight text-teal-950 sm:text-5xl">{tour.title}</h1><p className="mt-4 flex items-center gap-2 text-slate-600"><MapPin size={18} className="text-emerald-600" />{tour.location}</p><div className="mt-8 border-y border-slate-200 py-6"><h2 className="text-xl font-bold text-teal-950">Descripción</h2><p className="mt-3 leading-7 text-slate-600">Próximamente encontrarás más información sobre esta experiencia.</p></div><div className="mt-8"><h2 className="text-xl font-bold text-teal-950">Lo que incluye</h2><p className="mt-3 leading-7 text-slate-600">Estamos preparando los detalles de lo que incluye este tour.</p></div><ReviewsSection tour={tour} /></div></div><aside className="hidden lg:block lg:pt-2"><div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-teal-950/5 sm:p-8 lg:sticky lg:top-6"><p className="inline-flex items-center gap-2 text-sm text-slate-600"><Clock3 size={17} className="text-emerald-600" />{tour.duration}</p><p className="mt-6 text-sm text-slate-500">desde</p><p className="text-3xl font-bold tracking-tight text-teal-950">{currency.format(tour.price)}</p><button className="mt-6 min-h-12 w-full rounded-full bg-teal-900 px-6 font-semibold text-white transition hover:bg-teal-800" type="button">Reservar</button><p className="mt-3 text-center text-xs text-slate-500">La reserva estará disponible próximamente.</p></div></aside></div></div></section><div className="fixed inset-x-0 bottom-0 z-30 border-t border-teal-950/10 bg-white/95 px-5 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4 shadow-[0_-8px_24px_rgba(16,42,43,0.1)] backdrop-blur lg:hidden"><div className="mx-auto flex max-w-7xl items-center gap-4"><div className="min-w-0"><p className="text-xs text-slate-500">desde</p><p className="truncate text-lg font-bold tracking-tight text-teal-950">{currency.format(tour.price)}</p></div><button className="min-h-12 flex-1 rounded-full bg-teal-900 px-5 font-semibold text-white transition hover:bg-teal-800" type="button">Reservar</button></div></div><Footer /></main>;
}
