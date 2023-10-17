import { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import DrinkItem from "./DrinkItem";

const Hot = () => {
  const [hotDrinks, setHotDrinks] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/coffee/hot")
      .then((response) => {
        setHotDrinks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="px-5 pt-3 pb-5">
        <Link to="/" className="bg-green-700 text-white px-2 py-1.5 rounded">
          Go Back
        </Link>
      </div>
      <div className="grid grid-cols-2 px-5 gap-x-4 gap-y-8 ">
        {hotDrinks.map((item) => (
          <DrinkItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            ingredients={item.ingredients}
          />
        ))}
      </div>
    </>
  );
};

export default Hot;
