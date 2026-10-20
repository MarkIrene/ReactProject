import { useEffect, useState } from "react";
import "./Vehicle.css";
import CarCard from "../../components/CarCard/CarsCard.jsx";
import Filters from "../../components/Filters/Filters.jsx";

function Vehicles() {
  const [cars, setCars] = useState([]);
  const [isUsed, setIsUsed] = useState(true);

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedFuelType, setSelectedFuelType] = useState([]);
  const [selectedTransmission, setSelectedTransmission] = useState([]);
  const [selectedMinPrice, setSelectedMinPrice] = useState("");
  const [selectedMaxPrice, setSelectedMaxPrice] = useState("");

  const [filteredCars, setFilteredCars] = useState(cars);

  useEffect(() => {
    fetch(`http://localhost:5274/api/cars?isUsed=${isUsed}`)
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setFilteredCars(data);
      })
      .catch((error) => {
        console.error("ERROR:", error);
      });
  }, [isUsed]); //τρέξε το effect όταν φορτώσει το component και κάθε φορά που αλλάζει το isUsed.

  function handleApplyFilters() {
    const filtered = cars.filter(
      (x) =>
        (selectedBrands.length === 0 || selectedBrands.includes(x.brand)) &&
        (selectedColors.length === 0 || selectedColors.includes(x.color)) &&
        (selectedFuelType.length === 0 ||
          selectedFuelType.includes(x.fuelType)) &&
        (selectedTransmission.length === 0 ||
          selectedTransmission.includes(x.transmission)) &&
        (selectedMinPrice === "" || Number(selectedMinPrice) <= x.price) &&
        (selectedMaxPrice === "" || Number(selectedMaxPrice) >= x.price),
    );
    console.log("filtered:", filtered);
    setFilteredCars(filtered);
    console.log("min:", selectedMinPrice, "type:", typeof selectedMinPrice);
    console.log("max:", selectedMaxPrice, "type:", typeof selectedMaxPrice);
  }

  function handleClearFilters() {
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedFuelType([]);
    setSelectedTransmission([]);
    setSelectedMinPrice("");
    setSelectedMaxPrice("");
    setFilteredCars(cars);
  }

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
          <Filters
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            selectedFuelType={selectedFuelType}
            setSelectedFuelType={setSelectedFuelType}
            selectedTransmission={selectedTransmission}
            setSelectedTransmission={setSelectedTransmission}
            selectedMinPrice={selectedMinPrice}
            setSelectedMinPrice={setSelectedMinPrice}
            selectedMaxPrice={selectedMaxPrice}
            setSelectedMaxPrice={setSelectedMaxPrice}
            handleApplyFilters={handleApplyFilters}
            handleClearFilters={handleClearFilters}
          />
        </aside>
        <div className="containerOfCards">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Vehicles;
