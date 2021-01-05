import React from 'react'
import './chooseColor.css';
import Image from "../../../images/color-text-box.png"
import ChooseColor2 from "./ChooseColor2";
import { useDispatch } from 'react-redux';
import { chooseColor } from '../../../../_actions/user_actions';


function ChooseColor(props) {
    const dispatch = useDispatch();
    const [Click, setClick] = React.useState(false);
     const firstColorLS = localStorage.getItem("color");
     if (firstColorLS) {
         return <div className="alert">이미 색상을 선택하셨습니다!</div>,
         setTimeout(() => (props.history.push("/custom")),3000);
     }
    console.log(props)

    const saveColors = (e)=>{
        const colorArray = [];
            let color = e.target;
            let colorStyle = window
                .getComputedStyle(color)
                .backgroundColor;
            colorArray.push(colorStyle);
            localStorage.setItem("color", colorArray);
            props.history.push("/choosecolor2");
            setTimeout(setClick(true),1000);

    }
  if(Click){
     return <ChooseColor2 {...props} />
  }
    return (
        <div>
           <section className="first-color-page">
                <div className="color-text-box">
                    <h1 className="color-text">한 가지의 색을 골라주세요.</h1>
                </div>
                <div data-value="#7dc2ff" className="color1" onClick={saveColors}></div>
                <div data-value="#659dcf" className="color2"onClick={saveColors}></div>
                <div data-value="#4d789e" className="color3"onClick={saveColors}></div>
                <div data-value="#395975" className="color4"onClick={saveColors}></div>
            </section>
        </div>
    )
}

export default ChooseColor
