export enum MenuCategory {
  STARTERS = "Starters",
  MAINS = "Mains",
  DESSERTS = "Desserts",
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
}
