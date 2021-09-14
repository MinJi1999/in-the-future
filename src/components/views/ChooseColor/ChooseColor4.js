import React from "react";
import "./chooseColor.css";
import Custom from "../Custom/Custom";

function ChooseColor4(props) {
  const [Click, setClick] = React.useState(false);

  const saveColors = (e) => {
    const colorArray = [];
    let color = e.target;
    let colorStyle = window.getComputedStyle(color).backgroundColor;
    colorArray.push(colorStyle);
    localStorage.setItem("color4", colorArray);
    props.history.push("/user/cart");
    setClick(true);
  };

  if (Click) {
    return <Custom />;
  }
  return (
    <div>
      <section className="fourth-color-page">
        <div className="color-text-box">
          <h1 className="color-text">한 가지의 색을 골라주세요.</h1>
        </div>
        <div data-value={13} onClick={saveColors} className="color13"></div>
        <div data-value={14} onClick={saveColors} className="color14"></div>
        <div data-value={15} onClick={saveColors} className="color15"></div>
        <div data-value={16} onClick={saveColors} className="color16"></div>
      </section>
    </div>
  );
}

export default ChooseColor4;
