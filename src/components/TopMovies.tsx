import MovieCard from "./MovieCard";
import { getTopMovies } from "@/utils";



export default async function TopMovies() {
  const {results} = await getTopMovies();
  return (
    <div className="grid grid-cols-1 gap-x-[80px] gap-y-[126px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.slice(0,10).map(({id,title,poster_path,release_date})=><MovieCard
              key={id}
              id={id}
              releaseDate={release_date}
              genre="Action, Adventure, Horror"
              imdbRating="86.0 / 100"
              liked={false}
              movieImage={poster_path}
              rottenTomatoesRating="97%"
              title={title}
              type="TV SERIES"
            />)}
    </div>
  );
}
