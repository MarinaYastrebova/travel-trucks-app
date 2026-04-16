import { CampersResponse, CamperDetails, Review, Filters } from '@/types/camper';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getCampers(
  page: number = 1,
  filters: Filters = {}
): Promise<CampersResponse> {
  const params = new URLSearchParams();

  params.set('page', String(page));
  params.set('perPage', '4');

  if (filters.location) params.set('location', filters.location);
  if (filters.form) params.set('form', filters.form);
  if (filters.transmission) params.set('transmission', filters.transmission);
  if (filters.engine) params.set('engine', filters.engine);

  const response = await fetch(`${BASE_URL}/campers?${params}`);

  if (!response.ok) {
    throw new Error('Failed to fetch campers');
  }

  return response.json();
}

export async function getCamperById(id: string): Promise<CamperDetails> {
  const response = await fetch(`${BASE_URL}/campers/${id}`);

  if (!response.ok) {
    throw new Error('Camper not found');
  }

  return response.json();
}

export async function getCamperReviews(id: string): Promise<Review[]> {
  const response = await fetch(`${BASE_URL}/campers/${id}/reviews`);

  if (!response.ok) {
    throw new Error('Reviews not found');
  }

  return response.json();
}

export async function createBooking(
  camperId: string,
  data: { name: string; email: string }
): Promise<{ message: string }> {
  const response = await fetch(`${BASE_URL}/campers/${camperId}/booking-requests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Booking failed');
  }

  return response.json();
}
