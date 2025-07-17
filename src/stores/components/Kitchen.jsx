import React from 'react'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'
import '../styles/Kitchen.css';


const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0,5)
  return (
    <>
   <div className="kitchen-proTitle">
        <h2>Kitchen</h2>
      </div>
   <div className='kitchen-proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div key={item.id} className='kitchen-imgBox'>
                        <Link to='/kitchen'>
                        <img className='kitchen-proImage' src={item.image} alt="" />
                        </Link>
                    </div>
                )
            })
        }
    </div>
   
   </>
  )
}

export default Kitchen