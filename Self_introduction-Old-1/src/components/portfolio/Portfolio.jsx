import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpeg";
import IMG4 from "../../assets/portfolio4.jpeg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpeg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "(React)個人自介網頁",
    github: "https://github.com/Lonck999/Portfolio",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "(React)Ebook網路書店",
    github: "https://github.com/Anthya1104/ebook-fe",
    demo: "https://youtu.be/AHDZYN26cng?t=7758",
  },
  {
    id: 3,
    image: IMG3,
    title: "(3D選單)3D Isometric Social Media Menu Hover Effects",
    github: "https://github.com/Lonck999/Portfolio/tree/master/ui/(3D%E9%81%B8%E5%96%AE)3D%20Isometric%20Social%20Media%20Menu%20Hover%20Effects",
    demo: "https://codepen.io/jwzizdkp-the-vuer/pen/XWEbeNJ",
  },
  {
    id: 4,
    image: IMG4,
    title: "(選單文字動畫)Menu-Hover-Text-Animaation-Effects",
    github: "https://github.com/Lonck999/Portfolio/tree/master/ui/(%E9%81%B8%E5%96%AE%E6%96%87%E5%AD%97%E5%8B%95%E7%95%AB)Menu-Hover-Text-Animaation-Effects",
    demo: "https://codepen.io/jwzizdkp-the-vuer/pen/abGMXZR",
  },
  {
    id: 5,
    image: IMG5,
    title: "(放大卡片)Expanding-Flex-Cards",
    github: "https://github.com/Lonck999/Portfolio/tree/master/ui/(%E6%94%BE%E5%A4%A7%E5%8D%A1%E7%89%87)Expanding-Flex-Cards",
    demo: "https://codepen.io/z-/pen/OBPJKK",
  },
  {
    id: 6,
    image: IMG6,
    title: "(背景更換)Menu Hover Effects Change Background",
    github: "https://github.com",
    demo: "https://youtu.be/AHDZYN26cng?t=8008",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
