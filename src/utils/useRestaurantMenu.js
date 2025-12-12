import { useState, useEffect } from "react";
import { MENU_DUMMY_URL } from "./constants";

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MENU_DUMMY_URL);
    // console.log("MENU_DUMMY_URL")
    const json = await res.json();
    setResInfo(json.data);
  };

  return resInfo;
  
};

export default useRestaurantMenu;
