import type { Metadata } from 'next';
import CatalogClient from '@/components/CatalogClient/CatalogClient';

export const metadata: Metadata = {
  title: 'Catalog | TravelTrucks',
  description: 'Browse available camper vans',
};

export default function CatalogPage() {
  return <CatalogClient />;
}
