import DetailPage from '@/components/DetailPage';

export async function getStaticPaths() {
  const url = `https://api.themoviedb.org/3/tv/popular?language=en-US`;
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

  if (!data.results) {
    console.error('No results found in API response:', data);
    return { paths: [], fallback: 'blocking' };
  }

  const paths = data.results.map((tv) => ({
    params: { tvId: tv.id.toString() },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const url = `https://api.themoviedb.org/3/tv/${params.tvId}?language=en-US`;
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

  const trailerResponse = await fetch(`https://api.themoviedb.org/3/tv/${params.tvId}/videos`, options);
  const trailerData = await trailerResponse.json();

  return {
    props: { data, trailerData },
    revalidate: 60,
  };
}

export default function Tv({ data, trailerData }) {
  return <DetailPage media={data} type={'show'} trailerUrl = {'https://www.youtube.com/embed/' + trailerData.results[0]?.key}/>;
}
