import React, { useState } from 'react'
import { womanData } from '../data/woman'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../styles/Woman.css';


const WomanPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item => item !== mango))
            }else{
                setSelectedProduct([...selectedProduct, mango]) 
            }
    }


    const filteredProduct = selectedProduct.length===0?
        womanData : womanData.filter((orange)=>selectedProduct.includes(orange.brand))

return (
<>
<Navbar />
<div className="woman-fullpage">
    
<div className="woman-pro-selected">

{womanData.map((phone)=>{
    return(
        <div key={phone.id} className='woman-pro-input'>
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

<div className='woman-pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div key={item.id}>

            <Link to={`/woman/${item.id}`}>
                <div className="woman-pageImg">
                    <img src={item.image} alt={item.product} />
                </div>
            </Link>
                <div className="woman-proModel">
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

export default WomanPage