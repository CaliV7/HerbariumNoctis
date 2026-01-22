export interface Plant {
  id: number;
  name: string;
  latinName: string;
  image: string;

  origins: string[]; // Créole, Africaine, Asiatique, etc.

  virtues: string[];
  uses: string[];

  quote: string;

  symbolism: string[];

  externalLink?: {
    label: string;
    url: string;
  };
}

