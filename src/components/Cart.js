import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Cart = ()=>{
    const {userName} = useContext(UserContext)
    return (
        <div className="p-4 m-4">
            <div className="flex items-center text-2xl">Hi!!! {userName}</div>
            You can see here your Ordered Items!!!
        </div>
    );
}

export default Cart;