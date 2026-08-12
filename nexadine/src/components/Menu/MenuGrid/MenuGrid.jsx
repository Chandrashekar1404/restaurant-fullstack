import "./MenuGrid.css";
import { useState } from "react";
import MenuCard from "../MenuCard/MenuCard";
import Pagination from "../Pagination/Pagination";


function MenuGrid({
  menuItems,
  addToCart,
  setSelectedFood,
}) {

  const [currentPage, setCurrentPage] = useState(1);

  // Show 6 items per page
  const itemsPerPage = 6;


  if (!menuItems || menuItems.length === 0) {
    return (
      <div className="no-food">
        <h2>🍽 No menu items found</h2>
        <p>Try another search.</p>
      </div>
    );
  }


  // Total number of pages
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);


  // Current page items
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentItems = menuItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );


  return (
    <>
      <div className="menu-grid">
        {currentItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            addToCart={addToCart}
            setSelectedFood={setSelectedFood}
          />
        ))}
      </div>


      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

    </>
  );
}

export default MenuGrid;