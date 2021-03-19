import { apiKey, apiUrl } from "../../lib/tmdb";

export default async (req, res) => {
  const response = await fetch(
    `${apiUrl}/trending/movie/week?api_key=${apiKey}`
  );

  const trending = await response.json();

  res.status(200).json({ movies: trending.results });
};
