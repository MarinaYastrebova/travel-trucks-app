import { getCamperById, getCamperReviews } from '@/lib/api';
import CamperDetails from '@/components/CamperDetails/CamperDetails';

export const metadata = {
  title: 'Camper Details | TravelTrucks',
  description: 'Detailed information about camper van',
};

interface Props {
  params: Promise<{ camperId: string }>;
}

export default async function CamperPage({ params }: Props) {
  const { camperId } = await params;

  const [camper, reviews] = await Promise.all([
    getCamperById(camperId),
    getCamperReviews(camperId),
  ]);

  return <CamperDetails camper={camper} reviews={reviews} />;
}
