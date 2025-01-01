import { useCartContext } from "../../context/CartContext";
import { motion } from "framer-motion";

const MerchCard = ({ item }) => {
  const { addToCart, createOrder } = useCartContext();

  const cardHover = {
    hover: { scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" },
  };

  const buttonClick = {
    tap: { scale: 0.95 },
  };

  const handleAddToCart = () => {
    addToCart(item);
    createOrder(); // Create an order whenever the item is added to the cart
  };

  return (
    <motion.div
      className="bg-gray-800 text-white p-4 rounded-lg shadow-md"
      whileHover="hover"
      variants={cardHover}
    >
      <h2 className="text-lg font-bold">{item.name}</h2>
      <p className="text-gray-400">${item.price}</p>
      <p className="text-gray-400">{item.description}</p>

      <motion.button
        onClick={handleAddToCart}
        className="mt-11 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg"
        whileTap="tap"
        variants={buttonClick}
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
};

export default MerchCard;
