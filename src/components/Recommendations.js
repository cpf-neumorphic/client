import React, { useState } from "react";

import FavouriteCard from "./FavouriteCard";

const defaults = ["0", "1", "2"];
const all_favourites = require("../asset/recommendations.json");

export default function Favourites(props) {
  const [recommendations, setRecommendations] = useState(
    props.userFavouries || defaults
  );

  const currRecommendations = recommendations.map((id) => {
    const data = all_favourites[id];
    return <FavouriteCard key={id} data={data} />;
  });

  return <>{currRecommendations}</>;
}
