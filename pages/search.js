import SearchResultCard from '@/components/SearchResultCard';
import { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  async function fetchData() {
    setLoading(true);

    try {
      const APIKey = process.env.NEXT_PUBLIC_API_KEY;
      const url = `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false&language=en-US&page=1`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIKey}`,
        },
      });

      const data = await response.json();
      setResults(data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='p-8'>
      <div className='mx-auto w-full max-w-7xl'>
        <h1 className='mb-8 text-2xl font-semibold'>Search MediaDB</h1>
        <div className='flex flex-col items-center'>
          <label className='input input-bordered mb-16 mt-8 flex w-full max-w-md items-center gap-2'>
            <IoSearch className='opacity-50' />
            <input
              type='text'
              className='grow'
              placeholder='Search for movies or TV shows...'
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
          {loading && <span className='loading loading-spinner loading-lg'></span>}
          <div className='flex w-full max-w-3xl flex-col items-start gap-8'>
            {results.map((media, index) => (
              <SearchResultCard key={index} media={media} type={media.media_type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
