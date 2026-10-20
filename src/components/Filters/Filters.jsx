import { useEffect, useState } from "react";
import "./Filters.css";

const colorMap = {
  Black: "#1a1a1a",
  Blue: "#2563eb",
  "Dark Blue": "#1e3a5f",
  "Dark Gray": "#4b5563",
  Green: "#16a34a",
  "Metallic Green": "#4a7c59",
  Red: "#dc2626",
  White: "#f1f5f9",
  Yellow: "#eab308",
};

function Filters({
  selectedBrands,
  setSelectedBrands,
  selectedColors,
  setSelectedColors,
  selectedFuelType,
  setSelectedFuelType,
  selectedTransmission,
  setSelectedTransmission,
  selectedMinPrice,
  setSelectedMinPrice,
  selectedMaxPrice,
  setSelectedMaxPrice,
  handleApplyFilters,
  handleClearFilters,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [brands, setBrands] = useState([]); //όταν ανοίγει για πρώτη φορά το component, δεν έχουμε ακόμα πάρει τα brands από το backend.
  const [colors, setColors] = useState([]);
  const [fuelType, setFuelType] = useState([]);
  const [transmission, setTransmission] = useState([]);

  useEffect(() => {
    //React, θέλω όταν φορτωθεί αυτό το component να κάνεις κάποια δουλειά
    fetch("http://localhost:5274/api/cars/brands") //Το fetch σημαίνει: Πήγαινε σε αυτή τη διεύθυνση και ζήτα δεδομένα.
      .then((response) => response.json())
      .then((data) => {
        setBrands(data); //γεμιζουμε τον πινακα με τα brands απο την βαση.
      })
      .catch((error) => {
        console.error("ERROR:", error);
      });
  }, []); //Τρέξε αυτό το effect μόνο όταν εμφανιστεί για πρώτη φορά το component.

  useEffect(() => {
    //React, θέλω όταν φορτωθεί αυτό το component να κάνεις κάποια δουλειά
    fetch("http://localhost:5274/api/cars/colors") //Το fetch σημαίνει: Πήγαινε σε αυτή τη διεύθυνση και ζήτα δεδομένα.
      .then((response) => response.json())
      .then((data) => {
        setColors(data); //γεμιζουμε τον πινακα με τα brands απο την βαση.
      })
      .catch((error) => {
        console.error("ERROR:", error);
      });
  }, []); //Τρέξε αυτό το effect μόνο όταν εμφανιστεί για πρώτη φορά το component.

  useEffect(() => {
    fetch("http://localhost:5274/api/cars/fuelType")
      .then((response) => response.json())
      .then((data) => {
        setFuelType(data);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5274/api/cars/transmission")
      .then((response) => response.json())
      .then((data) => {
        setTransmission(data);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }, []);

  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((selectedBrand) => selectedBrand !== brand), //ξε-τσεκάρει αν υπάρχει ηδη μεσα στον πινακα
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]); //Φτιάξε ένα νέο array που να περιέχει ό,τι είχα πριν + το καινούργιο brand, αρα γινεται οταν τσεκαρουμε ενα brand
    }
  };

  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(
        selectedColors.filter((selectedColors) => selectedColors !== color), //ξε-τσεκάρει αν υπάρχει ηδη μεσα στον πινακα
      );
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleFuelTypeChange = (fuelType) => {
    if (selectedFuelType.includes(fuelType)) {
      setSelectedFuelType(
        selectedFuelType.filter(
          (selectedFuelType) => selectedFuelType !== fuelType,
        ), //ξε-τσεκάρει αν υπάρχει ηδη μεσα στον πινακα
      );
    } else {
      setSelectedFuelType([...selectedFuelType, fuelType]);
    }
  };

  const handleTransmissionChange = (transmission) => {
    if (selectedTransmission.includes(transmission)) {
      setSelectedTransmission(
        selectedTransmission.filter(
          (selectedTransmission) => selectedTransmission !== transmission,
        ), //ξε-τσεκάρει αν υπάρχει ηδη μεσα στον πινακα
      );
    } else {
      setSelectedTransmission([...selectedTransmission, transmission]);
    }
  };

  return (
    <>
      <button className="openFiltersButton" onClick={() => setIsOpen(true)}>
        ☰ Filters
      </button>

      <div className={`filtersSidebar ${isOpen ? "open" : ""}`}>
        <div className="filtersHeader">
          <h2>Filters</h2>

          <button
            className="closeFiltersButton"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="filtersContent">
          {/* Brand */}
          <div className="filterSection">
            <div className="filterTitles">Brand</div>
            <div className="pillGroup">
              {[...brands].sort().map((brand) => (
                <button
                  key={brand}
                  className={`pill ${selectedBrands.includes(brand) ? "pill--active" : ""}`}
                  onClick={() => handleBrandChange(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div className="filterDivider" />

          {/* Price */}
          <div className="filterSection">
            <div className="filterTitles">Price</div>
            <div className="priceInputs">
              <div className="priceInputWrapper">
                <span className="priceSymbol">€</span>
                <input
                  type="number"
                  placeholder="Min"
                  value={selectedMinPrice}
                  onChange={(event) => setSelectedMinPrice(event.target.value)}
                />
              </div>
              <span className="priceSeparator">—</span>
              <div className="priceInputWrapper">
                <span className="priceSymbol">€</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={selectedMaxPrice}
                  onChange={(event) => setSelectedMaxPrice(event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="filterDivider" />

          {/* Color */}
          <div className="filterSection">
            <div className="filterTitles">Color</div>
            <div className="colorSwatchGroup">
              {[...colors].sort().map((color) => (
                <button
                  key={color}
                  className={`colorSwatch ${selectedColors.includes(color) ? "colorSwatch--active" : ""}`}
                  onClick={() => handleColorChange(color)}
                  title={color}
                >
                  <span
                    className="swatchDot"
                    style={{ backgroundColor: colorMap[color] ?? "#ccc" }}
                  />
                  <span className="swatchLabel">{color}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="filterDivider" />

          {/* Fuel Type */}
          <div className="filterSection">
            <div className="filterTitles">Fuel Type</div>
            <div className="pillGroup">
              {[...fuelType].sort().map((fuelType) => (
                <button
                  key={fuelType}
                  className={`pill ${selectedFuelType.includes(fuelType) ? "pill--active" : ""}`}
                  onClick={() => handleFuelTypeChange(fuelType)}
                >
                  {fuelType}
                </button>
              ))}
            </div>
          </div>

          <div className="filterDivider" />
          {/* Transmission */}
          <div className="filterSection">
            <div className="filterTitles">Transmission</div>
            <div className="pillGroup">
              {[...transmission].sort().map((transmission) => (
                <button
                  key={transmission}
                  className={`pill ${selectedTransmission.includes(transmission) ? "pill--active" : ""}`}
                  onClick={() => handleTransmissionChange(transmission)}
                >
                  {transmission}
                </button>
              ))}
            </div>
          </div>

          <div className="filterDivider" />
          <div className="bottomBtns">
            <button
              className="clearFiltersBtn"
              onClick={() => handleClearFilters()}
            >
              Clear All
            </button>

            <button
              className="applyFiltersBtn"
              onClick={() => handleApplyFilters()}
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filters;
