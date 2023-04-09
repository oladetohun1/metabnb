import image1 from "../Assets/images/image_3rent1.png";
import image2 from "../Assets/images/image_4rent1.png";
import image3 from "../Assets/images/image_5rent1.png";
import image4 from "../Assets/images/image_6rent1.png";

const doSomething = (e) => {
  e.preventDefault();
  console.log("Searching for location");
};
function Search() {
  return (
    <section className="header-search">
      <div className="header-search__text">
        <p>
          Rent a <span>Place</span> away from <span>Home</span> in the{" "}
          <span>Metaverse</span>{" "}
        </p>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        
        <form onSubmit={doSomething}>
          <input
            type="text"
            placeholder="Search for location"
            className="header-search__input"
          />
          <button type="submit" className="header-search__btn">
            Search
          </button>
        </form>
      </div>
      <div className="header-search__card">
        <div className="header-search__card--one">
        <img src={image2} alt="" className="header-search__card-card-2" />

          <img src={image4} alt="" className="header-search__card-card-4" />
          
   
        </div>
        <div className="header-search__card--two">
        <img src={image1} alt="" className="header-search__card-card-1" />
              <img src={image3} alt="" className="header-search__card-card-3" />


        </div>
      </div>
    </section>
  );
}

export default Search;
