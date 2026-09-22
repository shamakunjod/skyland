export type Review = {
  id: string;
  tourId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
};

export const reviews: Review[] = [
  { id: "minca-1", tourId: "minca", author: "Valentina R.", rating: 5, comment: "Un día muy bien aprovechado. Los paisajes y las cascadas hicieron que cada parada valiera la pena.", date: "Hace 2 semanas" },
  { id: "minca-2", tourId: "minca", author: "Mateo G.", rating: 5, comment: "La experiencia fue tranquila, cercana a la naturaleza y con tiempo suficiente para disfrutar.", date: "Hace 1 mes" },
  { id: "minca-3", tourId: "minca", author: "Sofía P.", rating: 4, comment: "Me encantó el recorrido. Recomendaría llevar zapatos cómodos para caminar entre las paradas.", date: "Hace 2 meses" },
  { id: "tayrona-1", tourId: "tayrona", author: "Camila S.", rating: 5, comment: "Una forma preciosa de conocer el parque. El paisaje durante el recorrido es inolvidable.", date: "Hace 3 semanas" },
  { id: "tayrona-2", tourId: "tayrona", author: "Daniel A.", rating: 5, comment: "Todo estuvo muy bien organizado y pude disfrutar el día sin afanes.", date: "Hace 1 mes" },
  { id: "tayrona-3", tourId: "tayrona", author: "Laura M.", rating: 4, comment: "Una experiencia para desconectarse y pasar tiempo frente al mar.", date: "Hace 2 meses" },
  { id: "cristal-1", tourId: "cristal", author: "Nicolás V.", rating: 5, comment: "El agua y los colores de Playa Cristal son todavía más bonitos en persona.", date: "Hace 2 semanas" },
  { id: "cristal-2", tourId: "cristal", author: "Mariana C.", rating: 5, comment: "Un plan perfecto para ir con amigos y disfrutar del mar con calma.", date: "Hace 1 mes" },
  { id: "cristal-3", tourId: "cristal", author: "Andrés F.", rating: 5, comment: "El trayecto en lancha fue una de mis partes favoritas del día.", date: "Hace 3 meses" },
  { id: "cartagena-1", tourId: "cartagena", author: "Juliana T.", rating: 5, comment: "Descubrí detalles del centro que no habría notado caminando por mi cuenta.", date: "Hace 2 semanas" },
  { id: "cartagena-2", tourId: "cartagena", author: "Samuel B.", rating: 4, comment: "Un recorrido ameno y lleno de historias para entender mejor la ciudad.", date: "Hace 1 mes" },
  { id: "cartagena-3", tourId: "cartagena", author: "Paula L.", rating: 5, comment: "La duración fue ideal para conocer mucho sin terminar agotados.", date: "Hace 2 meses" },
  { id: "taganga-1", tourId: "taganga", author: "Isabela N.", rating: 5, comment: "Ver cómo cambiaba el cielo desde el velero fue una experiencia muy especial.", date: "Hace 3 semanas" },
  { id: "taganga-2", tourId: "taganga", author: "Tomás E.", rating: 5, comment: "Un plan relajado para cerrar el día y disfrutar de la vista.", date: "Hace 1 mes" },
  { id: "taganga-3", tourId: "taganga", author: "Elena D.", rating: 4, comment: "Muy bonito y con un ambiente tranquilo. Volvería para ver otro atardecer.", date: "Hace 2 meses" },
  { id: "sabores-1", tourId: "sabores", author: "Gabriel H.", rating: 5, comment: "Probé sabores nuevos y cada parada tuvo algo distinto para descubrir.", date: "Hace 2 semanas" },
  { id: "sabores-2", tourId: "sabores", author: "Natalia J.", rating: 5, comment: "Una experiencia cálida y deliciosa para quienes quieren conocer la cocina local.", date: "Hace 1 mes" },
  { id: "sabores-3", tourId: "sabores", author: "Felipe O.", rating: 5, comment: "El ritmo del tour permitió disfrutar cada momento sin sentirse apresurado.", date: "Hace 3 meses" },
];
