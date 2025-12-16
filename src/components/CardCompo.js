const CardCompo = (props) => {
  const { apiData } = props;
  //   Disturcturing the props
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    apiData?.info;
  const { slaString } = apiData?.info?.sla;
  return (
    <div className="bg-gray-100 border-white rounded-lg m-2 w-50 h-90 hover:bg-gray-200">
      <img
        className="w-50 h-50 p-2 rounded-2xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="cardDetails p-2">
        <div className="restoName text-xl font-bold">{name}</div>
        <div className="cuisine text-gray-600 tet-lg">
          {cuisines.join(", ")}
        </div>
        <div className="starRating text-md">
          <span>{avgRating} Star </span>
          {slaString}
        </div>
        <div className="text-md">{costForTwo}</div>
      </div>
    </div>
  );
};

export const CardCompowithDiscount = (CardCompo) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props?.apiData?.info;
    return (
      <div>
        <label className={"rounded-md text-xl text-white absolute mt-40 ml-4"}>
          {aggregatedDiscountInfoV3?.discountTag
            ? aggregatedDiscountInfoV3?.discountTag +
              " " +
              aggregatedDiscountInfoV3?.header
            : aggregatedDiscountInfoV3?.header +
              " " +
              aggregatedDiscountInfoV3?.subHeader}
        </label>
        <CardCompo {...props} />
      </div>
    );
  };
};

export default CardCompo;
