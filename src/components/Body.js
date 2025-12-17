// import apiList from "../utils/apiData";
import CardCompo, { CardCompowithDiscount } from "./CardCompo";
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
  // console.log("Listof Restaurants", listOfRestaurant);

  const CardWithDiscount = CardCompowithDiscount(CardCompo);
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
      <div className="flex m-2 p-2 items-center justify-between">
        <div className="flex">
          <input
            className="block text-sm font-bold mb-2shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="mx-2 bg-gray-400 hover:bg-gray-600 text-black py-2 px-4 rounded hover:cursor-pointer"
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
          className="bg-orange-400 hover:bg-orange-600 text-black  py-2 px-4 rounded hover:cursor-pointer"
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
      <div className="restoContainer flex flex-wrap m-4">
        {/* Card Component */}
        {listOfFilteredRestaurant.map((restaurant) => (
          <Link
            className="linkUrl"
            key={restaurant.info.id}
            to={"details/" + restaurant.info.id}
          >
            {restaurant.info?.aggregatedDiscountInfoV3 ? (
              <CardWithDiscount apiData={restaurant}/>
            ) : (
              <CardCompo apiData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
