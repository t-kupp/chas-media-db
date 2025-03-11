import { useContext, useEffect, useState } from 'react';
import { WatchlistContext } from '@/context/WatchlistContext';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export default function DetailPage({ media, type, trailerUrl }) {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useContext(WatchlistContext);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setIsBookmarked(watchlist.some((item) => item.id === media.id));
  }, [watchlist, media.id]);

  const toggleWatchlist = () => {
    if (isBookmarked) {
      removeFromWatchlist(media.id);
    } else {
      addToWatchlist({ ...media, type });
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <img
          className="w-full rounded-lg shadow-lg"
          src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
          alt={media.title || media.name}
        />

        <div className="col-span-2">
          <h1 className="text-3xl font-bold mb-2">{media.title || media.name}</h1>
          <p className="text-sm opacity-80">{media.release_date || media.first_air_date}</p>
          <p className="mt-4 text-lg">{media.overview}</p>
          <p className='badge badge-outline text-xs font-semibold'>
            {Math.floor(media.vote_average * 10)} %
          </p>
          <button
            className="mt-4 flex items-center gap-2 btn btn-outline"
            onClick={toggleWatchlist}
          >
            {isBookmarked ? <FaHeart className="text-red-500" /> : <FaRegHeart />} Add to Watchlist
          </button>
        </div>
      </div>

      {trailerUrl ? (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Trailer </h2>
          <div className="relative w-full max-w-3xl">
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src={trailerUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Movie Trailer"
            ></iframe>
          </div>
        </div>
      ) : (
        <p className="mt-8 text-center text-gray-500">No trailer available.</p>
      )}
    </div>
  );
}
