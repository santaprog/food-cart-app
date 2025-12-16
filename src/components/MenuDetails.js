import { IMG_URL } from "../utils/constants";
const MenuDetails = (props) => {
  const { data } = props;
  const { name, price, description, imageId } = data?.card?.info;
  return (
    <div className="menuDetails flex p-2 m-2 rounded-2xl border border-gray-400 justify-between">
      <div className="p-2">
        <div className="text-lg font-bold">{name}</div>
        <div className="text-md">Rs.{price / 100}</div>
        <p className="text-inherit">{description}</p>
      </div>
      <div>
        <img className="menuImg w-20 h-20 rounded-2xl" src={IMG_URL + imageId} />
      </div>
    </div>
  );
};

export default MenuDetails;
