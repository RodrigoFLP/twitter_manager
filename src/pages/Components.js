import React from "react";
import { DatePicker } from "../Components/DatePicker";

const tweetInfo = {
  name: "Fastic",
  username: "fasticsv",
  date: "1976-04-19T12:59-0500",
  textContent:
    "Comienza a practicar el ayuno intermintente con la app de Fastic. Consigue tu plan de ayuno intermitente gratuito. Instálala ahora y siéntete bien",
  nComments: 8,
  nLikes: 20,
  nRetweets: 5,
  avatarSrc:
    "https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?&d=identicon&r=PG",
};

export const ComponentsScreen = () => {
  return (
    <div className="bg-slate-100 mt-16">
      <div className="bg-white p-4">
        <DatePicker {...tweetInfo} />
      </div>
    </div>
  );
};

export default ComponentsScreen;
