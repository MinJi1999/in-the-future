import React from 'react'
import './LetterPaper.css';
import apiClient from "../../apiClient"
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import LetterDetail from './LetterDetail'

function LetterPaper(props) {
    const [Products, setProducts] = React.useState([]);
    const [productId, setProductId] = React.useState('')
    const [isModal, setIsModal] = React.useState(false)

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

    const openModal = () => {
        setIsModal(true)
    }
    const closeModal = () => {
        setIsModal(false)
    }
    const renderCards = Products.map((product, index) => {
        return( 
            <div className="product-container" key={index}>
                <a onClick={() => {
                        setProductId(product._id)
                        openModal()
                    }}>
                    <img src={product.images}
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
                            편지지 하나와<br/>장식품 한 개,<br/>두 개를 고른 뒤,<br/>이곳을 눌러주세요.
                        </h2>
                    </div>
                    {renderCards}
                </div>
                <LetterDetail props={productId} open={isModal} close={closeModal} />
            </section>  
        </>
    )
    
}

export default LetterPaper