import { IMG_URL } from "../utils/constants";
const MenuDetails = (props) => {
  const { data } = props;
  const { name, price, description, imageId } = data?.card?.info;
  return (
    <div className="menuDetails">
      <div>
        <h4>{name}</h4>
        <h4>Rs.{price / 100}</h4>
        <p>{description}</p>
      </div>
      <div>
        <img className="menuImg" src={IMG_URL + imageId} />
      </div>
    </div>
  );
};

export default MenuDetails;
