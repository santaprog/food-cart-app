import MenuDetails from "./MenuDetails";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const MenuCard = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu();
  
  const menuDetails = 
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards || [];
  

  const hotelName = resInfo?.cards[2]?.card?.card?.info.name;

  if (resInfo === null) return <Shimmer/>
  return (
    <div>
      <div className="hotelName">
        <h1>{hotelName}</h1>
      </div>
      <div className="hotelMenu">
        <h3>Menu Items</h3>
        <div className="hotelSubmenu">
          {menuDetails.map((menu) => (
            <MenuDetails key={menu.card.info.id} data={menu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
