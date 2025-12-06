const CardCompo = (props) => {
    const { apiData } = props;
    //   Disturcturing the props
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
      apiData?.info;
    const { slaString } = apiData?.info?.sla;
    return (
      <div className="cardContainer">
        <img
          className="cardImg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        <div className="cardDetails">
          <div className="restoName">{name}</div>
          <div className="cuisine">{cuisines.join(", ")}</div>
          <div className="starRating">
            <span>{avgRating} Star </span>
            {slaString}
          </div>
          <div>{costForTwo}</div>
        </div>
      </div>
    );
  };

  export default CardCompo;