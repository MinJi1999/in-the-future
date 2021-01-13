import React from 'react'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

function Letter() {
    return (
        <section className="about">
            <div className="about-text-container">
                <ScrollAnimation animateIn="fadeIn" className="about-first-text">
                    안녕, 그곳의 나는 어때?
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" className="about-second-text">
                이걸 보며 웃고 있을 네가 상상되네
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" className="about-third-text">
                이렇게 또 시간이 지나갔구나,
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" className="about-fourth-text">
                그랬던 시간들이 지나 지금이 왔구나,
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" className="about-fifth-text">
                그리고 그 지금이<br />매우 행복할 거란 것도 말이야.
                </ScrollAnimation>
            </div>
    </section>
    )
}

export default Letter;
