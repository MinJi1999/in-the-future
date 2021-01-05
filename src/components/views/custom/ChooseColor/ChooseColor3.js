import * as React from 'react'
import './chooseColor.css';
import ChooseColor4 from "./ChooseColor4";

function ChooseColor3(props) {
    const [Click, setClick] = React.useState(false)
    
    console.log(props)
    const saveColors = (e)=>{
        const colorArray = [];
            let color = e.target;
            let colorStyle = window
                .getComputedStyle(color)
                .backgroundColor;
            colorArray.push(colorStyle);
            localStorage.setItem("color3", colorArray);
            props.history.push("/choosecolor4");
            setClick(true);
    }
    const thirdColorLS = localStorage.getItem("color3");

    if(Click){
        return <ChooseColor4 {...props} />
    }
        return (
            <div>
            <section className="third-color-page">
                <div className="color-text-box">
                    <h1 className="color-text">한 가지의 색을 골라주세요.</h1>
                </div>
                <div data-value={9} onClick={saveColors} className="color9"></div>
                <div data-value={10} onClick={saveColors} className="color10"></div>
                <div data-value={11} onClick={saveColors} className="color11"></div>
                <div data-value={12} onClick={saveColors} className="color12"></div>
            </section>
            </div>
        )
    }

export default ChooseColor3
