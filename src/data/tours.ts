export type CategoryName = "Naturaleza" | "Aventura" | "Playa" | "Cultura" | "Gastronomía";

export type Tour = {
  id: string;
  slug: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  duration: string;
  price: number;
  category: CategoryName;
  image: string;
};

export const categories: { name: CategoryName; description: string }[] = [
  { name: "Naturaleza", description: "Paisajes que inspiran" },
  { name: "Aventura", description: "Adrenalina al aire libre" },
  { name: "Playa", description: "Mar, sol y calma" },
  { name: "Cultura", description: "Historias para descubrir" },
  { name: "Gastronomía", description: "Sabores locales" },
];

export const featuredTours: Tour[] = [
  { id: "minca", slug: "aventura-entre-cascadas-en-minca", title: "Aventura entre cascadas en Minca", location: "Minca, Santa Marta", rating: 4.9, reviews: 128, duration: "8 horas", price: 185000, category: "Aventura", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85" },
  { id: "tayrona", slug: "excursion-al-parque-tayrona", title: "Excursión al Parque Tayrona", location: "Santa Marta, Magdalena", rating: 4.8, reviews: 214, duration: "Día completo", price: 220000, category: "Naturaleza", image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85" },
  { id: "cristal", slug: "navega-hasta-playa-cristal", title: "Navega hasta Playa Cristal", location: "Parque Tayrona", rating: 4.9, reviews: 89, duration: "7 horas", price: 195000, category: "Playa", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85" },
  { id: "cartagena", slug: "secretos-del-centro-historico", title: "Secretos del Centro Histórico", location: "Cartagena, Bolívar", rating: 4.7, reviews: 167, duration: "3 horas", price: 95000, category: "Cultura", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85" },
  { id: "taganga", slug: "atardecer-en-velero-por-taganga", title: "Atardecer en velero por Taganga", location: "Taganga, Santa Marta", rating: 4.8, reviews: 76, duration: "2.5 horas", price: 145000, category: "Playa", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85" },
  { id: "sabores", slug: "sabores-autenticos-del-caribe", title: "Sabores auténticos del Caribe", location: "Santa Marta, Magdalena", rating: 4.9, reviews: 103, duration: "4 horas", price: 135000, category: "Gastronomía", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85" },
];
