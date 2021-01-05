import React from 'react'
import './chooseColor.css';
import ChooseColor3 from "./ChooseColor3";

function ChooseColor2(props) {
    
    const [Click, setClick] = React.useState(false)
    const saveColors = (e)=>{
        const colorArray = [];
            let color = e.target;
            let colorStyle = window
                .getComputedStyle(color)
                .backgroundColor;
            colorArray.push(colorStyle);
            localStorage.setItem("color2", colorArray);
            props.history.push("/choosecolor3");
            setTimeout(setClick(true),1000);
    }
    const secondColorLS = localStorage.getItem("color2");
 
    if(Click){
        return <ChooseColor3 {...props} />
    }
    return (
        <div>
        <section className="second-color-page">
            <div className="color-text-box">
                    <h1 className="color-text">한 가지의 색을 골라주세요.</h1>
            </div>
            <div data-value={5} onClick={saveColors} className="color5"></div>
            <div data-value={6} onClick={saveColors} className="color6"></div>
            <div data-value={7} onClick={saveColors} className="color7"></div>
            <div data-value={8} onClick={saveColors} className="color8"></div>
        </section>
        </div>
    )
}

export default ChooseColor2
