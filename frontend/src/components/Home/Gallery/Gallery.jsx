import "./Gallery.css";

const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    title: "Luxury Dining",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    title: "Italian Pizza",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    title: "Juicy Burger",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
    title: "Creamy Pasta",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    title: "Fresh Coffee",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
    title: "Desserts",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    title: "Healthy Salad",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    title: "Grilled Chicken",
  },
];

function Gallery() {
  return (
    <section className="gallery">

      <div className="gallery-title">
        <h2>📸 Our Gallery</h2>

        <p>
          A glimpse of our delicious food and beautiful restaurant.
        </p>
      </div>

      <div className="gallery-grid">

        {galleryImages.map((item) => (

          <div className="gallery-card" key={item.id}>

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;