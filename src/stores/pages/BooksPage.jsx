import React, { useState } from 'react'
import { booksData } from "../data/books";
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../styles/Books.css'

const BooksPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
        if(selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item => item !== mango))
        }else{
            setSelectedProduct([...selectedProduct, mango]) 
        }
    }

    const filteredProduct = selectedProduct.length===0 ? booksData : booksData.filter((orange)=>selectedProduct.includes(orange.title))

return (
<>
<Navbar />
<div className="book-fullpage">
    
<div className="book-pro-selected">

{booksData.map((phone)=>{
    return(
        <div key={phone.id} className='book-pro-input'>
            <label >
                <input type="checkbox" 
                checked = {selectedProduct.includes(phone.title)}
                onChange={()=>companyHandler(phone.title)}
                />
                {phone.title}
            </label>
        </div>
    )
})}

</div>

<div className='book-pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div key={item.id}>

            <Link to={`/books/${item.id}`}>
                <div className="book-pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="book-proModel">
                    {item.title}, {item.author}
                </div>
            </div>
        )
    })}

 </div>
</div>
</>
  )
}

export default BooksPage;