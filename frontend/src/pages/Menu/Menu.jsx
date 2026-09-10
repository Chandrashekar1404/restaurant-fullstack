import "./Menu.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import menuData from "../../data/menuData";

import SearchBar from "../../components/Menu/SearchBar/SearchBar";
import FilterBar from "../../components/Menu/FilterBar/FilterBar";
import CategoryTabs from "../../components/Menu/CategoryTabs/CategoryTabs";
import MenuGrid from "../../components/Menu/MenuGrid/MenuGrid";
import FoodModal from "../../components/Menu/FoodModal/FoodModal";

function Menu() {

  const { addToCart } = useCart();

  // ============================================
  // READ SEARCH FROM HEADER URL
  // ============================================

  const [searchParams, setSearchParams] = useSearchParams();

  const urlSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(urlSearch);

  const [category, setCategory] = useState("All");

  const [vegOnly, setVegOnly] = useState(false);

  const [nonVegOnly, setNonVegOnly] =
    useState(false);

  const [spicyOnly, setSpicyOnly] =
    useState(false);

  const [selectedFood, setSelectedFood] =
    useState(null);


  // ============================================
  // SEARCH BAR INSIDE MENU
  // ============================================

  const handleSearchChange = (value) => {

    setSearch(value);

    setSearchParams({
      search: value
    });

  };


  // ============================================
  // CATEGORIES
  // ============================================

  const categories = [
    "All",
    "Appetizers",
    "Salads",
    "Pizza",
    "Pasta",
    "Main Courses",
    "Burgers",
    "Sandwiches",
    "Desserts",
    "Beverages",
  ];


  // ============================================
  // FILTER MENU
  // ============================================

  const filteredItems = menuData.filter((item) => {

    const searchMatch =
      item.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" ||
      item.category === category;

    const vegMatch =
      !vegOnly ||
      item.type === "Veg";

    const nonVegMatch =
      !nonVegOnly ||
      item.type === "Non-Veg";

    const spicyMatch =
      !spicyOnly ||
      item.spicy === true;

    return (
      searchMatch &&
      categoryMatch &&
      vegMatch &&
      nonVegMatch &&
      spicyMatch
    );

  });


  return (

    <div className="menu-page">

      {/* ========================================
          HERO
      ======================================== */}

      <div className="menu-hero">

        <h1>
          🍽 GRAND NexaDine Restaurant
        </h1>

        <p>
          Fresh • Delicious • Fast Delivery
        </p>

      </div>


      {/* ========================================
          SEARCH
      ======================================== */}

      <SearchBar
        search={search}
        setSearch={handleSearchChange}
      />


      {/* ========================================
          FILTERS
      ======================================== */}

      <FilterBar
        vegOnly={vegOnly}
        setVegOnly={setVegOnly}

        nonVegOnly={nonVegOnly}
        setNonVegOnly={setNonVegOnly}

        spicyOnly={spicyOnly}
        setSpicyOnly={setSpicyOnly}
      />


      {/* ========================================
          CATEGORIES
      ======================================== */}

      <CategoryTabs
        categories={categories}
        category={category}
        setCategory={setCategory}
      />


      {/* ========================================
          ITEM COUNT
      ======================================== */}

      <h2 className="items-count">

        {filteredItems.length}

        {" "}

        Dishes Available

      </h2>


      {/* ========================================
          MENU GRID
      ======================================== */}

      <MenuGrid
        menuItems={filteredItems}
        addToCart={addToCart}
        setSelectedFood={setSelectedFood}
      />


      {/* ========================================
          FOOD MODAL
      ======================================== */}

      {selectedFood && (

        <FoodModal
          food={selectedFood}
          addToCart={addToCart}
          onClose={() =>
            setSelectedFood(null)
          }
        />

      )}

    </div>

  );

}

export default Menu;