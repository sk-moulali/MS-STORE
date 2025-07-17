
import React from 'react'


import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'
import '../styles/Mobiles.css';



const Mobiles = () => {

    const firstFiveImages = mobileData.slice(0,5)

  return (
   <>
    <div className="mobile-proTitle">
        <h2>Mobiles</h2>
      </div>
   <div className='mobile-proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div key={item.id} className='mobile-imgBox'>
                        <Link to='/mobiles'>
                        <img className='mobile-proImage' src={item.image} alt={item.product} />
                   </Link>
                    </div>
                )
            })
        }
    </div>
   
   </>
  )
}

export default Mobiles