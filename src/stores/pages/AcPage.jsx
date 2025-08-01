import React, { useState } from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../styles/AC.css'

const AcPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item => item !== mango))
            }else{
                setSelectedProduct([...selectedProduct, mango]) 
            }
    }


    const filteredProduct = selectedProduct.length===0?
        acData : acData.filter((orange)=>selectedProduct.includes(orange.company))

return (
<>
<Navbar />
<div className="ac-fullpage">
    
<div className="ac-pro-selected">

{acData.map((phone)=>{
    return(
        <div key={phone.id} className='ac-pro-input'>
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

<div className='ac-pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div key={item.id}>

            <Link to={`/ac/${item.id}`}>
                <div className="ac-pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="ac-proModel">
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

export default AcPage