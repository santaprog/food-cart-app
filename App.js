import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logoHeader">
        <img
          className="logo"
          src="https://images.unsplash.com/photo-1632203171982-cc0df6e9ceb4?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="logo"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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
        <div className="restoName">
            
            {name}</div>
        <div className="cuisine">{cuisines.join(", ")}</div>
        <div className="starRating"><span>{avgRating} Star </span>{slaString}</div>
        <div>{costForTwo}</div>
        
      </div>
    </div>
  );
};

const apiList = [
  {
    info: {
      id: "694787",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/d22562a2-1e8d-4325-a8a2-44e177e8bca3_694787.JPG",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.2,
      sla: {
        deliveryTime: 18,
        slaString: "10-15 mins",
      },
    },
  },
  {
    info: {
      id: "124016",
      name: "Niyaaz Restaurant",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2025/9/5/011f0a54-5513-405e-9953-f28dd3f60c31_3b0c6d47-bc8b-4b11-8841-47e421eea265.jpg",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Mughlai",
        "Chinese",
        "Kebabs",
        "Desserts",
      ],
      avgRating: 4.4,
      sla: {
        slaString: "10-15 mins",
      },
    },
  },
  {
    info: {
      id: "420882",
      name: "Hotel Subraya",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/7/27/5b0adcbe-fd42-4673-b8cd-5a9b7f03b413_d8dcbdad-57bb-4c78-8c52-7c72ff2b90d7.jpeg",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "Chinese", "Biryani", "Tandoor", "Indian"],
      avgRating: 3.8,
      sla: {
        slaString: "10-15 mins",
      },
    },
  },
  {
    info: {
      id: "97310",
      name: "Kk's Biryani Cafe",
      cloudinaryImageId: "kzmyzd2eydfqvyevgnbg",
      costForTwo: "₹349 for two",
      cuisines: ["Biryani", "Kebabs", "Tandoor", "Chinese"],
      avgRating: 4.1,
      sla: {
        slaString: "10-15 mins",
      },
    },
  },
  {
    info: {
      id: "97323",
      name: "The Thalis",
      cloudinaryImageId: "jbwv1pjkqgwtjcfq6jsl",
      costForTwo: "₹499 for two",
      cuisines: ["Thalis", "Biryani"],
      avgRating: 4.4,
      sla: {
        slaString: "10-15 mins",
      },
    },
  },
  {
    info: {
      id: "314491",
      name: "Hotel 3 Leaves",
      cloudinaryImageId: "bb2cfb3d59801d190de9d5152092741f",
      costForTwo: "₹250 for two",
      cuisines: [
        "Biryani",
        "Chinese",
        "North Indian",
        "Beverages",
        "Desserts",
        "sandwich",
      ],
      avgRating: 4.4,
      sla: {
        slaString: "10-15 mins",
      },
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "97649",
      name: "Masala Pot",
      cloudinaryImageId: "bnx3xpzpkbn0udl25cq5",
      costForTwo: "₹349 for two",
      cuisines: [
        "Maharashtrian",
        "Chinese",
        "Indian",
        "South Indian",
        "Kebabs",
      ],
      avgRating: 4.4,
      sla: {
        slaString: "10-15 mins",
      },
    },
  },
];

const Body = () => {
  return (
    <div className="bodyContainer">
      <div className="search">Search</div>
      <div className="restoContainer">
        {/* Card Component */}
        {apiList.map((restaurant) => (
          <CardCompo key={restaurant.info.id} apiData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppCompo = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppCompo />);
