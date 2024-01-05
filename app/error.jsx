"use client";

import { useEffect } from "react"

export default function ErrorPage({error}) {
    useEffect(()=>{
        console.error(error)
    }, [error])

  return (
    <div className="mt-64 text-center">
        <h1 className="text-red-700 text-2xl"> Something went wrong !</h1>
    </div>
  )
}
