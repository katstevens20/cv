export interface Service {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  price: string;
  priceAr: string;
  duration: string;
  durationAr: string;
  category: string;
  featured?: boolean;
  icon: string;
  image?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  nameAr: string;
  services: Service[];
}