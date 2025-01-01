'use client'
import { useCartContext } from "../../../context/CartContext";

const TrainingList = () => {
  const { cart, setCart } = useCartContext();

  const packages = [
    { id: 1, name: 'Strength Training', price: 50 },
    { id: 2, name: 'Weight Loss', price: 45 },
    { id: 3, name: 'Flexibility Training', price: 40 },
  ];

  const addToCart = (pkg) => {
    setCart([...cart, pkg]);
  };

  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-4xl font-bold">Training Packages</h1>
      <ul>
        {packages.map((pkg) => (
          <li key={pkg.id} className="border p-2 flex justify-between">
            {pkg.name} - ${pkg.price}
            <button className="bg-purple-500 text-white p-2 rounded" onClick={() => addToCart(pkg)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingList;
