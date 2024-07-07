import Link from "next/link";
import "../../componentsstsyles/HeroSection/Hero.css";
import Calculator from "../calculator/Calculator";
import { Title } from "../header/Title";

export const Hero = () => {
  return (
    <section className="bmi-calc-main-hero-section playwrite-de-grund">
      <div className="bmi-calc-main-hero-section-one">
        <div className="hero-section-one-title">
          <Title />
          <Calculator />
        </div>
      </div>
      <div className="bmi-calc-main-hero-section-two">
        <Link
          href="https://www.freepik.com/free-photo/posing-athletes-holding-weights_6412611.htm#from_view=detail_alsolike"
          target="_blank"
        >
          Image by freepik
        </Link>
      </div>
    </section>
  );
};
