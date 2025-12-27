import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import cartStore from "../utils/cartStore";
import { clearCart } from "../utils/CartSlice";
import { IMG_URL } from "../utils/constants";

const Cart = () => {
  const { userName } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  //   const items = cartItems.data;
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

//   console.log(cartItems);
  return (
    <div className="m-auto p-4">
      <h1 className="text-center text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto text-center">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
        {cartItems.map((menu) => {
          return (
            <div
              key={menu?.data?.card?.info?.name}
              className="flex p-2 m-2 rounded-2xl border border-gray-400 justify-between"
            >
              <div className="p-2">
                <div className="text-lg font-bold">
                  {menu?.data?.card?.info?.name}
                </div>
                <div className="text-md">
                  Rs.{menu?.data?.card?.info?.price / 100}
                </div>
                <p className="text-inherit">
                  {menu?.data?.card?.info?.description}
                </p>
              </div>
              <div>
                <img
                  className="menuImg w-20 h-20 rounded-2xl"
                  src={IMG_URL + menu?.data?.card?.info?.imageId}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
