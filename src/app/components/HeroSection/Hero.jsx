import "../../componentsstsyles/HeroSection/Hero.css";
import { Title } from "../header/Title";

export const Hero = () => {
  return (
    <section className="bmi-calc-main-hero-section">
      <div className="bmi-calc-main-hero-section-one">
        <div className="hero-section-one-title">
          <Title />
        </div>
      </div>
      <div className="bmi-calc-main-hero-section-two">
        <a href="https://www.freepik.com/free-photo/posing-athletes-holding-weights_6412611.htm#from_view=detail_alsolike">
          Image by freepik
        </a>
      </div>
    </section>
  );
};
