import * as React from "react";
import Image from "../images/sea.jpg";
import NavBar from "./NavBar/NavBar";
import Letter from "./Letter";
import Introduce from "./Introduce";

function Main(props) {
  const [Today, setToday] = React.useState("");
  const [Future, setFuture] = React.useState("");
  React.useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    setToday(`${year}.${month}.${date}`);
    const futureYear =
      year + Math.round(Math.random() * 10) * Math.round(Math.random() * 10);
    const futureMonth = Math.round(Math.random() * 10) + 2;

    if (
      futureMonth === 4 ||
      futureMonth === 6 ||
      futureMonth === 9 ||
      futureMonth === 11
    ) {
      const futureDate = Math.round(Math.random() * 10) + 20;
      if (futureYear === year && futureMonth < month) {
        setFuture(`${futureYear + 1}.${futureMonth}.${futureDate}`);
      } else {
        setFuture(`${futureYear}.${futureMonth}.${futureDate}`);
      }
    } else if (
      futureMonth === 1 ||
      futureMonth === 3 ||
      futureMonth === 5 ||
      futureMonth === 7 ||
      futureMonth === 8 ||
      futureMonth === 10 ||
      futureMonth === 12
    ) {
      const futureDate = Math.round(Math.random() * 10) + 21;
      if (futureYear === year && futureMonth < month) {
        setFuture(`${futureYear + 1}.${futureMonth}.${futureDate}`);
      } else {
        setFuture(`${futureYear}.${futureMonth}.${futureDate}`);
      }
    }

    if (futureMonth === 2) {
      const futureDate = Math.round(Math.random() * 10) + 18;
      if (futureYear === year && futureMonth < month) {
        setFuture(`${futureYear + 1}.${futureMonth}.${futureDate}`);
      } else {
        setFuture(`${futureYear}.${futureMonth}.${futureDate}`);
      }
    }
  }, []);

  return (
    <>
      <section className="first-page">
        <div className="left-side-page">
          <p className="first-page-title">
            미래의 나에게
            <br />
            전하고 싶은 말이 있나요?
          </p>
          <p className="first-page-sentence">
            가슴 벅차도록 기뻤던 날, 하늘이 무너지듯 슬펐던 날, 평소와
            <br />
            별 다름없었던 날, 침대에서 뒹굴뒹굴하기만 했던 날<br />
            당신이 흘려보냈던 그 모든 시간들을 모아 미래의 당신에게
            <br />
            전해보세요. 몇 십 년이 지나, 그때의 기억과 감정들이 희미해졌대도,
            <br />
            다시 생생하게 당신의 마음속에 가득 채워질 거예요.
            <br />
            우리가 당신의 과거와 미래를 이어주는 매개체가 되어 드릴게요.
          </p>
        </div>
        <div className="right-side-page">
          <NavBar />
          <div className="today-text">{Today}</div>
          <div className="line"></div>
          <div className="future-text">{Future}</div>
          <img className="sea-pic" src={Image} alt="sea" />
          <div className="bottom-text"></div>
        </div>
      </section>
      <Letter />
      <Introduce />
    </>
  );
}

export default Main;
