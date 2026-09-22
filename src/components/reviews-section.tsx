import { Star } from "lucide-react";
import { ReviewCard } from "@/components/review-card";
import { ReviewForm } from "@/components/review-form";
import { reviews } from "@/data/reviews";
import type { Tour } from "@/data/tours";

export function ReviewsSection({ tour }: { tour: Tour }) {
  const tourReviews = reviews.filter((review) => review.tourId === tour.id);

  return <section className="mt-10 border-t border-slate-200 pt-8" aria-labelledby="reviews-title"><div className="flex flex-wrap items-end justify-between gap-4"><div><h2 id="reviews-title" className="text-xl font-bold text-teal-950">Reseñas</h2><p className="mt-2 text-sm text-slate-600">Opiniones de viajeros que vivieron esta experiencia.</p></div><div className="rounded-2xl bg-emerald-50 px-4 py-3 text-right"><p className="flex items-center justify-end gap-1.5 text-xl font-bold text-teal-950"><Star className="fill-amber-400 text-amber-400" size={20} aria-hidden="true" />{tour.rating}</p><p className="text-sm text-emerald-800">{tour.reviews} reseñas</p></div></div><div className="mt-6 grid gap-4 sm:grid-cols-2">{tourReviews.map((review) => <ReviewCard key={review.id} review={review} />)}</div><ReviewForm /></section>;
}
