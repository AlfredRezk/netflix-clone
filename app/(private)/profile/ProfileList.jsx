"use client";

import { profileImages } from '@/constants/constants'
import React from 'react'
import UserCard from './UserCard'
import { useAuth } from '@/context/AuthContext'

export default function ProfileList() {

    const {currentUser} = useAuth()

  return (
    <div className='flex flex-col items-center justify-center gap-8 mt-10 md:flex-row'>
        {profileImages.map((image, index)=>(
            <UserCard key={index} 
            image={index==0&&currentUser? currentUser.photoURL: image}
            name={index==0&&currentUser? currentUser.displayName:`Guest-${index+1}`}
            />
        ))}
        
    </div>
  )
}
