import React from 'react';
import { range } from '@/utils';
import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';

export const dynamic = 'force-dynamic';

async function VaporExerciseLoading() {
  return (
    <section className='max-width-wrapper'>
      <header className='library-header'>
        <h1>My games</h1>
      </header>
      <div className='game-grid'>
        {range(0, 12).map((num) => (
          <LibraryGameCardSkeleton key={num} />
        ))}
      </div>
    </section>
  );
}

export default VaporExerciseLoading;
