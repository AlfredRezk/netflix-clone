import VideoSection from "@/components/VideoSection";
import { getCast, getMovieDetails, getMovies, getVideoKey } from "../../TMDb";
import Link from "next/link";
import BackButton from "./BackButton";
import ActorCard from "./ActorCard";

// Dyamic metadata
export async function generateMetadata({ params: { movieId } }) {
  let movieDetails = await getMovieDetails(movieId);
  return {
    title: movieDetails.title,
    description: movieDetails.overview,
  };
}

// Static params
export async function generateStaticParams() {
  const [movies1, movies2, movies3, movies4] = await Promise.all([
    getMovies("now_playing"),
    getMovies("popular"),
    getMovies("top_rated"),
    getMovies("upcoming"),
  ]);

  const movies = [...movies1, ...movies2, ...movies3, ...movies4];
  return movies.map((movie) => ({ movieId: movie.id.toString() }));
}

export default async function MovieDetail({ params: { movieId } }) {
  const movieDetails = await getMovieDetails(movieId);
  const videoKey = await getVideoKey(movieId);
  let movieCast = await getCast(movieId)

  const { title, overview, genres, release_date } = movieDetails;

  return (
    <div className="h-[55vh] relative md:container mx-auto text-white">
      <div className="flex-col">
        <h1 className="text-center text-white text-4xl pt-20 pb-4"> {title}</h1>
        <div className="flex gap-3 justify-center items-center mb-5"> 
          {genres.map(item=>(
            <div key={item.id} className="py-2 px-3 bg-slate-600 rounded-md"> {item.name}</div>
          ))}
        </div>
      </div>

      {videoKey&& <VideoSection videoKey={videoKey}/>}
      <div className="flex flex-col items-center mt-3 md:mt-4 gap-3 p-3">
            <div className="p-10 bg-slate-800 mt-5 text-md text-white rounded-md flex flex-col gap-4 w-full">
              <h1 className="text-center text-2xl font-bold">Overview</h1>
              <h2 className="text-center font-semibold italic text-lg text-red-500"> Relase Date: {release_date}</h2>
              <p>{overview}</p>
            </div>

            <div className="flex flex-row items-center mt-3 gap-3">
            <ActorCard cast={movieCast[0]}/>
            <ActorCard cast={movieCast[1]}/>
            <ActorCard cast={movieCast[3]}/>
            <ActorCard cast={movieCast[4]}/>
            <ActorCard cast={movieCast[5]}/>

            </div>

           <BackButton/>
      </div>
    </div>
  );
}
