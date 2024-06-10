import { useContext } from "react";
import { AppContext } from "../../App";

function Total({ onOrder }) {
  const { products, cart } = useContext(AppContext);

  const totalPrice = Object.keys(cart).reduce((total, productId) => {
    const product = products.find((product) => product.id === productId);
    if (!product) return total; // Ensure product exists
    return total + product.price * cart[productId];
  }, 0);

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="Total">
     <div className="Total_tit">
     <h2>Итого</h2>
     </div>
     <div className="total_txt">
     <p>Товары: {totalItems}</p>
     <p>Цена: {totalPrice} сом</p>

     </div>
      
      
      
    </div>
  );
}

export default Total;