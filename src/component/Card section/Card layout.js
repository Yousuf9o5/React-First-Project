import "./Card info";
import "./Card css file.css";

function CardsLayout(prop) {
  return (
    <div className="Card">
      <a href={prop.link}></a>
      <img src={prop.imgadd} alt={prop.alt} className="card-img" />
      <div>
        <label>
          Language:&nbsp;
          <span>{prop.language}</span>
        </label>
        <label>
          Creator:&nbsp;
          <span>{prop.Creator}</span>
        </label>
        <label>
          Description:&nbsp;
          <span>{prop.Description}</span>
        </label>
      </div>
    </div>
  );
}

export default CardsLayout;
