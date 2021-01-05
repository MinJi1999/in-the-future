import * as React from 'react'
import { useDispatch } from 'react-redux';
import { userScrollFadeIn } from '../../../hooks/userScrollFadeIn';
import './custom.css';
import Image from '../../../images/cutted-letter.png';
import Image2 from '../../../images/cutted-paper.png';
import { getCartItems,chooseColor } from '../../../../_actions/user_actions';
import CartPage from '../../CartPage/CartPage';


function Custom(props) {     
    const dispatch = useDispatch();
    const firstColorLS = localStorage.getItem("color");
    const secondColorLS = localStorage.getItem("color2");
    const thirdColorsLS = localStorage.getItem("color3");
    const fourthColorsLS = localStorage.getItem("color4");

    const [product, setProduct] = React.useState("");
    const [secondProduct, setSecondProduct] = React.useState("");

    const colorArray = [];
    colorArray.push(firstColorLS,secondColorLS,thirdColorsLS,fourthColorsLS);

    React.useEffect(() => {
        if(colorArray){
            dispatch(chooseColor(colorArray))
        }
    }, [])

    const canChooseColorAgain = function () {
        localStorage.removeItem("color");
        localStorage.removeItem("color2");
        localStorage.removeItem("color3");
        localStorage.removeItem("color4");
        props.history.push('/chooseColor');
    }

    //고른 이미지 뿌려주기
    React.useEffect(() => {
        let cartItems = [];
        if(props.user.userData && props.user.userData.cart){
            if(props.user.userData.cart.length > 0){
                props.user.userData.cart.forEach( item => {
                    cartItems.push(item.id);
                })
                dispatch(getCartItems(cartItems,props.user.userData.cart ))
                .then(res => {
                    return (setProduct(res.payload[0].images),
                    setSecondProduct(res.payload[1].images))
                })
            }
        }
    }, [props.user.userData])

    
    return (
        <>
            <section className="confirm">
            
            <div className="link-to-chooseColor-page" onClick={canChooseColorAgain}>
                <i className="fas fa-arrow-left"></i>
                <div className="text">색 다시 고르기</div>
            </div>
            <img className="cutted-paper" src={Image} alt="cutted paper" />
            <div className="paper-acc-colors">
                <div className="letter-paper-box">
                        <img className={"letter-paper"}
                        src={`https://to-me-in-the-future.netlify.app/${product}`}
                        alt="letter"/>
                    <p className="paper-text">Letter Paper</p>
                </div>
                <div className="letter-acc-box">
                <img className={"letter-acc"}
                        src={`https://to-me-in-the-future.netlify.app/${secondProduct}`}
                        alt="accessary"/>
                    <p className="acc-text">Accessary</p>
                </div>
                <div className="colors-container">
                    <div className="color-box1">
                        <div style={{backgroundColor: firstColorLS}}className="chosen-color1"></div>
                        <p className="color-name">{firstColorLS}</p>
                    </div>
                    <div className="color-box2">
                        <div style={{backgroundColor: secondColorLS}} className="chosen-color2"></div>
                        <p className="color-name">{secondColorLS}</p>
                    </div>
                    <div className="color-box3">
                        <div style={{backgroundColor: thirdColorsLS}} className="chosen-color3"></div>
                        <p className="color-name">{thirdColorsLS}</p>
                    </div>
                    <div className="color-box4">
                        <div style={{backgroundColor: fourthColorsLS}} className="chosen-color4"></div>
                        <p className="color-name">{fourthColorsLS}</p>
                    </div>
                </div>
            </div>
            <div className="explanation-container">
                <h1 className="title">편지의 분위기.</h1>
                    <div className="sentence-container">
                        <p className="sentence">
                            여러분이 고심 끝에 고른 색과 아름다운 장식품들을<br/> 고운 색으로 어우러지게 조합할 거예요.<br/>
                            약간의 시간이 지난 뒤, 편지를 받게 될 여러분의<br/>
                            입가에 따듯한 미소가 번지길 바라며 향내 나는 종이 위에 당신의<br/>
                            편지를 옮기고 아름다운 조각들로 이어붙일 거랍니다.<br/> 
                        </p>
                        <p className="second-sentence">
                            여러분이 진심을 다해 적은 편지 내용이 저희에게 보여지는 것에는                            
                            전혀 걱정하지<br/> 않아도 돼요. 저희에게는 약 20분 뒤면 편지를 쓴 동안의 기억이 잊혀지는<br/>
                                <span className="magic">마법</span>이 있답니다! 그러니 걱정말고 미래의 나 자신에게<br/> 
                            전해줄 이야기를 남기면 된답니다.
                        </p>

                    </div>
            </div>
            <img className="cutted-paper2" src={Image2} alt="cutted-paper" onClick={() => {props.history.push("/user/cart")}}/>
        </section>
        <section className="success">
                <CartPage {...props}/>
        </section>
    </>
)
}

export default Custom
