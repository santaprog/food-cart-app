import { useState } from "react";
import MenuDetails from "./MenuDetails";
const ItemCategory = ({ data,showMenu,setShowMenu }) => {
  //   console.log(data);
  const menuDetails = data.card?.card?.itemCards;
  const handleClicked = () => {
    setShowMenu();
  };
  return (
    <div className="hotelMenu p-4 bg-white-100 shadow-lg m-4">
      <div
        className="text-lg font-bold flex justify-between cursor-pointer"
        onClick={handleClicked}
      >
        <span>{data.card.card.title} ({data.card.card.itemCards.length})</span>
        {showMenu ? <span>🔼</span> : <span>🔽</span>}
      </div>
      <div className="hotelSubmenu">
        {menuDetails.map(
          (menu) =>
            showMenu ? <MenuDetails key={menu.card.info.id} data={menu} />:""
        )}
      </div>
    </div>
  );
};

export default ItemCategory;
