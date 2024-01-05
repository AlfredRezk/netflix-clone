import Image from "next/image"
import Link from "next/link"

const IMG_API = 'https://image.tmdb.org/t/p/w1280'
const defaultImage = 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function MovieCard({movie}) {

    const {poster_path, id, title, vote_average} = movie
  return (

    <Link href={`/movies/${id}`} className="w-40 h-[240px] relative cursor-pointer">
        <Image 
            src={poster_path? IMG_API+poster_path : defaultImage}
            width={160}
            height={240}
            alt="movie card"
            className="brigtness-[80%] hover:brightness-100 transition border-2 border-transparent hover:border-white"
            title={title}
        />
        <span className="absolute top-1 right-2 text-white font-semibold z-10 drop-shadow-md">
            {Number(vote_average).toFixed(1)}
        </span>
        <h6 className="absolute bottom-1 text-center w-full bg-black bg-opacity-50" > {title}</h6>
    </Link>
  )
}
