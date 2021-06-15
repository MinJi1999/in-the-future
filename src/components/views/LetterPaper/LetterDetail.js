import React from 'react'
import ProductImage from './LetterDetailImg';
import ProductDescription from './LetterDescription';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../_actions/user_actions';
import apiClient from "../../apiClient";

function LetterDetail({props, open, close}) {
    const [product, setProduct] = React.useState({});
    if(props){
        const productId = props;
        apiClient.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(res => {
                setProduct(res.data[0])
            })
            .catch(err => alert('상세 정보 가져오기를 실패했어요(letterDetail). Error : ', err))
    }
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(addToCart(product._id))
        .then(alert("상품을 선택하셨습니다!"))
    }

    return(
        <>
        {
            open
            ?
            <div className="black-bg">
                <div className="box-shadow">
                        <div className="button-cart" onClick={clickHandler}>
                            장바구니에 담기
                            <div className="button-cart-text">C A R T</div>
                        </div>
                    <div className="modal-wrap">
                        <div className="modal-close" onClick={close}> 
                            창 닫 기
                        </div>
                        <div className="detail-box" >
                            <ProductImage detail={product} />
                            <div className="detail-description-container">
                                <ProductDescription detail={product}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            null
        }
        </>
    )
}

export default LetterDetail