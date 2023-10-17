import { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const Hot = () => {
  const [hotDrinks, setHotDrinks] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/coffee/iced")
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
          <div key={item.id}>
            <div className="image-container">
              <img src={item.image} className="rounded-t-xl image" />
            </div>
            <div className="text-container flex flex-col justify-around border p-1 text-center">
              <h2 className="text-l font-bold">{item.title}</h2>
              <h2 className="text-slate-700 text-md">
                {item.ingredients.join(" , ")}
              </h2>
              <button className="bg-green-700 text-white px-2 py-1">Add</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hot;
