import React from 'react'
import { useParams } from 'react-router-dom'

// query m jo bhi parameter  hota unka access us component ko miljata hein jo bhi element mein mention krte hein
function User() {

    const {userId} = useParams()
  return (
    <div className='flex  p-4 bg-gray-800 text-white text-3xl justify-center'>
      User : {userId}
    </div>
  )
}

export default User
