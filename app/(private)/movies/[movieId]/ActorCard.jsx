import Image from "next/image"
import Link from "next/link"

const IMG_API = 'https://image.tmdb.org/t/p/w1280'
const defaultImage = 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function ActorCard({cast}) {
    console.log(cast);

    const {profile_path,name, id} = cast
  return (

    <Link href={`/actor/${id}`} className="w-40 h-[240px] relative cursor-pointer">
        <Image 
            src={profile_path? IMG_API+profile_path : defaultImage}
            width={160}
            height={240}
            alt="Actor card"
            className="brigtness-[80%] hover:brightness-100 transition border-2 border-transparent hover:border-white"
            title={name}
        />
        <h6 className="absolute bottom-1 text-center w-full bg-black bg-opacity-50" > {name}</h6>
    </Link>
  )
}
