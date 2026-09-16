import { navigation } from "@/data/navigation";

// Arriba solo va lo que lleva a comprar: Inicio y Tienda.
// El resto (Academia, Comunidad, Podcast, Blog) vive en el footer,
// para que el navbar principal no le quite foco a la venta.
const PRIMARY_LINKS = ["Inicio", "Tienda"];

export const primaryNavigation = navigation.filter((item) =>
  PRIMARY_LINKS.includes(item.name)
);

export const secondaryNavigation = navigation.filter(
  (item) => !PRIMARY_LINKS.includes(item.name)
);