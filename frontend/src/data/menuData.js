const menuData = [

  // =========================
  // 🍞 APPETIZERS
  // =========================

  {
    id: 1,
    name: "Garlic Bread",
    category: "Appetizers",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.8,
    price: 149,
    description: "Freshly baked garlic bread with herbs and butter.",
    image: "https://i.pinimg.com/1200x/ea/e8/34/eae83495a307b0c89fb40a75ac2c861d.jpg"
  },

  {
    id: 2,
    name: "Bruschetta",
    category: "Appetizers",
    type: "Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: true,
    rating: 4.7,
    price: 199,
    description: "Grilled bread topped with tomato, basil and olive oil.",
    image: "https://i.pinimg.com/1200x/72/16/78/7216784033efd66c3bdca2275c8a3b12.jpg"
  },

  {
    id: 3,
    name: "Mozzarella Sticks",
    category: "Appetizers",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.9,
    price: 249,
    description: "Golden fried mozzarella sticks served with marinara sauce.",
    image: "https://i.pinimg.com/736x/21/20/61/212061255cd530cac3b16038bbbc2202.jpg"
  },

  {
    id: 4,
    name: "French Fries",
    category: "Appetizers",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.6,
    price: 129,
    description: "Crispy golden fries served with tomato ketchup.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600"
  },

  {
    id: 5,
    name: "Onion Rings",
    category: "Appetizers",
    type: "Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: false,
    rating: 4.5,
    price: 169,
    description: "Crunchy onion rings with spicy dip.",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=600"
  },

  {
    id: 6,
    name: "Spring Rolls",
    category: "Appetizers",
    type: "Veg",
    spicy: true,
    bestseller: true,
    chefSpecial: true,
    rating: 4.8,
    price: 229,
    description: "Vegetable spring rolls served with sweet chili sauce.",
    image: "https://i.pinimg.com/1200x/c1/8f/ae/c18faecf99723fa3358bbe8758655b52.jpg"
  },

  {
    id: 7,
    name: "Chicken Wings",
    category: "Appetizers",
    type: "Non-Veg",
    spicy: true,
    bestseller: true,
    chefSpecial: true,
    rating: 4.9,
    price: 349,
    description: "Hot and spicy grilled chicken wings.",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600"
  },

  {
    id: 8,
    name: "Nachos Supreme",
    category: "Appetizers",
    type: "Veg",
    spicy: true,
    bestseller: true,
    chefSpecial: false,
    rating: 4.8,
    price: 279,
    description: "Loaded nachos with cheese, salsa and jalapeños.",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600"
  },

  // =========================
  // 🥗 SALADS
  // =========================

  {
    id: 9,
    name: "Caesar Salad",
    category: "Salads",
    type: "Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: false,
    rating: 4.6,
    price: 249,
    description: "Classic Caesar salad with parmesan cheese.",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600"
  },

  {
    id: 10,
    name: "Greek Salad",
    category: "Salads",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.7,
    price: 269,
    description: "Fresh cucumber, tomato, olives and feta cheese.",
    image: "https://i.pinimg.com/1200x/0e/7d/7e/0e7d7e89458d77633d88a7f2727c3747.jpg"
  },

  {
    id: 11,
    name: "Garden Salad",
    category: "Salads",
    type: "Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: false,
    rating: 4.4,
    price: 199,
    description: "Fresh seasonal vegetables with house dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
  },

  {
    id: 12,
    name: "Caprese Salad",
    category: "Salads",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: true,
    rating: 4.8,
    price: 299,
    description: "Mozzarella cheese, tomato and basil leaves.",
    image: "https://i.pinimg.com/736x/8f/ff/c2/8fffc230e9c3bd6de8499cd13391c928.jpg"
  },

  {
    id: 13,
    name: "Chicken Salad",
    category: "Salads",
    type: "Non-Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.8,
    price: 349,
    description: "Grilled chicken served on fresh green salad.",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600"
  },

  {
    id: 14,
    name: "Fruit Salad",
    category: "Salads",
    type: "Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: false,
    rating: 4.5,
    price: 189,
    description: "Fresh seasonal fruits with honey.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600"
  },
    // =========================
  // 🍕 PIZZA
  // =========================

  {
    id: 15,
    name: "Margherita Pizza",
    category: "Pizza",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.8,
    price: 399,
    description: "Classic Italian pizza with mozzarella cheese and basil.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
  },

  {
    id: 16,
    name: "Veg Supreme Pizza",
    category: "Pizza",
    type: "Veg",
    spicy: true,
    bestseller: true,
    chefSpecial: true,
    rating: 4.9,
    price: 499,
    description: "Loaded with fresh vegetables and mozzarella cheese.",
    image: "https://i.pinimg.com/736x/93/50/c0/9350c0f6116de6745968b8d92d26ef4e.jpg"
  },

  {
    id: 17,
    name: "Paneer Tikka Pizza",
    category: "Pizza",
    type: "Veg",
    spicy: true,
    bestseller: true,
    chefSpecial: false,
    rating: 4.8,
    price: 529,
    description: "Indian style paneer tikka pizza.",
    image: "https://i.pinimg.com/736x/d1/bf/e5/d1bfe5cb8bcfa1263f433bd414320b9f.jpg"
  },

  {
    id: 18,
    name: "Pepperoni Pizza",
    category: "Pizza",
    type: "Non-Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.9,
    price: 599,
    description: "Loaded with premium pepperoni slices.",
    image: "https://i.pinimg.com/1200x/62/61/89/626189cb16937e3d29e92b1caf65cc61.jpg"
  },

  {
    id: 19,
    name: "Cheese masala dosa",
    category: "dosa",
    type: "Veg",
    spicy: true,
    bestseller: true,
    chefSpecial: true,
    rating: 4.9,
    price: 299,
    description: "Cheese masala dosa is a South Indian food.",
    image: "https://i.pinimg.com/736x/9b/52/22/9b5222f6b9af5bab30bf2683193008f7.jpg"
  },

  {
    id: 20,
    name: "Chicken lollipop ",
    category: "Pizza",
    type: "non-veg",
    spicy: true,
    bestseller: false,
    chefSpecial: true,
    rating: 4.7,
    price: 489,
    description: "It's very tasty and delicious food..",
    image: "https://i.pinimg.com/736x/b2/c7/e7/b2c7e74848ca8f57a2f5bad085e11152.jpg"
  },

  {
    id: 21,
    name: "Cheese Burst Pizza",
    category: "Pizza",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: true,
    rating: 4.9,
    price: 579,
    description: "Extra cheese stuffed crust pizza.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
  },

  {
    id: 22,
    name: "Farmhouse Pizza",
    category: "Pizza",
    type: "Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: false,
    rating: 4.7,
    price: 459,
    description: "Fresh vegetables with mozzarella cheese.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
  },

  // =========================
  // 🍝 PASTA
  // =========================

  {
    id: 23,
    name: "White Sauce Pasta",
    category: "Pasta",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.8,
    price: 299,
    description: "Creamy white sauce pasta with herbs.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600"
  },

  {
    id: 24,
    name: "Red Sauce Pasta",
    category: "Pasta",
    type: "Veg",
    spicy: true,
    bestseller: true,
    chefSpecial: false,
    rating: 4.7,
    price: 289,
    description: "Italian tomato sauce pasta.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600"
  },

  {
    id: 25,
    name: "Penne Alfredo",
    category: "Pasta",
    type: "Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: true,
    rating: 4.8,
    price: 349,
    description: "Creamy Alfredo sauce with penne pasta.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600"
  },

  {
    id: 26,
    name: "Chicken Alfredo",
    category: "Pasta",
    type: "Non-Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: true,
    rating: 4.9,
    price: 429,
    description: "Creamy Alfredo pasta with grilled chicken.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600"
  },

  {
    id: 27,
    name: "Spaghetti Carbonara",
    category: "Pasta",
    type: "Non-Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.8,
    price: 449,
    description: "Classic Italian carbonara pasta.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600"
  },

  {
    id: 28,
    name: "Mac & Cheese",
    category: "Pasta",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.7,
    price: 259,
    description: "Creamy macaroni with cheddar cheese.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600"
  },

  // =========================
  // 🍔 BURGERS & SANDWICHES
  // =========================

  {
    id: 29,
    name: "Classic Cheeseburger",
    category: "Burgers",
    type: "Non-Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.8,
    price: 299,
    description: "Juicy beef burger with cheddar cheese.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
  },

  {
    id: 30,
    name: "Chicken Burger",
    category: "Burgers",
    type: "Non-Veg",
    spicy: true,
    bestseller: true,
    chefSpecial: true,
    rating: 4.9,
    price: 329,
    description: "Grilled chicken burger with spicy sauce.",
    image: "https://i.pinimg.com/736x/c9/c5/01/c9c5013a47c78dde12d22a8659cdb945.jpg"
  },

  {
    id: 31,
    name: "Veggie Burger",
    category: "Burgers",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.7,
    price: 249,
    description: "Crispy vegetable patty with fresh lettuce.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600"
  },

  {
    id: 32,
    name: "Paneer Burger",
    category: "Burgers",
    type: "Veg",
    spicy: true,
    bestseller: false,
    chefSpecial: true,
    rating: 4.8,
    price: 289,
    description: "Grilled paneer burger with spicy mayo.",
    image: "https://i.pinimg.com/736x/ae/87/34/ae8734bba9f10dc8cc91e36251802345.jpg"
  },

  {
    id: 33,
    name: "Grilled Chicken Sandwich",
    category: "Sandwiches",
    type: "Non-Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.8,
    price: 279,
    description: "Toasted sandwich with grilled chicken.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600"
  },

  {
    id: 34,
    name: "Veg Club Sandwich",
    category: "Sandwiches",
    type: "Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: false,
    rating: 4.6,
    price: 229,
    description: "Triple-layer vegetable sandwich.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600"
  },

  {
    id: 35,
    name: "BBQ Chicken Sandwich",
    category: "Sandwiches",
    type: "Non-Veg",
    spicy: true,
    bestseller: true,
    chefSpecial: true,
    rating: 4.9,
    price: 319,
    description: "BBQ chicken sandwich with cheese.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600"
  },

  {
    id: 36,
    name: "Cheese Sandwich",
    category: "Sandwiches",
    type: "Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: false,
    rating: 4.5,
    price: 199,
    description: "Classic grilled cheese sandwich.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600"
  },

    // =========================
  // 🍛 MAIN COURSES
  // =========================

  {
    id: 37,
    name: "Butter Chicken",
    category: "Main Courses",
    type: "Non-Veg",
    spicy: true,
    bestseller: true,
    chefSpecial: true,
    rating: 4.9,
    price: 499,
    description: "Creamy butter chicken served with naan.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600"
  },

  {
    id: 38,
    name: "Chicken Biryani",
    category: "Main Courses",
    type: "Non-Veg",
    spicy: true,
    bestseller: true,
    chefSpecial: true,
    rating: 4.9,
    price: 449,
    description: "Hyderabadi dum chicken biryani.",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600"
  },

  {
    id: 39,
    name: "Veg Biryani",
    category: "Main Courses",
    type: "Veg",
    spicy: true,
    bestseller: true,
    chefSpecial: false,
    rating: 4.7,
    price: 349,
    description: "Aromatic basmati rice with fresh vegetables.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600"
  },

  {
    id: 40,
    name: "Paneer Butter Masala",
    category: "Main Courses",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: true,
    rating: 4.8,
    price: 389,
    description: "Soft paneer cubes cooked in creamy tomato gravy.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600"
  },

  {
    id: 41,
    name: "Grilled Salmon",
    category: "Main Courses",
    type: "Non-Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: true,
    rating: 4.8,
    price: 699,
    description: "Fresh salmon grilled with herbs.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600"
  },

  {
    id: 42,
    name: "BBQ Ribs",
    category: "Main Courses",
    type: "Non-Veg",
    spicy: true,
    bestseller: true,
    chefSpecial: true,
    rating: 4.9,
    price: 749,
    description: "Tender BBQ pork ribs with smoky sauce.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600"
  },

  {
    id: 43,
    name: "Beef Steak",
    category: "Main Courses",
    type: "Non-Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: true,
    rating: 4.8,
    price: 799,
    description: "Juicy grilled beef steak with mashed potatoes.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600"
  },

  {
    id: 44,
    name: "Fish Curry",
    category: "Main Courses",
    type: "Non-Veg",
    spicy: true,
    bestseller: false,
    chefSpecial: false,
    rating: 4.7,
    price: 549,
    description: "Traditional spicy fish curry.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600"
  },

  {
    id: 45,
    name: "Vegetable Stir Fry",
    category: "Main Courses",
    type: "Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: false,
    rating: 4.5,
    price: 299,
    description: "Mixed vegetables stir-fried in garlic sauce.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600"
  },

  {
    id: 46,
    name: "Mutton Rogan Josh",
    category: "Main Courses",
    type: "Non-Veg",
    spicy: true,
    bestseller: true,
    chefSpecial: true,
    rating: 4.9,
    price: 649,
    description: "Traditional Kashmiri mutton curry.",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600"
  },

  // =========================
  // 🍰 DESSERTS
  // =========================

  {
    id: 47,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: true,
    rating: 4.9,
    price: 199,
    description: "Warm chocolate cake with molten center.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600"
  },

  {
    id: 48,
    name: "Cheesecake",
    category: "Desserts",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.8,
    price: 229,
    description: "Classic creamy New York cheesecake.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600"
  },

  {
    id: 49,
    name: "Brownie",
    category: "Desserts",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.7,
    price: 179,
    description: "Rich chocolate brownie served warm.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600"
  },

  {
    id: 50,
    name: "Tiramisu",
    category: "Desserts",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: true,
    rating: 4.9,
    price: 259,
    description: "Classic Italian coffee-flavored dessert.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600"
  },

  {
    id: 51,
    name: "Apple Pie",
    category: "Desserts",
    type: "Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: false,
    rating: 4.6,
    price: 199,
    description: "Fresh apple pie with cinnamon.",
    image: "https://images.unsplash.com/photo-1562007908-17c67e878c88?w=600"
  },

  {
    id: 52,
    name: "Ice Cream Sundae",
    category: "Desserts",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.8,
    price: 189,
    description: "Vanilla ice cream topped with chocolate syrup.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600"
  },

  {
    id: 53,
    name: "Gulab Jamun",
    category: "Desserts",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.9,
    price: 149,
    description: "Soft milk dumplings in sugar syrup.",
    image: "https://i.pinimg.com/736x/60/a4/72/60a4725f1bcd3870410af22e49730757.jpg"
  },

  {
    id: 54,
    name: "Waffles",
    category: "Desserts",
    type: "Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: true,
    rating: 4.7,
    price: 249,
    description: "Belgian waffles with maple syrup.",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600"
  },

  // =========================
  // 🥤 BEVERAGES
  // =========================

  {
    id: 55,
    name: "Cold Coffee",
    category: "Beverages",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.8,
    price: 149,
    description: "Creamy chilled cold coffee.",
    image: "https://i.pinimg.com/736x/25/5c/06/255c06749c6b4f4f8d020cb902e6ed10.jpg"
  },

  {
    id: 56,
    name: "Cappuccino",
    category: "Beverages",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.7,
    price: 169,
    description: "Freshly brewed cappuccino.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600"
  },

  {
    id: 57,
    name: "Latte",
    category: "Beverages",
    type: "Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: false,
    rating: 4.6,
    price: 179,
    description: "Smooth espresso with steamed milk.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
  },

  {
    id: 58,
    name: "Mojito",
    category: "Beverages",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: true,
    rating: 4.8,
    price: 199,
    description: "Refreshing mint and lime mocktail.",
    image: "https://i.pinimg.com/736x/c4/e2/92/c4e292311dd4cb2b4565ea8be6539a8a.jpg"
  },

  {
    id: 59,
    name: "Fresh Orange Juice",
    category: "Beverages",
    type: "Veg",
    spicy: false,
    bestseller: false,
    chefSpecial: false,
    rating: 4.6,
    price: 159,
    description: "Freshly squeezed orange juice.",
    image: "https://i.pinimg.com/736x/53/bb/89/53bb8901006997f15d4679a317cf1423.jpg"
  },

  {
    id: 60,
    name: "Mango Milkshake",
    category: "Beverages",
    type: "Veg",
    spicy: false,
    bestseller: true,
    chefSpecial: false,
    rating: 4.8,
    price: 199,
    description: "Creamy mango milkshake.",
    image: "https://i.pinimg.com/1200x/6e/fc/a6/6efca684c374fc75f31665fe761a9955.jpg"
  }
];
export default menuData;