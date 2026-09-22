"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/vuelos", label: "Vuelos" },
  { href: "/hoteles", label: "Hoteles" },
  { href: "/tours", label: "Tours" },
  { href: "/experiencias", label: "Experiencias" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return <header className="absolute inset-x-0 top-0 z-20"><nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8" aria-label="Navegación principal">
    <Link className="text-2xl font-bold tracking-tight text-white" href="/">Sky<span className="text-emerald-300">land</span></Link>
    <div className="hidden items-center gap-8 md:flex">{links.map((link) => <Link className={`text-sm font-medium transition hover:text-emerald-200 ${pathname === link.href ? "text-emerald-300" : "text-white/90"}`} href={link.href} key={link.href}>{link.label}</Link>)}<a className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-teal-950 transition hover:bg-emerald-50" href="#explorar">Iniciar sesión</a></div>
    <button className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-white transition hover:bg-white/15 md:hidden" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </nav>{open && <div className="mx-5 rounded-2xl bg-white p-4 shadow-xl md:hidden"><div className="flex flex-col gap-1">{links.map((link) => <Link className={`rounded-xl px-4 py-3 font-medium transition hover:bg-emerald-50 ${pathname === link.href ? "bg-emerald-50 text-teal-950" : "text-teal-950"}`} href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<a className="mt-2 rounded-xl bg-teal-900 px-4 py-3 text-center font-semibold text-white" href="#explorar">Iniciar sesión</a></div></div>}</header>;
}
