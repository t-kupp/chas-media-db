import { FaRegHeart } from 'react-icons/fa';

export default function MediaCard({ media, type }) {
  return (
    <a
      href={type === 'movie' ? `/movie/${media.id}` : `/tv/${media.id}`}
      className='flex w-full flex-col rounded-lg border border-base-300 bg-base-200 shadow-lg transition-transform duration-200 hover:scale-105'
    >
      <img
        className='rounded-t-lg'
        src={`https://image.tmdb.org/t/p/w200/${media.poster_path}`}
        alt={`Poster of ${media.title ? media.title : media.name}`}
      />

      <div className='flex h-full flex-col justify-between p-2'>
        <p className='line-clamp-2 font-bold'>{media.title ? media.title : media.name}</p>
        <div className='flex items-center justify-between opacity-80'>
          <p className='mt-1 text-sm'>
            {media.release_date && media.release_date.slice(0, 4)}
            {media.first_air_date && media.first_air_date.slice(0, 4)}
          </p>
          <p className='badge badge-outline text-xs font-semibold'>
            {Math.floor(media.vote_average * 10)} %
          </p>
        </div>
      </div>
    </a>
  );
}
