import * as React from "react";
import { useDispatch } from "react-redux";
import "./custom.css";
import Image from "../../images/cutted-letter.png";
import Image2 from "../../images/cutted-paper.png";
import { getCartItems } from "../../../_actions/user_actions";
import CartPage from "../CartPage/CartPage";

function Custom(props) {
  const dispatch = useDispatch();
  const firstColorLS = localStorage.getItem("color");
  const secondColorLS = localStorage.getItem("color2");
  const thirdColorsLS = localStorage.getItem("color3");
  const fourthColorsLS = localStorage.getItem("color4");

  const [loading, setLoading] = React.useState(true);
  const [secondLoading, setSecondLoading] = React.useState(true);
  const [product, setProduct] = React.useState("");
  const [secondProduct, setSecondProduct] = React.useState("");

  const colorArray = [];
  colorArray.push(firstColorLS, secondColorLS, thirdColorsLS, fourthColorsLS);

  // React.useEffect(() => {
  //   if (colorArray) {
  //     dispatch(chooseColor(colorArray));
  //   }
  // }, []);

  const canChooseColorAgain = function () {
    localStorage.removeItem("color");
    localStorage.removeItem("color2");
    localStorage.removeItem("color3");
    localStorage.removeItem("color4");
    props.history.push("/chooseColor");
  };

  //고른 이미지 뿌려주기
  React.useEffect(() => {
    let cartItems = [];
    //if (props.user.userData?.cart) //props.user.userData가 있으면 cart값을 주고 아니면 undefined나 null 값을 줌
    if (props.user.userData) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });
        dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
          (res) => {
            const responseLength = res.payload.length;
            const response = res.payload;
            switch (responseLength) {
              case 1:
                setLoading(false);
                setSecondLoading(true);
                setProduct(response[0].images[0]);
                break;
              case 2:
                setLoading(false);
                setSecondLoading(false);
                setProduct(response[0].images[0]);
                setSecondProduct(response[1].images[0]);
                break;
              default:
                setLoading(false);
                setSecondLoading(false);
                setProduct(response[0].images[0]);
                setSecondProduct(response[1].images[0]);
                break;
            }
          }
        );
      } else {
        setLoading(true);
        setSecondLoading(true);
      }
    }
  }, [props.user.userData, dispatch]);

  return (
    <>
      <section className="confirm">
        <div className="link-to-chooseColor-page" onClick={canChooseColorAgain}>
          <i
            className="fas fa-arrow-left"
            style={{
              fontSize: "40px",
              position: "absolute",
              left: "12.5%",
              top: "49.5%",
              color: "#e0e0e0",
            }}
          ></i>
          <div className="cutted-paper-text">색 다시 고르기</div>
        </div>
        <img className="cutted-paper" src={Image} alt="cutted paper" />
        <div className="paper-acc-colors">
          <div className="letter-paper-box">
            {loading ? (
              <h2
                style={{
                  color: "rgba(83, 83, 83, 0.5)",
                  margin: "81px auto",
                  width: "172px",
                  height: "87px",
                  textAlign: "center",
                  backgroundColor: "rgb(200, 200, 200, 0.4)",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
                onClick={() => {
                  props.history.push("/product/letterpaper");
                }}
              >
                상품이 없습니다.
                <br />
                여기를 누르면 고르러 갈 수 있어요!
              </h2>
            ) : (
              <img className={"letter-paper"} src={product} alt="letter" />
            )}
            <p className="paper-text">Letter Paper</p>
          </div>
          <div className="letter-acc-box">
            {secondLoading ? (
              <h2
                style={{
                  color: "rgba(83, 83, 83, 0.5)",
                  margin: "28px auto",
                  padding: "10px",
                  width: "250px",
                  textAlign: "center",
                  backgroundColor: "rgb(200, 200, 200, 0.4)",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
                onClick={() => {
                  props.history.push("/product/letterpaper");
                }}
              >
                상품이 없습니다.
                <br />
                여기를 누르면 고르러 갈 수 있어요!
              </h2>
            ) : (
              <img
                className={"letter-acc"}
                src={secondProduct}
                alt="accessary"
              />
            )}
            <p className="acc-text">Accessary</p>
          </div>
          <div className="colors-container">
            <div className="color-box1">
              <div
                style={{ backgroundColor: firstColorLS }}
                className="chosen-color1"
              ></div>
              <p className="color-name">{firstColorLS}</p>
            </div>
            <div className="color-box2">
              <div
                style={{ backgroundColor: secondColorLS }}
                className="chosen-color2"
              ></div>
              <p className="color-name">{secondColorLS}</p>
            </div>
            <div className="color-box3">
              <div
                style={{ backgroundColor: thirdColorsLS }}
                className="chosen-color3"
              ></div>
              <p className="color-name">{thirdColorsLS}</p>
            </div>
            <div className="color-box4">
              <div
                style={{ backgroundColor: fourthColorsLS }}
                className="chosen-color4"
              ></div>
              <p className="color-name">{fourthColorsLS}</p>
            </div>
          </div>
        </div>
        <div className="explanation-container">
          <h1 className="title">편지의 분위기.</h1>
          <div className="sentence-container">
            <p className="sentence">
              여러분이 고심 끝에 고른 색과 아름다운 장식품들을
              <br /> 고운 색으로 어우러지게 조합할 거예요.
              <br />
              약간의 시간이 지난 뒤, 편지를 받게 될 여러분의
              <br />
              입가에 따듯한 미소가 번지길 바라며 향내 나는 종이 위에 당신의
              <br />
              편지를 옮기고 아름다운 조각들로 이어붙일 거랍니다.
              <br />
            </p>
            <p className="second-sentence">
              여러분이 진심을 다해 적은 편지 내용이 저희에게 보여지는 것에는
              전혀 걱정하지
              <br /> 않아도 돼요. 저희에게는 약 20분 뒤면 편지를 쓴 동안의
              기억이 잊혀지는
              <br />
              <span className="magic">마법</span>이 있답니다! 그러니 걱정말고
              미래의 나 자신에게
              <br />
              전해줄 이야기를 남기면 된답니다.
            </p>
          </div>
        </div>
        {/* <i
          className="fas fa-level-down-alt"
          style={{
            transform: "scaleX(-1)",
            fontSize: "40px",
            position: "absolute",
            right: "275px",
            bottom: "30px",
            color: "#e9c3a0",
          }}
        ></i> */}
        {/* <div className="under-cutted-paper-image-text">장바구니로 가기</div> */}
        <img className="cutted-paper2" src={Image2} alt="cutted-paper" />
      </section>
      <section className="success">
        <CartPage {...props} />
      </section>
    </>
  );
}

export default Custom;
