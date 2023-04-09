import card11 from "../Assets/images/card-11.png";
import card12 from "../Assets/images/card-12.png";
import card13 from "../Assets/images/card-13.png";
import card14 from "../Assets/images/card-14.png";
import card15 from "../Assets/images/card-15.png";
import card16 from "../Assets/images/card-16.png";
import card09 from "../Assets/images/card-09.png";
import card10 from "../Assets/images/card-10.png";
import card1 from "../Assets/images/card-01.png";
import card2 from "../Assets/images/card-02.png";
import card3 from "../Assets/images/card-03.png";
import card4 from "../Assets/images/card-04.png";
import card5 from "../Assets/images/card-05.png";
import card6 from "../Assets/images/card-06.png";
import card7 from "../Assets/images/card-07.png";
import card8 from "../Assets/images/card-08.png";
function Place() {
  return (
    <section className="place">
      <div className="place__title">
        <ul className="place-list header__nav-list">
          <li className="header__nav-item place-item">Restaurant</li>
          <li className="header__nav-item place-item">Cottage</li>
          <li className="header__nav-item place-item">Castle</li>
          <li className="header__nav-item place-item">Fantast city</li>
          <li className="header__nav-item place-item">Beach</li>
          <li className="header__nav-item place-item">Cabins</li>
          <li className="header__nav-item place-item">Off-grid</li>
          <li className="header__nav-item place-item">Farm</li>
          <li className="header__nav-item place-item">Location</li>
        </ul>
      </div>
      <div className="adventures__cards">
        <img className="adventures__cards-img one" src={card1} alt="" />
        <img className="adventures__cards-img two" src={card2} alt="" />
        <img className="adventures__cards-img three" src={card3} alt="" />
        <img className="adventures__cards-img four" src={card4} alt="" />
        <img className="adventures__cards-img five" src={card5} alt="" />
        <img className="adventures__cards-img six" src={card6} alt="" />
        <img className="adventures__cards-img seven" src={card7} alt="" />
        <img className="adventures__cards-img eight" src={card8} alt="" />
        <img className="adventures__cards-img one" src={card11} alt="" />
        <img className="adventures__cards-img two" src={card12} alt="" />
        <img className="adventures__cards-img three" src={card13} alt="" />
        <img className="adventures__cards-img four" src={card14} alt="" />
        <img className="adventures__cards-img five" src={card15} alt="" />
        <img className="adventures__cards-img six" src={card16} alt="" />
        <img className="adventures__cards-img seven" src={card09} alt="" />
        <img className="adventures__cards-img eight" src={card10} alt="" />
      </div>
    </section>
  );
}

export default Place;
