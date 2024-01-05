"use client";

import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function PrivateLayout({children}) {
   const {currentUser} =  useAuth()
   const router = useRouter()

   useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem('user'))
    if(!user)
        router.replace('/login')
   }, [currentUser])

  return (
    <div>
      
      {currentUser&&children}
    </div>
  )
}
