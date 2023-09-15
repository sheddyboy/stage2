import { MovieResponse, TMDBResponse } from "@/types";

export async function getTopMovies(requestCache?:RequestCache,nextFetchRequestConfig?:NextFetchRequestConfig): Promise<TMDBResponse> {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },cache:requestCache,next:nextFetchRequestConfig
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getMovie({ id }: { id: string }): Promise<MovieResponse> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }
  return res.json();
}
