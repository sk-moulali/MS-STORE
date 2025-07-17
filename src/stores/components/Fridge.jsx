
import React from 'react'

import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'
import '../styles/Fridge.css';


const Fridge = () => {

    const firstFiveImages = fridgeData.slice(0,5)

  return (
   <>
    <div className="fridge-proTitle">
        <h2>Frides</h2>
      </div>
   <div className='fridge-proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div key={item.id} className='fridge-imgBox'>
                        <Link to='/fridge'>
                        <img className='fridge-proImage' src={item.image} alt={item.product} />
                        </Link>
                    </div>
                )
            })
        }
    </div>
   
   </>
  )
}

export default Fridge