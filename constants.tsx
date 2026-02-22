import { MenuItem, MenuCategory } from "./types";

export const MENU_DATA: MenuItem[] = [
  {
    id: "1",
    name: "Asperges Blanches de Loire",
    description: "Mousseline légère au citron vert et caviar de Sologne.",
    price: "32€",
    category: MenuCategory.STARTERS,
  },
  {
    id: "2",
    name: "Carpaccio de Saint-Jacques",
    description: "Huile de truffe blanche et noisettes torréfiées du Piémont.",
    price: "38€",
    category: MenuCategory.STARTERS,
  },
  {
    id: "3",
    name: "Asperges Blanches de Loire",
    description: "Mousseline légère au citron vert et caviar de Sologne.",
    price: "32€",
    category: MenuCategory.STARTERS,
  },
  {
    id: "4",
    name: "Carpaccio de Saint-Jacques",
    description: "Huile de truffe blanche et noisettes torréfiées du Piémont.",
    price: "38€",
    category: MenuCategory.STARTERS,
  },
  {
    id: "5",
    name: "Turbot de Ligne",
    description:
      "Rôti sur l'arête, beurre noisette et poireaux crayons fondants.",
    price: "58€",
    category: MenuCategory.MAINS,
  },
  {
    id: "6",
    name: "Filet de Bœuf Wagyu",
    description:
      "Jus corsé au poivre fumé et mousseline de rattes à la truffe.",
    price: "72€",
    category: MenuCategory.MAINS,
  },
  {
    id: "7",
    name: "Soufflé au Chocolat Noir",
    description: "70% d'origine Équateur, cœur coulant et sorbet cacao.",
    price: "24€",
    category: MenuCategory.DESSERTS,
  },
  {
    id: "8",
    name: "Dôme Citron & Basilic",
    description: "Sablé breton, crème légère au yuzu et meringue craquante.",
    price: "22€",
    category: MenuCategory.DESSERTS,
  },
];
