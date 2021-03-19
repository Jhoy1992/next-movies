import { apiKey, apiUrl } from "../../lib/tmdb";

export default async (req, res) => {
  const { name } = req.query;

  const response = await fetch(
    `${apiUrl}/search/movie?api_key=${apiKey}&query=${name}`
  );

  const { results } = await response.json();

  res.status(200).json({ results });
};
