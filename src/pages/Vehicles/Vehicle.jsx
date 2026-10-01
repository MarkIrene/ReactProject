import { useEffect, useState } from "react";
import "./Vehicle.css";
import CarCard from "../../components/CarCard/CarsCard.jsx";

function Vehicles() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5274/api/cars")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cars");
        }

        return response.json();
      })
      .then((data) => {
        setCars(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="VehiclesMain">
      <p className="vehiclesTitle">Our Vehicles</p>

      <div className="containerOfCards">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Vehicles;
