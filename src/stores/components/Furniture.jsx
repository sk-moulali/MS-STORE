
import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'
import '../styles/Furniture.css';


const Furniture = () => {

    const firstFiveImages = furnitureData.slice(0,5)

  return (
    <>
   <div className="furniture-proTitle">
        <h2>Furniture</h2>
      </div>
   <div className='furniture-proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div key={item.id} className='furniture-imgBox'>
                        <Link to='/furniture'>
                        <img className='furniture-proImage' src={item.image} alt="" />
                        </Link>
                    </div>
                )
            })
        }
    </div>
   
   </>
  )
}

export default Furniture