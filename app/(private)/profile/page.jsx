import React from 'react'
import ProfileList from './ProfileList'

export default function page() {
  return (
    <div className='flex items-center justify-center pt-40'>
      <div className="flex flex-col">
        <h1 className='text-3xl md:text-5xl text-white text-center'> Who is watching?</h1>
        <ProfileList/>
      </div>
    </div>
  )
}
