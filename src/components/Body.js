import apiList from "../utils/apiData";
import CardCompo from "./CardCompo";
import { useState } from "react";

const Body = () => {
    //State Variable 
    const [filteredRestaurant, setFilteredRestaurant] = useState(apiList);
    return (
      <div className="bodyContainer">
        <button className="top-btn" onClick={()=>{
            let filteredRestaurant = apiList.filter(
                (res)=> res.info.avgRating >4.2
                );
            // console.log(filteredRestaurant);
            setFilteredRestaurant(filteredRestaurant);
        }}>Top Rated Restaurants</button>
        <div className="restoContainer">
          {/* Card Component */}
          {filteredRestaurant.map((restaurant) => (
            <CardCompo key={restaurant.info.id} apiData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;