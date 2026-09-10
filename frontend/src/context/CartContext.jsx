import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // =====================================================
  // LOAD CART FROM LOCAL STORAGE
  // =====================================================

  const [cart, setCart] = useState(() => {

    try {

      const savedCart =
        localStorage.getItem("cart");

      if (savedCart) {
        return JSON.parse(savedCart);
      }

      return [];

    } catch (error) {

      console.error(
        "Error loading cart:",
        error
      );

      return [];

    }

  });


  // =====================================================
  // SAVE CART TO LOCAL STORAGE
  // =====================================================

  useEffect(() => {

    try {

      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      );

    } catch (error) {

      console.error(
        "Error saving cart:",
        error
      );

    }

  }, [cart]);


  // =====================================================
  // ADD ITEM
  // =====================================================

  const addToCart = (item) => {

    setCart((previousCart) => {

      const existingItem =
        previousCart.find(
          (x) => x.id === item.id
        );

      if (existingItem) {

        return previousCart.map((x) =>

          x.id === item.id

            ? {
                ...x,
                quantity:
                  x.quantity + 1
              }

            : x

        );

      }

      return [
        ...previousCart,
        {
          ...item,
          quantity: 1
        }
      ];

    });

  };


  // =====================================================
  // REMOVE ITEM
  // =====================================================

  const removeFromCart = (id) => {

    setCart((previousCart) =>
      previousCart.filter(
        (item) => item.id !== id
      )
    );

  };


  // =====================================================
  // INCREASE QUANTITY
  // =====================================================

  const increaseQuantity = (id) => {

    setCart((previousCart) =>

      previousCart.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity:
                item.quantity + 1
            }

          : item

      )

    );

  };


  // =====================================================
  // DECREASE QUANTITY
  // =====================================================

  const decreaseQuantity = (id) => {

    setCart((previousCart) =>

      previousCart
        .map((item) =>

          item.id === id

            ? {
                ...item,
                quantity:
                  item.quantity - 1
              }

            : item

        )
        .filter(
          (item) => item.quantity > 0
        )

    );

  };


  // =====================================================
  // CLEAR CART
  // =====================================================

  const clearCart = () => {

    setCart([]);

    localStorage.removeItem("cart");

  };


  // =====================================================
  // TOTAL PRICE
  // =====================================================

  const total = cart.reduce(

    (sum, item) =>

      sum +
      Number(item.price || 0) *
      Number(item.quantity || 0),

    0

  );


  // =====================================================
  // TOTAL ITEMS
  // =====================================================

  const cartCount = cart.reduce(

    (sum, item) =>
      sum +
      Number(item.quantity || 0),

    0

  );


  // =====================================================
  // PROVIDER
  // =====================================================

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        total,
        cartCount
      }}
    >

      {children}

    </CartContext.Provider>

  );

};


// =====================================================
// USE CART
// =====================================================

export const useCart = () =>
  useContext(CartContext);