import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Movie.module.css";
import { apiKey, apiUrl } from "../../lib/tmdb";

export default function MovieItem({ movie }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Movies Database</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        {router.isFallback && <div>Loading...</div>}

        {!router.isFallback && (
          <div>
            <h2>{movie.title}</h2>

            <img
              width='400'
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />

            <strong>Nota: {movie.vote_average}</strong>
            <p>{movie.overview}</p>
          </div>
        )}

        <Link href='/'>Voltar</Link>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch(`${apiUrl}/movie/${id}?api_key=${apiKey}`);
  const movie = await response.json();

  return {
    props: {
      movie,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    `${apiUrl}/trending/movie/week?api_key=${apiKey}`
  );

  const trending = await response.json();

  return {
    paths: trending.results.map(movie => ({
      params: { id: String(movie.id) },
    })),
    fallback: true,
  };
}
