import * as React from 'react'
import { useDispatch } from 'react-redux';
import { getCartItems, removeCartItem,onSuccessBuy } from '../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock';
import { Empty, Result } from 'antd';
import Paypal from '../../utils/Paypal';


function CartPage(props) {
    const dispatch = useDispatch();
    const [Total, setTotal] = React.useState(0);
    const [ShowTotal, setShowTotal] = React.useState(false);
    const [ShowSuccess, setShowSuccess] = React.useState(false);

    React.useEffect(() => {
        let cartItems = [];
        if(props.user.userData && props.user.userData.cart){
            if(props.user.userData.cart.length > 0){
                props.user.userData.cart.forEach( item => {
                    cartItems.push(item.id);
                })
                dispatch(getCartItems(cartItems,props.user.userData.cart ))
                .then(res => {calculateTotal(res.payload)})
            }
        }
    }, [props.user.userData])
    
   

    let calculateTotal = (cartDetail) => {
        let total = 0;
        cartDetail.map(item => {
            return total += parseInt(item.price, 10) * item.quantity;
        })
        setTotal(total);
        setShowTotal(true);
    }
    
    let removeFromCart = (productId) => {
        dispatch(removeCartItem(productId))
            .then( res => {
                 if(res.payload.productInfo.length <= 0){
                    setShowTotal(false);
                    
                 }
            })
    }

    const transactionSuccess = (data) => { 
        dispatch(onSuccessBuy({
            paymentData: data,
            cartDetail: props.user.cartDetail
        }))
        .then( res => {
            if(res.payload.success){
                setShowTotal(false);
                setShowSuccess(true); 
            }
        })
    }


    return (
        <div style={{ width: '85%',position:"absolute", height:"80%"}}>
           <h1 style={{  position: "relative",
                        width: "auto",
                        marginBottom: "20px",
                        color: "#75746d",
                        fontSize: "40px",
                        fontFamily: "'Noto Serif KR', serif"}}>
                ?????? ?????????
            </h1> 

        <div>
                <UserCardBlock products={props.user.cartDetail} removeItem = {removeFromCart}/>
           </div>
        
           {ShowTotal ?
                <div style={{ marginTop: '3rem' }}>
                    <h2>Total Amount: ${Total}</h2>
                </div>
                : ShowSuccess ?
                    <Result
                        status="success"
                        title="????????? ?????????????????????."
                        style={{height:"600px"}}/>
                    :
                    <>
                        <br />
                        <Empty 
                            description={false}
                            style={{ marginTop: '100px'}}/>
                        <div style={{ fontSize: '20px',
                                      fontWeight: 'lighter',
                                      color: '#8c8c8c',
                                      textAlign: 'center',
                                      margin: '15px 0px 0px 5px'}}>
                            ??????????????? ???????????????!
                        </div>
                    </>
            }
            {ShowTotal &&
                <Paypal
                    total={Total}
                    onSuccess={transactionSuccess}
                />
            }

        </div>
    )
}



export default CartPage
