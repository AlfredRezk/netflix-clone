"use client";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import MovieCard from "./MovieCard";


export default function MovieList({movies}) {

    const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  return (
    <div>
        <div ref={ref} {...events} className="grid grid-flow-col grap-4 space-x-3 overflow-x-scroll no-scrollbar scrollbar-hide">
            {movies.map(movie=> (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
      
    </div>
  )
}
