import React, { useState } from 'react'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../styles/Men.css';


const MenPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item => item !== mango))
            }else{
                setSelectedProduct([...selectedProduct, mango]) 
            }
    }


    const filteredProduct = selectedProduct.length===0?
        menData : menData.filter((orange)=>selectedProduct.includes(orange.brand))

return (
<>
<Navbar />
<div className="men-fullpage">
    
<div className="men-pro-selected">

{menData.map((phone)=>{
    return(
        <div key={phone.id} className='men-pro-input'>
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

<div className='men-pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div key={item.id}>

            <Link to={`/men/${item.id}`}>
                <div className="men-pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="men-proModel">
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

export default MenPage