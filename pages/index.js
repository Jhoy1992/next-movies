import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ movies }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movies Database</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Trending Movies</h1>

        <Link href='/search'>Ir para a Busca</Link>

        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link href={`/movie/${movie.id}`}>
                <img
                  width='150'
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              </Link>
              {movie.title}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/trending");
  const { movies } = await response.json();

  return {
    props: {
      movies,
    },
  };
}
