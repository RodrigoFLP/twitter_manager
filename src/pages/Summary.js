import React, { useState } from "react";
import TweetCard from "../Components/TweetC";
import { Clock, RefreshCcw, FilePlus } from "react-feather";
import TitleBar from "../Components/TitleBar";
import tweets from "../data/tweets.json";
import { Link } from "react-router-dom";

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

export const Summary = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <>
      <div className="p-4 space-y-4 pt-20">
        <Link to="/schedule">
          <button className="p-4 bg-gray-50 rounded-md border-dashed border-2 font-semibold flex space-x-4 hover:bg-white cursor-pointer w-full">
            <FilePlus />
            <span> Schedule action</span>
          </button>
        </Link>
        <TitleBar
          render={(props) => <Clock {...props} />}
          title="Scheduled actions"
        />

        <TweetCard {...tweetInfo} />
        <TitleBar
          render={(props) => <RefreshCcw {...props} />}
          title="Recent Tweets"
        />
        <div className="bg-gray-50 rounded-md p-4 h-14 flex justify-between ">
          <div>{selectedItems.length} selected</div>
          <button onClick={() => setSelectedItems([])}>Clear</button>
        </div>
        <div className="z-0 space-y-4 md:space-y-0  md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {tweets.map((data) => (
            <TweetCard
              {...data}
              key={data.date}
              selected={selectedItems.includes(data.date)}
              setItem={setSelectedItems}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Summary;
