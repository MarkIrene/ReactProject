import "./carCard.css";
import bmw from "../../assets/bmw.jpg";

function CarCard({ car }) {
  return (
    <div className="vehicleCard">
      <img src={car.imageUrl || bmw} className="vehicleCardImage" />

      <div className="vehicleCardOverlay"></div>
      <div className="vehicleCardInfo">
        <h5 className="vehicleCardTitle">
          {car.brand} {car.model}
        </h5>

        <div className="vehicleCardYear">{car.year}</div>
        <p className="vehicleCardPrice">{car.price} €</p>
      </div>
    </div>
  );
}

export default CarCard;
