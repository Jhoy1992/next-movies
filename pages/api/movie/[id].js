import { apiKey, apiUrl } from "../../../lib/tmdb";

export default async (req, res) => {
  const { id } = req.query;

  console.log("Getting movie id: ", id);

  const movie = await fetch(`${apiUrl}/movie/${id}?api_key=${apiKey}`);
  const movieJson = await movie.json();

  res.status(200).json({ movie: movieJson });
};
