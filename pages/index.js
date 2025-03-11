import Link from 'next/link';

export default function Home() {
  return (
    <div className='mx-auto flex w-1/2 max-w-7xl flex-col items-center p-8 text-center text-2xl'>
      <h1 className='mb-12 mt-20 text-4xl font-semibold'>Welcome to Amazon's Movie Site!</h1>
      <p className='text align-centre flex'>
        Welcome to Your Ultimate Movie & Series Guide! 🎬✨ Find details on the most popular films
        and TV shows. Search, explore, and get inspired—your next favorite watch is just a click
        away!{' '}
      </p>
      <div className='mt-8 flex flex-col items-center gap-4'>
        <img
          src='./hollywood-historia.jpg'
          alt='film image with a lion'
          className='w-full max-w-3xl'
        />
        <div className='m-6 flex items-center gap-4 px-6 py-6'>
          <Link href={'/movie'}>
            <button className='btn btn-accent rounded-xl'>Movies</button>
          </Link>
          <Link href={'/tv'}>
            <button className='btn btn-accent rounded-xl'>TV Shows</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
