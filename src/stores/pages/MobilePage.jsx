import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../styles/Mobiles.css';


const MobilePage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item => item !== mango))
            }else{
                setSelectedProduct([...selectedProduct, mango]) 
            }
    }


    const filteredProduct = selectedProduct.length===0 ? mobileData : mobileData.filter((orange)=>selectedProduct.includes(orange.company))

return (
<>
<Navbar />
<div className="mobile-fullpage">
    
<div className="mobile-pro-selected">

{mobileData.map((phone)=>{
    return(
        <div key={phone.id} className='mobile-pro-input'>
            <label >
                <input type="checkbox" 
                checked = {selectedProduct.includes(phone.company)}
                onChange={()=>companyHandler(phone.company)}
                />
                {phone.company}
            </label>
        </div>
    )
})}

</div>

<div className='mobile-pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div key={item.id}>

            <Link to={`/mobiles/${item.id}`}>
                <div className="mobile-pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="mobile-proModel">
                    {item.company}, {item.model}
                </div>
            </div>
        )
    })}

 </div>
</div>
</>
  )
}

export default MobilePage