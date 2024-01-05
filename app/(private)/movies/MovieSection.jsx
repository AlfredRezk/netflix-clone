import { getMovies } from "../TMDb"
import MovieList from "./MovieList"

export default async function MovieSection({title, type}) {

    const movies = await getMovies(type)
  return (
    <div className="my-20">
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4"> {title}</p>
        <MovieList movies={movies}/>
    
    </div>
  )
}
