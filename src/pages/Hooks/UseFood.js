import React, { useEffect, useState } from "react";
const UseFood = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://hostel-system.onrender.com/food")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  });
  return [foods];
};
export default UseFood;
