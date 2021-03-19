import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Search.module.css";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);

  function handleSearchText(event) {
    setSearchText(event.target.value);
  }

  async function handleSearch() {
    const response = await fetch(
      `http://localhost:3000/api/search?name=${searchText}`
    );
    const { results } = await response.json();
    setMovies(results);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Busca</h1>

        <div className={styles.search}>
          <input
            type='text'
            placeholder='Movie name'
            value={searchText}
            onChange={handleSearchText}
          />

          <button onClick={handleSearch}>Buscar</button>
        </div>

        <hr />

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

        <Link href='/'>Voltar</Link>
      </main>
    </div>
  );
}
