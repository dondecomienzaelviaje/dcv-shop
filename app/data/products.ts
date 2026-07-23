export type Product = {
    id: number;
    title: string;
    price: string;
    image: string;
    category: string;
  };
  
  export const products: Product[] = [
    {
      id: 1,
      title: "Hábitos Atómicos",
      price: "$89.900",
      image: "/products/habitos-atomicos.png",
      category: "Libros",
    },
    {
      id: 2,
      title: "Agenda DCV 2027",
      price: "$59.900",
      image: "/products/agenda-dcv.png",
      category: "Accesorios",
    },
    {
      id: 3,
      title: "Mug Modo Disciplina",
      price: "$39.900",
      image: "/products/taza-disciplina.png",
      category: "Accesorios",
    },
    {
      id: 4,
      title: "Kit Productividad",
      price: "$129.900",
      image: "/products/kit-productividad.png",
      category: "Academia",
    },
    {
      id: 5,
      title: "Diario de Gratitud",
      price: "$49.900",
      image: "/products/agenda-dcv.png",
      category: "Accesorios",
    },
    {
      id: 6,
      title: "Termo DCV",
      price: "$79.900",
      image: "/products/taza-disciplina.png",
      category: "Accesorios",
    },
    {
      id: 7,
      title: "Cuaderno Premium",
      price: "$54.900",
      image: "/products/agenda-dcv.png",
      category: "Accesorios",
    },
    {
      id: 8,
      title: "Pack Mentalidad",
      price: "$149.900",
      image: "/products/habitos-atomicos.png",
      category: "Libros",
    },
  ];