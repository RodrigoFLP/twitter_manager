import React, { useEffect, useState } from "react";
import { PlusCircle } from "react-feather";
import Counter from "../Components/Counter";
import TitleBar from "../Components/TitleBar";
import TweetCard from "../Components/TweetCard";

export const Schedule = () => {
  const [tweet, setTweet] = useState("");

  useEffect(() => {
    console.log(tweet.length);
  });

  const tweetInfo = {
    name: "Fastic",
    username: "fasticsv",
    date: "1d",
    textContent: tweet,
    nComments: 8,
    nLikes: 20,
    nRetweets: 5,
    avatarSrc:
      "https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?&d=identicon&r=PG",
  };

  return (
    <div className="pt-16 space-y-4 md:flex md:flex-row w-full h-full">
      <main className="md:w-1/2 space-y-4 p-4">
        <form className="space-y-4  rounded-md">
          <TitleBar
            render={(props) => <PlusCircle {...props} />}
            title="New tweet"
          />
          <textarea
            placeholder="Type your tweet"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            className="w-full p-4"
          ></textarea>
          <div className="flex justify-end">
            <Counter count={tweet.length} />
          </div>
        </form>
        <TitleBar
          render={(props) => <PlusCircle {...props} />}
          title="Preview"
        />
        <TweetCard {...tweetInfo} />
      </main>
      <article className="bg-gray-50 md:w-1/2 h-full p-4">
        <span className="font-semibold text-lg">Scheduled actions</span>
      </article>
    </div>
  );
};

export default Schedule;
