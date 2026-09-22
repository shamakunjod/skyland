import { Clock3 } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

type ServicePageProps = { title: string; description: string; notice: string };

export function ServicePage({ title, description, notice }: ServicePageProps) {
  return <main className="flex min-h-screen flex-col overflow-hidden"><Navbar /><section className="relative isolate overflow-hidden bg-teal-950 pb-20 pt-32 sm:pb-28 sm:pt-40"><div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-950" /><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-3xl"><p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100 backdrop-blur"><Clock3 size={16} /> Próximamente en Skyland</p><h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{description}</p></div><div className="mt-10 max-w-2xl rounded-3xl border border-emerald-100/15 bg-white/10 p-6 backdrop-blur sm:p-8"><p className="text-sm font-semibold text-emerald-200">Estamos preparando esta sección</p><p className="mt-2 leading-7 text-white/80">{notice}</p></div></div></section><div className="flex-1" /><Footer /></main>;
}
