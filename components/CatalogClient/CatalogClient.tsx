'use client';

import { useState } from 'react';
import { FiltersType } from '@/types/camper';
import Filters from '@/components/FiltersPanel/FiltersPanel';
import CatalogList from '@/components/CatalogList/CatalogList';
import styles from './CatalogClient.module.css';

export default function CatalogClient() {
  const [filters, setFilters] = useState<FiltersType>({});
  return (
    <div className={styles.page}>
      <Filters onFilter={setFilters} />
      <CatalogList filters={filters} />
    </div>
  );
}
