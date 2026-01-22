import { Plant } from '../types/plant';

export const PLANTS: Plant[] = [
  {
    id: 1,
    name: 'Hibiscus',
    latinName: 'Hibiscus sabdariffa',
    image: 'assets/images/hibiscus.png',
    origins: ['Créole', 'Africaine', 'Asiatique'],
    quote: 'La fleur qui éclaire la nuit par ses rubis sacrés.',
    virtues: [
      'Équilibre hormonal',
      'Beauté de la peau & cheveux',
      'Antioxydant naturel',
      'Soutien cardiovasculaire',
    ],
    uses: [
      'Infusion "Bissap" revigorante',
      'Soin capillaire fortifiant',
      'Colorant rituel et décoratif',
      'Décoction digestive'
    ],
    symbolism: [
      'Fleur-talisman des peuples caribéens : gardienne de la lignée et protectrice du foyer.',
      'L\'Hibiscus accompagne initiations, rites de passage et processions, symbolisant circulation du sang, vitalité et prospérité.',
      'L\'Hibiscus est un symbole de la vieillesse, de la sagesse et de la beauté.',
      'On offre souvent l’Hibiscus en gage d’amitié et de bienvenue, geste de partage dans de nombreuses cultures.'
    ],
    externalLink: {
      label: 'Pour + d\'infos consultez l\'article Wikipédia',
      url: 'https://fr.wikipedia.org/wiki/Hibiscus_sabdariffa'
    }
  },
  {
    id: 2,
    name: 'Moringa',
    latinName: 'Moringa oleifera',
    image: 'assets/images/moringa.png',
    origins: ['Africaine', 'Asiatique'],
    quote: 'L’arbre qui nourrit, soigne et protège.',
    virtues: [
      'Renforce le système immunitaire',
      'Riche en vitamines et minéraux',
      'Énergie naturelle',
      'Soutien digestif'
    ],
    uses: [
      'Poudre nutritionnelle',
      'Infusion de feuilles',
      'Huile cosmétique',
      'Complément alimentaire naturel'
    ],
    symbolism: [
      'Le Moringa, arbre ancien d’Afrique et d’Asie, éclaire la terre d’une vie abondante, apportant force et régénération à ceux qui le côtoient.',
      'Dans les sagesses africaines et asiatiques, il symbolise la résilience, la transmission de la connaissance et la guérison de la communauté.',
      'Il incarne la force tranquille de la terre et le passage des savoirs, arbre vénéré pour son pouvoir nourricier et protecteur.'
    ],
    externalLink: {
      label: 'Pour + d\'infos consultez l\'article Wikipédia',
      url: 'https://fr.wikipedia.org/wiki/Moringa_oleifera'
    }
  },
  {
    id: 3,
    name: 'Curcuma',
    latinName: 'Curcuma longa',
    image: 'assets/images/curcuma.png',
    origins: ['Asiatique', 'Africaine'],
    quote: 'La racine solaire qui purifie le corps et l’âme.',
    virtues: [
      'Anti-inflammatoire puissant',
      'Améliore la digestion',
      'Éclat de la peau',
      'Soutien du foie'
    ],
    uses: [
      'Masques visage',
      'Infusions',
      'Cuisine médicinale',
      'Rituels de purification'
    ],
    symbolism: [
      'Racine sacrée au cœur d’Asie et d’Afrique, le Curcuma relie le monde visible à celui de la lumière, purifiant l’être entier.',
      'Il accompagne les cérémonies, rites et unions, portant la force solaire, la clarté, la prospérité et la protection à ceux qui espèrent.',
      'La poudre dorée du Curcuma symbolise l’énergie, l’héritage familial, la purification des générations et la lumière du renouveau.'
    ],
    externalLink: {
      label: 'Pour + d\'infos consultez l\'article Wikipédia',
      url: 'https://fr.wikipedia.org/wiki/Curcuma_longa'
    }
  },
  {
    id: 4,
    name: 'Neem',
    latinName: 'Azadirachta indica',
    image: 'assets/images/neem.png',
    origins: ['Asiatique', 'Africaine'],
    quote: 'L’arbre sacré aux mille vertus.',
    virtues: [
      'Purifie le sang',
      'Antibactérien naturel',
      'Renforce l’immunité',
      'Améliore la santé de la peau'
    ],
    uses: [
      'Décoction médicinale',
      'Soin de la peau',
      'Hygiène bucco-dentaire traditionnelle',
      'Protection naturelle'
    ],
    symbolism: [
      'Le Neem, arbre sacré d’Inde et d’Afrique, veille en silence sur les foyers, porteur de guérison, de longévité et de pureté.',
      'Son feuillage repousse le mal et accompagne chaque passage, symbolisant la santé, la régénération et la victoire des forces lumineuses.',
      'Sacré pour ses usages ancestraux, le Neem incarne la barrière contre le négatif, la préservation du vivant et le cycle protégé.'
    ],
    externalLink: {
      label: 'Pour + d\'infos consultez l\'article Wikipédia',
      url: 'https://fr.wikipedia.org/wiki/Azadirachta_indica'
    }
  },
  {
    id: 5,
    name: 'Citronnelle',
    latinName: 'Cymbopogon citratus',
    image: 'assets/images/citronnelle.png',
    origins: ['Créole', 'Asiatique'],
    quote: 'L’herbe qui rafraîchit l’esprit et libère la respiration.',
    virtues: [
      'Aide à la digestion',
      'Effet relaxant',
      'Soulagement lors des refroidissements',
      'Soutien respiratoire'
    ],
    uses: [
      'Infusion digestive après repas',
      'Tisane pour calmer la toux',
      'Infusion pour apaiser le rhume',
      'Plantes repoussoir naturel pour insectes'
    ],
    symbolism: [
      'La citronnelle incarne la clarté et la purification, traditionnellement utilisée pour éloigner les énergies négatives et assainir les intérieurs.',
      'Dans les cultures créoles et asiatiques, elle protège le foyer, favorise la légèreté de l’esprit et sert de barrière naturelle contre les influences indésirables.',
      'Son parfum frais est aussi symbole de renouveau et d’équilibre au quotidien, et accompagne parfois des rituels pour attirer la paix et la fraîcheur.'
    ],
    externalLink: {
      label: 'Pour + d’infos consultez l’article Wikipédia',
      url: 'https://fr.wikipedia.org/wiki/Cymbopogon_citratus'
    }
  },
  {
    id: 6,
    name: 'Menthe',
    latinName: 'Mentha spp.',
    image: 'assets/images/menthe.png',
    origins: ['Créole', 'Africaine', 'Asiatique'],
    quote: 'La feuille fraîche qui apaise et éveille les sens.',
    virtues: [
      'Stimule la digestion',
      'Aide à dégager les voies respiratoires',
      'Effet rafraîchissant',
      'Soulagement des maux légers de tête'
    ],
    uses: [
      'Infusion après repas',
      'Inhalation vapeur',
      'Aromatise les boissons et les salades',
      'Compresses à la peau'
    ],
    symbolism: [
      'Symbole universel de fraîcheur, de renouveau et de purification, la menthe protège et dynamise le corps comme l’esprit.',
      'Considérée comme porte-bonheur et signe de bienvenue, elle accompagne souvent les rituels d’hospitalité ou de guérison dans de nombreuses traditions.',
      'Sa vitalité illustre la résilience : la plante s’étend durablement, et apporte rapidement apaisement et vigueur à ceux qui la consomment ou la cultivent.'
    ],
    externalLink: {
      label: 'Pour + d’infos consultez l’article Wikipédia',
      url: 'https://fr.wikipedia.org/wiki/Mentha'
    }
  },
]
