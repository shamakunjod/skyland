"use client";

import { useState } from "react";
import { Star } from "lucide-react";

const mockUser = { name: "Juan" };
const maxCommentLength = 500;

export function ReviewForm() {
  const [isAuthenticatedPreview, setIsAuthenticatedPreview] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isValid = rating > 0 && comment.trim().length > 0;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValid) return;

    setIsSubmitted(true);
  }

  function handlePreviewChange(isAuthenticated: boolean) {
    setIsAuthenticatedPreview(isAuthenticated);
    setIsSubmitted(false);
  }

  return <div className="mt-6"><div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-dashed border-emerald-300 bg-emerald-50 px-3 py-2"><p className="text-xs font-semibold text-emerald-900">Desarrollo · vista previa de sesión</p><div className="flex rounded-lg bg-white p-0.5 shadow-sm"><button className={`rounded-md px-3 py-1 text-xs font-semibold transition ${!isAuthenticatedPreview ? "bg-teal-950 text-white" : "text-teal-900 hover:bg-emerald-50"}`} type="button" aria-pressed={!isAuthenticatedPreview} onClick={() => handlePreviewChange(false)}>Ver como visitante</button><button className={`rounded-md px-3 py-1 text-xs font-semibold transition ${isAuthenticatedPreview ? "bg-teal-950 text-white" : "text-teal-900 hover:bg-emerald-50"}`} type="button" aria-pressed={isAuthenticatedPreview} onClick={() => handlePreviewChange(true)}>Ver como usuario</button></div></div>{isAuthenticatedPreview ? <form className="rounded-2xl bg-teal-950 px-5 py-6 sm:px-6" onSubmit={handleSubmit}><h3 className="text-lg font-bold text-white">Comparte tu experiencia</h3>{isSubmitted ? <div className="mt-4 rounded-xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-950" role="status">¡Gracias por compartir tu experiencia!</div> : <><p className="mt-2 text-sm text-emerald-100">Escribes como <span className="font-bold text-white">{mockUser.name}</span></p><fieldset className="mt-5"><legend className="font-semibold text-white">¿Cómo calificarías este tour?</legend><p className="mt-1 text-sm text-emerald-100" aria-live="polite">{rating ? `Calificación seleccionada: ${rating} de 5 estrellas` : "Aún no has seleccionado una calificación."}</p><div className="mt-3 flex gap-1" role="group" aria-label="Selecciona una calificación de 1 a 5 estrellas">{Array.from({ length: 5 }, (_, index) => { const value = index + 1; return <button key={value} className="rounded-md p-1 text-white transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200" type="button" aria-label={`${value} ${value === 1 ? "estrella" : "estrellas"}`} aria-pressed={rating === value} onClick={() => setRating(value)}><Star className={value <= rating ? "fill-amber-400 text-amber-400" : "text-white"} size={28} aria-hidden="true" /></button>; })}</div></fieldset><div className="mt-5"><label className="font-semibold text-white" htmlFor="review-comment">Cuéntanos sobre tu experiencia</label><textarea className="mt-2 min-h-28 w-full resize-y rounded-xl border border-white/20 bg-white px-3 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300" id="review-comment" value={comment} maxLength={maxCommentLength} onChange={(event) => setComment(event.target.value)} placeholder="¿Qué fue lo que más disfrutaste?" /><p className="mt-2 text-right text-sm text-emerald-100" aria-live="polite">{comment.length} / {maxCommentLength}</p></div><button className="mt-4 min-h-11 rounded-full bg-white px-5 text-sm font-semibold text-teal-950 transition hover:bg-emerald-50 disabled:cursor-not-allowed disabled:bg-white/50 disabled:text-teal-950/60" type="submit" disabled={!isValid}>Publicar reseña</button></>}</form> : <div className="rounded-2xl bg-teal-950 px-5 py-6 sm:flex sm:items-center sm:justify-between sm:gap-6"><div><h3 className="font-bold text-white">¿Viviste esta experiencia?</h3><p className="mt-1 text-sm text-emerald-100">Comparte tu opinión con otros viajeros.</p></div><button className="mt-4 min-h-11 rounded-full bg-white px-5 text-sm font-semibold text-teal-950 transition hover:bg-emerald-50 sm:mt-0" type="button" aria-label="Continuar con Google para compartir una opinión (próximamente)">Continuar con Google</button></div>}</div>;
}
