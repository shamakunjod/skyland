"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, MapPin, Search, Users } from "lucide-react";

const secondaryFields = [
  { label: "Fecha", value: "Añade fechas", icon: CalendarDays },
  { label: "Viajeros", value: "¿Cuántas personas?", icon: Users },
];

export function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedQuery = query.trim();
    router.push(trimmedQuery ? `/buscar?q=${encodeURIComponent(trimmedQuery)}` : "/tours");
  }

  return (
    <form className="mx-auto mt-8 grid max-w-5xl gap-2 rounded-2xl bg-white p-2 shadow-2xl shadow-black/20 md:grid-cols-[1.25fr_1fr_1fr_auto] md:rounded-full" onSubmit={handleSubmit}>
      <label className="flex min-h-16 items-center gap-3 rounded-xl px-4 transition hover:bg-emerald-50 md:border-r md:border-slate-100">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700"><MapPin size={19} /></span>
        <span className="min-w-0 flex-1">
          <span className="block text-xs font-semibold text-slate-900">¿Dónde quieres ir?</span>
          <input className="block w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-500" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Playa, Minca, Tayrona..." aria-label="Buscar destino o experiencia" />
        </span>
      </label>
      {secondaryFields.map(({ label, value, icon: Icon }) => (
        <button className="flex min-h-16 items-center gap-3 rounded-xl px-4 text-left transition hover:bg-emerald-50 md:border-r md:border-slate-100" type="button" key={label}>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700"><Icon size={19} /></span>
          <span><span className="block text-xs font-semibold text-slate-900">{label}</span><span className="block text-sm text-slate-500">{value}</span></span>
        </button>
      ))}
      <button className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 font-bold text-teal-950 transition hover:bg-emerald-400 md:rounded-full" type="submit"><Search size={19} />Buscar</button>
    </form>
  );
}
