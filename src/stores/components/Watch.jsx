import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'
import '../styles/Watch.css';


const Watch = () => {

    const firstFiveImages = watchData.slice(0,5)

  return (
    <>
    <h2>Watches</h2>
    <div className='watch-proSection'>
         {
             firstFiveImages.map((item)=>{
                 return(
                     <div key={item.id} className='watch-imgBox'>
                        <Link to='/watch'>
                         <img className='watch-proImage' src={item.image} alt="" />
                        </Link>
                     </div>
                 )
             })
         }
     </div>
    
    </>
  )
}

export default Watch