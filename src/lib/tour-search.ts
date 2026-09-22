import type { Tour } from "@/data/tours";

export function normalizeSearchText(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
}

export function filterTours(tours: Tour[], query: string) {
  const terms = normalizeSearchText(query).trim().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return tours;

  return tours.filter((tour) => {
    const searchableContent = normalizeSearchText([tour.title, tour.location, tour.category, tour.slug, tour.id].join(" "));
    return terms.every((term) => searchableContent.includes(term));
  });
}
