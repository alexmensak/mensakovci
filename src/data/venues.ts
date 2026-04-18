export type Venue = {
  title: string;
  lines: string[];
  mapUrl: string;
};

export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export const venue: Venue = {
  title: 'Liptovský dvor',
  lines: ['Jánska dolina 2137', '032 03 Liptovský Ján'],
  mapUrl: 'https://maps.google.com/?q=Liptovský+dvor+Jánska+dolina',
};

export const features: Feature[] = [
  {
    icon: 'favorite',
    title: 'Obrad',
    description:
      'Pod šírym nebom — na lúke pri zurčiacom potôčiku, medzi liptovskými dreveničkami.',
  },
  {
    icon: 'celebration',
    title: 'Hostina',
    description:
      'V drevenej stodole inšpirovanej liptovským humnom.',
  },
  {
    icon: 'cottage',
    title: 'Ubytovanie',
    description:
      'Tradičné dreveničky s raňajkami priamo v areáli — pre bližšiu rodinu a hostí z ďaleka.',
  },
];
