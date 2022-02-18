import React from "react";
import TweetCard from "../Components/TweetCard";

const tweetInfo = {
  name: "Fastic",
  username: "fasticsv",
  date: "1d",
  textContent:
    "Comienza a practicar el ayuno intermintente con la app de Fastic. Consigue tu plan de ayuno intermitente gratuito. Instálala ahora y siéntete bien",
  nComments: 8,
  nLikes: 20,
  nRetweets: 5,
  avatarSrc:
    "https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?&d=identicon&r=PG",
};

export const TweetScheduler = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="border-2 border-gray-200 p-4 rounded-md font-semibold">
        {" "}
        Seleccionar
      </div>
      <TweetCard {...tweetInfo} />
    </div>
  );
};

export default TweetScheduler;
