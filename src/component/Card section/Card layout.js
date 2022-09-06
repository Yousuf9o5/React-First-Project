import "./Card info";
import "./Card css file.css";

function CardsLayout(prop) {
  return (
    <div className="Card">
      <a href={prop.link}></a>
      <img src={prop.imgadd} alt={prop.alt} className="card-img" />
      <div>
        <label>
          Language:
          <span>{prop.language}</span>
        </label>
        <label>
          Creator:
          <span>{prop.Creator}</span>
        </label>
        <label>
          Description:
          <span>{prop.Description}</span>
        </label>
      </div>
    </div>
  );
}

export default CardsLayout;
