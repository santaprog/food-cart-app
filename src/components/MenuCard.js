import { useState, useEffect } from "react";
import MenuDetails from "./MenuDetails";
import { LIST_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const MenuCard = () => {
  const [menuDetails, setMenuData] = useState([]);
  const [hotelName,setHotelName]=useState("");
  const {resId} = useParams();
  useEffect(() => {
    fetchCardMenu();
  }, []);

  
  const fetchCardMenu = async () => {
    try {
      //   const restaurantId = "123456";
      const response = await fetch(
        "https://namastedev.com/api/v1/listRestaurantMenu/123456"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setHotelName(data?.data?.cards[2]?.card?.card?.info.name);
      setMenuData(
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards || []
      );
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  if (menuDetails.length === 0) return <Shimmer/>
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
