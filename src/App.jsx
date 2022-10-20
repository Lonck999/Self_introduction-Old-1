import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Hearder from "./components/hearder/Hearder";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Hearder />
      <Nav />
      <About />
      <Experience />
      {/* <Services/>先不顯示等跟接案小組討論了再說 */}
      <Portfolio />
      {/* <Testimonials/> 先不顯示等真的有人願意寫在說 */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
