import { getCamperById, getCamperReviews } from '@/lib/api';
import CamperDetails from '@/components/CamperDetails/CamperDetails';

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
