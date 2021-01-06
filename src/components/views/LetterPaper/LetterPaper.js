import React from 'react'
import './LetterPaper.css';
import axios from 'axios';
import apiClient from "../../apiClient";


function LetterPaper(props) {
    console.log(props)
    const [Products, setProducts] = React.useState([]);

    React.useEffect(() => { 
        apiClient
            .post('/api/product/products')
            .then(res => {
                if (res.data.success) {
                    setProducts(res.data.productInfo);
                } else {
                    alert('상품들을 불러오는데 실패했습니다.');
                }
            })
        }, [])
        console.log(Products)

    
    const renderCards = Products.map((product, index) => {
        return( 
            <div className="product-container" key={index}>
                <a href={`/product/${product._id}`}>
                    <img src={`https://to-me-in-the-future.herokuapp.com/${product.images}`}
                            className="letter-paper-image1" 
                            alt="product"/>
                </a>
                <div className="description-container">
                    <div className="paper-title">{product.title}</div>
                    <div className="paper-price">가격 :  $ {product.price}</div>
                </div>
            </div>
        )
    })
    
    return (
        <>
            <section className="letter-paper">
                <div className="letter-images-container">
                    <div className="text-container">
                        <h2 className="title" onClick={() => {return props.history.push("/choosecolor");}}>
                            편지지와<br/>장식품을<br/>골라볼까요.
                        </h2>
                    </div>
                    {renderCards}
                </div>
            </section>  
        </>
    )
    
}

export default LetterPaper
