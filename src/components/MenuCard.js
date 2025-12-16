import MenuDetails from "./MenuDetails";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCategory from "./ItemCategory";

const MenuCard = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu();
  // console.log(resInfo.cards[4].groupedCard?.cardGroupMap.REGULAR?.cards);
  const menuDetails =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  const hotelName = resInfo?.cards[2]?.card?.card?.info.name;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  if (resInfo === null) return <Shimmer />;
  return (
    <div className="items-center w-6/12 mx-auto">
      <div className="hotelName">
        <div className="p-4 text-2xl font-bold">{hotelName}</div>
        {categories.map((category) => (
          <ItemCategory key={category?.card?.card?.title} data={category} />
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
