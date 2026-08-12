import "./CategoryTabs.css";

function CategoryTabs({ category, setCategory }) {
  const categories = [
    "All",
    "Appetizers",
    "Salads",
    "Main Courses",
    "Burgers",
    "Desserts",
    "Beverages",
  ];

  return (
    <div className="category-tabs">
      {categories.map((item) => (
        <button
          key={item}
          className={category === item ? "active" : ""}
          onClick={() => setCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;