import "./carCard.css";
import bmw from "../../assets/bmw.jpg";

function CarCard({ car }) {
  const imageUrl = car.imageUrl ? `http://localhost:5274${car.imageUrl}` : bmw;

  return (
    <div className="vehicleCard">
      <img
        src={imageUrl}
        className="vehicleCardImage"
        alt={`${car.brand} ${car.model}`}
        onError={(event) => {
          event.currentTarget.src = bmw;
        }}
      />

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
