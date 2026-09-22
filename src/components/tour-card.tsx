import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Star } from "lucide-react";
import type { Tour } from "@/data/tours";

const currency = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

export function TourCard({ tour }: { tour: Tour }) {
  return <Link className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600" href={`/tours/${tour.slug}`} aria-label={`Ver detalle de ${tour.title}`}><article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-teal-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/10"><div className="relative aspect-[4/3] overflow-hidden"><Image className="object-cover transition duration-500 group-hover:scale-105" src={tour.image} alt={tour.title} fill sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 31vw" /><span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-teal-900 backdrop-blur">{tour.category}</span><span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-teal-950/85 px-2.5 py-1 text-xs font-bold text-white"><Star className="fill-amber-400 text-amber-400" size={13} />{tour.rating}</span></div><div className="p-5"><p className="flex items-center gap-1.5 text-sm text-slate-500"><MapPin size={15} className="text-emerald-600" />{tour.location}</p><h3 className="mt-2 line-clamp-2 text-lg font-bold leading-6 text-teal-950">{tour.title}</h3><div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-4"><span className="inline-flex items-center gap-1.5 text-sm text-slate-500"><Clock3 size={15} />{tour.duration}</span><p className="text-right text-sm text-slate-500">desde <span className="block font-bold text-teal-950">{currency.format(tour.price)}</span></p></div></div></article></Link>;
}
