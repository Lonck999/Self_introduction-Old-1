import React from "react";
import "./about.css";
import ME from "../../assets/fun.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>0 - 1 Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>10+ Taiwanese</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Porjects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            您好,我叫做蕭浩廷,目前剛從資策會前端培訓班結訓,在樂天時因經常接觸下有興趣並投身到這產業,目前會HTML、CSS、SASS、JS、bootstrap、React有接觸過一些後端的東西像是MySQL
            Node.js,目前版本控管是用Git、Github在培训班期也有跟位業界朋友一起接案,實際接觸案子如果到有運作運行,邊做邊學,目前已接過兩個案子都是用(Vue),React的部分除了現在這個自介網頁外在結訓專題上也有實際操做過。
            <br />
            自己的優勢: <br />
            1.有實際接觸過案子的經驗更知道如何團隊合作、溝通。 <br />
            2.可自己獨立切版。 <br />
            3.做RWD。
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
