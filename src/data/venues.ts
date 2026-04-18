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
      'Pod šírym nebom — na lúke pri potoku Štiavnica, medzi liptovskými dreveničkami.',
  },
  {
    icon: 'celebration',
    title: 'Hostina',
    description:
      'V Stodole v štýle liptovského humna. Drevená konštrukcia, hlinené omietky a vínna pivnica priamo v podlahe.',
  },
  {
    icon: 'cottage',
    title: 'Ubytovanie',
    description:
      'Pre hostí v tradičných dreveničkách priamo v areáli, s raňajkami a výhľadom do Jánskej doliny.',
  },
];
