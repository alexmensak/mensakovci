import type { RsvpFormValues } from '@/routes/rsvp/schema';

const TIMEOUT_MS = 10_000;

export async function postRsvpToSheet(values: RsvpFormValues): Promise<void> {
  const url = import.meta.env.VITE_SHEETS_WEBAPP_URL;
  if (!url) {
    console.warn('VITE_SHEETS_WEBAPP_URL not set; skipping Sheets sync.');
    return;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        fullName: values.fullName,
        guests: values.guests,
        dietary: values.dietary ?? '',
        drinks: (values.drinks ?? []).join(', '),
        website: values.website ?? '',
        submittedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
      }),
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`Sheets POST failed: ${response.status}`);
    }
  } finally {
    clearTimeout(timer);
  }
}
