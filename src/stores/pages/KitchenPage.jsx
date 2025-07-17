import React, { useState } from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../styles/Kitchen.css';


const KitchenPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item => item !== mango))
            }else{
                setSelectedProduct([...selectedProduct, mango]) 
            }
    }


    const filteredProduct = selectedProduct.length===0?
        kitchenData : kitchenData.filter((orange)=>selectedProduct.includes(orange.brand))

return (
<>
<Navbar />
<div className="kitchen-fullpage">
    
<div className="kitchen-pro-selected">

{kitchenData.map((phone)=>{
    return(
        <div key={phone.id} className='kitchen-pro-input'>
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

<div className='kitchen-pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div key={item.id}>

            <Link to={`/kitchen/${item.id}`}>
                <div className="kitchen-pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="kitchen-proModel">
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

export default KitchenPage