import React from 'react'
import LetterImage from '../images/letter-1.jpg';
import LetterImage2 from '../images/letter1-1.jpg';
import {Link} from 'react-router-dom';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

function Introduce() {
    
    return (
        <section className="introduce">
                <div className="left-background-page"></div>
                <div className="image-container">
                    <ScrollAnimation animateIn="fadeIn" style={{animationDuration: "1s"}}>
                        <img src={LetterImage} alt="letter" className="letter-image1"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn"  style={{animationDuration: "2s"}}>
                        <img src={LetterImage2} alt="letter" className="letter-image2" />
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn="fadeIn" style={{animationDuration: "3s"}}>
                    <div className="sentence-container">
                        <h2 className="title">미래의 나에게.</h2>
                        <p className="second-title">마음속에서만 되뇌던 말이 있나요?</p>
                        <p className="js-sentence main-sentence">
                            쉽게 잊곤 했던 당신의 과거를<br />
                            미래의 당신에게 들려주세요<br />
                            꽤나 특별한 추억이 될지도 모릅니다.<br />
                            저희는 그 추억을 더 아름답게<br/>
                            만들어 드릴 거예요.<br/>
                            당신이 전하고픈 이야기와<br/>
                            당신이 좋아하는 색과 분위기만 남겨주세요.
                        </p>
                        <div className="link-to-custom-page">
                            <div className="js-link-to-custom-page link-button"
                                decoration="none">
                                    <Link to="/upload/letter" style={{textDecoration: "none", color:"white"}}>
                                        편지 만들러 가기
                                    </Link>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                
            </section>
    )
}

export default Introduce
