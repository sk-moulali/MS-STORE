import React, { useState } from 'react'
import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../styles/Watch.css';


const WatchPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item => item !== mango))
            }else{
                setSelectedProduct([...selectedProduct, mango]) 
            }
    }


    const filteredProduct = selectedProduct.length===0?
        watchData : watchData.filter((orange)=>selectedProduct.includes(orange.brand))

return (
<>
<Navbar />
<div className="watch-fullpage">
    
<div className="watch-pro-selected">

{watchData.map((phone)=>{
    return(
        <div key={phone.id} className='watch-pro-input'>
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

<div className='watch-pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div key={item.id}>

            <Link to={`/watch/${item.id}`}>
                <div className="watch-pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="watch-proModel">
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

export default WatchPage