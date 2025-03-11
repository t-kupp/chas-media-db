import { useContext } from 'react';
import { WatchlistContext } from '@/context/WatchlistContext';
import MediaCard from '@/components/MediaCard';

export default function Watchlist() {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  return (
    <div className='p-8'>
      <div className='mx-auto max-w-7xl'>
        <h1 className='mb-8 text-2xl font-semibold'>My Watchlist</h1>
        {watchlist.length === 0 ? (
          <p className='text-center text-lg'>Your watchlist is empty.</p>
        ) : (
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {watchlist.map((media) => (
              <div key={media.id} className='flex flex-col items-center'>
                {/* Movie Card */}
                <MediaCard media={media} type={media.type} />
                <button
                  onClick={() => removeFromWatchlist(media.id)}
                  className='mt-2 w-full rounded-lg bg-red-500 py-2 text-white hover:bg-red-600 transition duration-300'
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
