
import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'
import '../styles/Men.css';


const Men = () => {

    const firstFiveImages = menData.slice(0,5)

  return (
    <>
     <div className="men-proTitle">
        <h2>Men Fashion</h2>
      </div>
    <div className='men-proSection'>
         {
             firstFiveImages.map((item)=>{
                 return(
                     <div key={item.id} className='men-imgBox'>
                      <Link to='/men'>
                         <img className='men-proImage' src={item.image} alt="" />
                      </Link>
                     </div>
                 )
             })
         }
     </div>
    
    </>
  )
}

export default Men