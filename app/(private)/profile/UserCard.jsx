import Image from "next/image";
import Link from "next/link";

export default function UserCard({name, image}) {


  return (
    <Link className="w-44 mx-auto cursor-pointer group" href="/movies">
        <div className="rounded-md flex items-center justify-center border-2 border-transparent group-hover:border-white group-hover:pointer"> 
        <Image height={175} width={175} alt={`${name} image`} src={image} className="w-full h-max object-contained rounded-md"/>
        </div>
        <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">{name}</div>
    </Link>
  )
}
