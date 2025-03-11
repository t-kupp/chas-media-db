import Link from 'next/link';
import { FaRegHeart } from 'react-icons/fa';

export default function SearchResultCard({ media, type }) {
  console.log(media);

  return (
    <Link
      href={type === 'movie' ? `/movie/${media.id}` : `/tv/${media.id}`}
      className='relative flex w-full rounded-lg border-base-300 bg-base-200 shadow-lg transition-transform duration-200 hover:scale-105'
    >
      <img
        className='h-[144px] min-h-[144px] w-24 min-w-24 rounded-l-lg'
        src={`https://image.tmdb.org/t/p/w200/${media.poster_path}`}
        alt={`Poster of ${type === 'movie' ? media.title : media.name}`}
      />
      <div className='p-4'>
        <h1 className='font-bold'>{type === 'movie' ? media.title : media.name}</h1>
        <div className='mb-2 flex items-center opacity-75'>
          <p>
            {media.release_date && media.release_date.slice(0, 4) + ' • Movie'}
            {media.first_air_date && media.first_air_date.slice(0, 4) + ' • TV Show'}
          </p>
        </div>
        <p className='line-clamp-2 text-sm'>{media.overview}</p>
      </div>
    </Link>
  );
}
