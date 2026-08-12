import "./FilterBar.css";

function FilterBar({
  vegOnly,
  setVegOnly,
  nonVegOnly,
  setNonVegOnly,
  spicyOnly,
  setSpicyOnly,
}) {
  const handleVegChange = () => {
    const newValue = !vegOnly;
    setVegOnly(newValue);

    // If Veg is selected, unselect Non-Veg
    if (newValue) {
      setNonVegOnly(false);
    }
  };

  const handleNonVegChange = () => {
    const newValue = !nonVegOnly;
    setNonVegOnly(newValue);

    // If Non-Veg is selected, unselect Veg
    if (newValue) {
      setVegOnly(false);
    }
  };

  const handleSpicyChange = () => {
    setSpicyOnly(!spicyOnly);
  };

  return (
    <div className="filter-bar">

      <label className="filter-item">
        <input
          type="checkbox"
          checked={vegOnly}
          onChange={handleVegChange}
        />
        🌱 Veg
      </label>

      <label className="filter-item">
        <input
          type="checkbox"
          checked={nonVegOnly}
          onChange={handleNonVegChange}
        />
        🍗 Non-Veg
      </label>

      <label className="filter-item">
        <input
          type="checkbox"
          checked={spicyOnly}
          onChange={handleSpicyChange}
        />
        🌶️ Spicy
      </label>

    </div>
  );
}

export default FilterBar;