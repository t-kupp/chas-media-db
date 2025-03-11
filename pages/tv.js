import MediaCard from '@/components/MediaCard';

export default function Home({ popularShows }) {
  console.log('popularShows:', popularShows);

  return (
    <div className='p-8'>
      <div className='mx-auto max-w-7xl'>
        <h1 className='mb-8 text-2xl font-semibold'>Popular Shows</h1>
        <div className='grid grid-cols-2 justify-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {popularShows.map((show, index) => (
            <MediaCard key={index} media={show} type={'show'} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
  const APIKey = process.env.NEXT_PUBLIC_API_KEY;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${APIKey}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  return {
    props: { popularShows: data.results || [] },
  };
}
