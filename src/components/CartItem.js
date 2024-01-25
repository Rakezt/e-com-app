import FormatPrice from "../Helper/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";

const CartItem = ({ id, name, price, image, activeColor, amount }) => {
  const { removeItem, setIncrease, setDecrease } = useCartContext();

  return (
    <div className="cart-heading grid grid-five-column">
      <div className="cart-image--name">
        <img src={image} alt={id} />
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: activeColor }}
            ></div>
          </div>
        </div>
      </div>
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      <CartAmountToggle
        amount={amount}
        setIncrease={() => setIncrease(id)}
        setDecrease={() => setDecrease(id)}
      />
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove-icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
