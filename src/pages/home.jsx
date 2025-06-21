import React, { useEffect } from "react";
import "../styles/home.css";
import NavBar from "../components/nav";
import image from "../assets/back.png";
import drake from "../assets/myimage.png";
import app from "../assets/4708214.webp";
import SEO from "../assets/seo.png";
import web from "../assets/17365478.png";
import marketing from "../assets/marketing.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/footer";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="main px-6">
      <main>
        <NavBar />
        <div className="hero max-md:flex-col ">
          <div className="hero-text" data-aos="fade-right">
            <h1> WEBSITES, APPS, SEO, MARKETING.</h1>
            <p>
              your business needs more visibility online. let's build a scalable
              modern website, make an app and make it more visible for you.
            </p>
            <button>start now</button>
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <img src={image} alt="image potrayin web development" />
          </div>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7f7f7" fill-opacity="1" 
                d="M0,224L40,224C80,224,160,224,240,234.7C320,245,400,267,480,256C560,245,640,203,720,197.3C800,192,880,224,960,
                240C1040,256,1120,256,1200,256C1280,256,1360,256,1400,256L1440,256L1440,320L1400,320C1360,320,1280,320,1200,
                320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}

        <div className="me max-md:flex-col">
          <div className="text" data-aos="fade-up">
            <p>hello,</p>
            <h2>I'm Mugisha Drake</h2>
            <p>
              I'm a web developer and a digital marketing expert. I help
              businesses and individuals create a strong visisbility of their
              product
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <img src={drake} alt="a picture of drake" />
          </div>
        </div>
        <div className="skills max-md:flex-wrap">
          <div className="card" data-aos="zoom-in" data-aos-delay="0">
            <img src={app} alt="app" />
            <p>app development</p>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="100">
            <img src={SEO} alt="app" />
            <p>search engine optimization</p>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <img src={marketing} alt="app" />
            <p>marketing </p>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="300">
            <img src={web} alt="app" />
            <p>web development</p>
          </div>
        </div>

        <div className="services">
          <p>why me.</p>
          <h2>Quality, Structure and Efficiency</h2>
          <div className="service max-md:flex-col">
            <div className="service-text" data-aos="fade-up">
              <p>web development</p>
              <h2>Modern, Responsive, For you</h2>
              <p>
                I create websites that are modern, responsive and user friendly.
                I use the latest technologies to ensur
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <img src={web} alt="" />
            </div>
          </div>
          <div className="service max-md:flex-col-reverse">
            <div data-aos="fade-up" data-aos-delay="300">
              <img src={app} alt="" />
            </div>
            <div className="service-text" data-aos="fade-up">
              <p>App development</p>
              <h2>Modern, Android, App storee</h2>
              <p>
                I create apps that are modern for both android and app store I
                use the latest technologies to ensure spead and scalability
              </p>
            </div>
          </div>
          <div className="service max-md:flex-col">
            <div className="service-text" data-aos="fade-up">
              <p>Search engine optimization</p>
              <h2>visibilty, marketing</h2>
              <p>
                let everyone see your website with my SEO services. I use the
                best tools.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <img src={SEO} alt="" />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default Home;
