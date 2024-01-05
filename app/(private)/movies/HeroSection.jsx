import VideoSection from "@/components/VideoSection"
import { getVideoKey } from "../TMDb"
import Link from "next/link";
import {PlayIcon } from '@heroicons/react/24/solid'

export default async function HeroSection({movie}) {

    const videoKey = await getVideoKey(movie?.id)

  return (
    <div className="h-[60vh] w-full relative md:h-screen">
        <VideoSection videoKey={videoKey}/>
        <div className="absolute ml-4 md:ml-16 top-[70%]">
        <h1 className="text-white text-xl md:text-5xl h-full max-w-xl lg:text-6xl font-black drop-shadow-xl"> {movie?.title}</h1>
        <p className="text-white text-[8px] md:text-lg md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl"> {movie?.overview}</p>
        <Link href={`/movies/${movie?.id}`} className="btn-light flex w-fit mt-10 items-center justify-center">
        <PlayIcon className="w-4 md:w-7 text-black mr-1"/>
            <span> Play</span>
        </Link>
        </div>

      
    </div>
  )
}
