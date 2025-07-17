import React, { useState } from 'react'
import { furnitureData } from '../data/furniture'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../styles/Furniture.css';


const FurniturePage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item => item !== mango))
            }else{
                setSelectedProduct([...selectedProduct, mango]) 
            }
    }


    const filteredProduct = selectedProduct.length===0?
        furnitureData : furnitureData.filter((orange)=>selectedProduct.includes(orange.brand))

return (
<>
<Navbar />
<div className="furniture-fullpage">
    
<div className="furniture-pro-selected">

{furnitureData.map((phone)=>{
    return(
        <div key={phone.id} className='furniture-pro-input'>
            <label >
                <input type="checkbox" 
                checked = {selectedProduct.includes(phone.brand)}
                onChange={()=>companyHandler(phone.brand)}
                />
                {phone.brand}
            </label>
        </div>
    )
})}

</div>

<div className='furniture-pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div key={item.id}>

            <Link to={`/furniture/${item.id}`}>
                <div className="furniture-pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="furniture-proModel">
                    {item.brand}, {item.model}
                </div>
            </div>
        )
    })}

 </div>
</div>
</>
  )
}

export default FurniturePage