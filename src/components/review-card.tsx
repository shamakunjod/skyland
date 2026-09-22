import { Star } from "lucide-react";
import type { Review } from "@/data/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-teal-950/5"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-teal-950">{review.author}</h3><p className="mt-1 text-sm text-slate-500">{review.date}</p></div><p className="inline-flex shrink-0 items-center gap-1 text-sm font-bold text-teal-950" aria-label={`Calificación: ${review.rating} de 5 estrellas`}><span aria-hidden="true" className="flex gap-0.5">{Array.from({ length: 5 }, (_, index) => <Star key={index} className={index < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"} size={15} />)}</span><span>{review.rating}.0</span></p></div><p className="mt-4 leading-6 text-slate-600">{review.comment}</p></article>;
}
