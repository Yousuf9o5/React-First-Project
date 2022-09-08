import "./Card css file.css";
import CardsInfo from "./Card info";
import CardsLayout from "./Card layout";

function mapping() {
  const info = CardsInfo().map((x) => (
    <CardsLayout
      key={x.id}
      link={x.link}
      imgadd={x.imgadd}
      alt={x.alt}
      language={x.language}
      Creator={x.Creator}
      Description={x.Description}
    />
  ));

  return info;
}

function Cards() {
  return <div className="Cards">{mapping()}</div>;
}

export default Cards;
