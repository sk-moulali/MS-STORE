import React, { useState } from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../styles/Speakers.css';


const SpeakersPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item => item !== mango))
            }else{
                setSelectedProduct([...selectedProduct, mango]) 
            }
    }


    const filteredProduct = selectedProduct.length===0 ? speakerData : speakerData.filter((orange)=>selectedProduct.includes(orange.brand))

return (
<>
<Navbar />
<div className="speaker-fullpage">
    
<div className="speaker-pro-selected">

{speakerData.map((phone)=>{
    return(
        <div key={phone.id} className='speaker-pro-input'>
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

<div className='speaker-pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div key={item.id}>

            <Link to={`/speakers/${item.id}`}>
                <div className="speaker-pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="speaker-proModel">
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

export default SpeakersPage;