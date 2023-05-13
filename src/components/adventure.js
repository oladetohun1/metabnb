import card1 from "../Assets/images/card-01.png";
import card2 from "../Assets/images/card-02.png";
import card3 from "../Assets/images/card-03.png";
import card4 from "../Assets/images/card-04.png";
import card5 from "../Assets/images/card-05.png";
import card6 from "../Assets/images/card-06.png";
import card7 from "../Assets/images/card-07.png";
import card8 from "../Assets/images/card-08.png";

function Adventure() {
  return (
    <section className="adventures" id="community">
        <div className="adventures__title">
            <h1>Inspiration for your next adventure</h1>
        </div>
      <div className="adventures__cards">
        <img className="adventures__cards-img one" src={card1} alt=""/>
        <img className="adventures__cards-img two" src={card2} alt=""/>
        <img className="adventures__cards-img three" src={card3} alt=""/>
        <img className="adventures__cards-img four" src={card4} alt=""/>
        <img className="adventures__cards-img five" src={card5} alt=""/>
        <img className="adventures__cards-img six" src={card6} alt=""/>
        <img className="adventures__cards-img seven" src={card7} alt=""/>
        <img className="adventures__cards-img eight" src={card8} alt=""/>
      </div>
    </section>
  );
}

export default Adventure;
