import { Benefits } from "@/components/benefits";
import { Categories } from "@/components/categories";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { FeaturedTours } from "@/components/featured-tours";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Promotion } from "@/components/promotion";
import { ServicePreview } from "@/components/service-preview";
import { Hotel, Plane, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <ServicePreview title="Vuelos" description="Estamos preparando la integración para que puedas planear tus próximos vuelos desde Skyland." href="/vuelos" action="Conocer vuelos" icon={Plane} />
      <ServicePreview title="Hoteles" description="Pronto podrás descubrir opciones de hospedaje para complementar cada viaje." href="/hoteles" action="Conocer hoteles" icon={Hotel} muted />
      <FeaturedTours />
      <Categories />
      <ServicePreview title="Experiencias" description="Estamos preparando nuevas formas de descubrir y disfrutar cada destino con Skyland." href="/experiencias" action="Conocer experiencias" icon={Sparkles} muted />
      <Promotion />
      <Benefits />
      <Cta />
      <Footer />
    </main>
  );
}
