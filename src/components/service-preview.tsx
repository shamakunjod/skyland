import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServicePreviewProps = {
  title: string;
  description: string;
  href: string;
  action: string;
  icon: LucideIcon;
  muted?: boolean;
};

export function ServicePreview({ title, description, href, action, icon: Icon, muted = false }: ServicePreviewProps) {
  return (
    <section className={muted ? "bg-[#f8faf8] py-16 sm:py-24" : "py-16 sm:py-24"}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-8 rounded-3xl bg-teal-950 p-7 shadow-sm sm:p-10 md:grid-cols-[auto_1fr_auto] md:gap-10">
          <span className="flex size-16 items-center justify-center rounded-2xl bg-emerald-400 text-teal-950"><Icon size={30} /></span>
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-emerald-300"><Clock3 size={16} />Próximamente</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/75">{description}</p>
          </div>
          <Link className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-white px-6 font-bold text-teal-950 transition hover:bg-emerald-100" href={href}>
            {action}<ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
