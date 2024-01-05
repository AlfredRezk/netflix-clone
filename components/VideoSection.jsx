
export default function VideoSection({videoKey}) {
  return (

    <iframe className="w-full h-full relative -z-10"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0`}
        title="Youtube video player"
    >

    </iframe>
  )
}
