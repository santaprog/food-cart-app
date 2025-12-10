// import apiList from "../utils/apiData";
import CardCompo from "./CardCompo";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { LIST_URL } from "../utils/constants";

const Body = () => {
  //local State Variable
  const [searchText, setsearchText] = useState("");
  const [listOfRestaurant, setFilteredRestaurant] = useState([]);
  //Make a copy of list of restaurant so after filter the main list not be updated
  const [listOfFilteredRestaurant, setFilteredListRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(LIST_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonData = await response.json();
      // console.log(jsonData);
      setFilteredRestaurant(
        jsonData?.data?.cards[4]?.card.card.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredListRestaurant(
        jsonData?.data?.cards[4]?.card.card.gridElements?.infoWithStyle
          ?.restaurants
      );
      // Set state here: setData(jsonData.data?.cards || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="bodyContainer">
      <div className="filter">
        <div className="serach-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchFilteredList = listOfRestaurant.filter((res) =>
                res?.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(searchFilteredList);
              setFilteredListRestaurant(searchFilteredList);
              // console.log({searchText});
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            // console.log(filteredRestaurant);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restoContainer">
        {/* Card Component */}
        {listOfFilteredRestaurant.map((restaurant) => (
          <Link
            className="linkUrl"
            key={restaurant.info.id}
            to={"details/" + restaurant.info.id}
          >
            <CardCompo apiData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
