import React, { useState } from 'react'
import { tvData } from "../data/tv";
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../styles/Speakers.css';


const TVPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
        if(selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item => item !== mango))
        }else{
            setSelectedProduct([...selectedProduct, mango]) 
        }
    }

    const filteredProduct = selectedProduct.length===0 ? tvData : tvData.filter((orange)=>selectedProduct.includes(orange.brand))

return (
<>
<Navbar />
<div className="tv-fullpage">
    
<div className="tv-pro-selected">

{tvData.map((phone)=>{
    return(
        <div key={phone.id} className='tv-pro-input'>
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

<div className='tv-pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div key={item.id}>

            <Link to={`/tv/${item.id}`}>
                <div className="tv-pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="tv-proModel">
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

export default TVPage;