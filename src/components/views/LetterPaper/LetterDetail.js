import React from 'react'
import axios from 'axios';
import ProductImage from './LetterDetailImg';
import ProductDescription from './LetterDescription';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../_actions/user_actions';
import apiClient from "../../apiClient";

function LetterDetail(props) {
    const [Product, setProduct] = React.useState({});
    const [Modal, setModal] = React.useState(true);

    React.useEffect(() => {
        const productId = props.match.params.productId;
        apiClient.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(res => {
                setProduct(res.data[0])
            })
            .catch(err => alert('상세 정보 가져오기를 실패했어요(letterDetail). Error : ', err))
    }, [])    

    const showPaper = () => {
        setModal(false);
    }
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(addToCart(Product._id))
        .then(alert("상품을 선택하셨습니다!"))
        .then(showPaper)
    }
    if(!Modal){
        props.history.push("/product/letterpaper")
    }return(
        <>
            <div className="black-bg">
                    <div className="button-cart" onClick={clickHandler}>
                        장바구니에 담기
                        <div className="button-cart-text">C A R T</div>
                    </div>
                <div className="modal-wrap">
                    <div className="modal-close" onClick={() => setModal(false)}> 
                        창 닫 기
                    </div>
                    <div className="detail-box" >
                        <ProductImage detail={Product} />
                        <div className="detail-description-container">
                            <ProductDescription function={showPaper}detail={Product}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        
    
    
        
    
}

export default LetterDetail
