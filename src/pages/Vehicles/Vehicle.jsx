import { useEffect, useState } from "react";
import "./Vehicle.css";
import CarCard from "../../components/CarCard/CarsCard.jsx";

function Vehicles() {
  const [cars, setCars] = useState([]);
  const [isUsed, setIsUsed] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5274/api/cars?isUsed=${isUsed}`)
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
      })
      .catch((error) => {
        console.error("ERROR:", error);
      });
  }, [isUsed]); //τρέξε το effect όταν φορτώσει το component και κάθε φορά που αλλάζει το isUsed.

  return (
    <>
      <main className="VehiclesTabs">
        <div className="vehiclesTitle">What are you looking for?</div>
        <button
          className={isUsed ? "vehicleTab activeTab" : "vehicleTab"}
          onClick={() => setIsUsed(true)}
        >
          Used Cars
        </button>

        <button
          className={!isUsed ? "vehicleTab activeTab" : "vehicleTab"}
          onClick={() => setIsUsed(false)}
        >
          New Cars
        </button>
      </main>
      <div className="ContainerFiltersAndCards">
        <aside className="filtersContainer">
          <h2>hello</h2>
        </aside>
        <div className="containerOfCards">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Vehicles;
