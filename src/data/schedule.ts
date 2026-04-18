export type ScheduleItem = {
  time: string;
  label: string;
  title?: string;
  subitems?: string[];
};

export const schedule: ScheduleItem[] = [
  {
    time: '15:00',
    label: 'Obrad',
    title: 'Prisaháme si vernosť',
    subitems: ['Fotenie', 'Prípitok', 'Hostina', 'Prvý tanec'],
  },
  {
    time: '20:00',
    label: 'Tancovačka',
    title: 'Večerná zábava',
    subitems: ['Torta', 'Hádzanie kytice'],
  },
  {
    time: '24:00',
    label: 'Tancovačka do rána bieleho',
    subitems: ['Čepčenie', 'Redový tanec'],
  },
];
