import PlaceholderImage from "stories/assets/frota-tunel.jpg";

const products = [
  {
    id: 1,
    title: "Monitoramento de frotas",
    slang: "monitoramento-de-frotas",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 2,
    title: "Relatórios completos",
    slang: "relatorios-completos",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 3,
    title: "Controle de rotas, paradas e abastecimentos",
    slang: "controle-de-rotas",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 4,
    title: "Controle de checklists por veículo",
    slang: "controle-de-checklists",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 5,
    title: "Cronograma de manutenção",
    slang: "cronograma-de-manutenção",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
];

export const useProducts = () => {
  return products;
};

export const useProduct = ({ slang }) => {
  return products.find((p) => p.slang === slang);
};
