import React from 'react'
import TopPart from '../Components/TopPart'
import Main from "../Components/Main"
import Single from '../Components/Single'

function Combine() {
  return (
    <div className='w-11/12 mx-auto sm:mt-28 mt-14'>
      <TopPart/>
      <Main/>
      {/* <Single/> */}
      
    </div>
  )
}

export default Combine
