import React from 'react';
import "./About.css";

function About() {
    return (
        <div className="about-container">
            <span>
                “컴퓨터가 이해할수 있는 코드는 어느 바보나 다 짤수 있다. 좋은 프로그래머는 사람이 이해할 수 있는 코드를 짠다.”
            </span>
            <span>− Martin Fowler</span>
        </div>
    );
};

export default About;