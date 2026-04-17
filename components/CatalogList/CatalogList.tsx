'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getCampers } from '@/lib/api';
import { FiltersType } from '@/types/camper';
import CamperCard from '@/components/CamperCard/CamperCard';
import styles from './CatalogList.module.css';

interface Props {
  filters: FiltersType;
}

export default function CatalogList({ filters }: Props) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ['campers', filters],
      queryFn: ({ pageParam = 1 }) => getCampers(pageParam, filters),
      getNextPageParam: lastPage => {
        if (lastPage.page < lastPage.totalPages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      initialPageParam: 1,
    });

  if (isLoading) {
    return <p className={styles.message}>Loading...</p>;
  }

  if (isError) {
    return <p className={styles.message}>Something went wrong...</p>;
  }

  const campers = data?.pages.flatMap(page => page.campers) ?? [];

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {campers.map(camper => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>

      {hasNextPage && (
        <button
          className={styles.loadMore}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load more'}
        </button>
      )}
    </div>
  );
}
