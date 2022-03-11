import React, { useEffect, useState } from "react";
import Counter from "../Components/Counter";
import PhotoIcon from "../assets/icons/Photo";
import { EmojiIcon } from "../assets/icons/Emoji";
import DatePicker from "../Components/DatePicker";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

export const Schedule = () => {
  const [tweet, setTweet] = useState("");
  const [showPicker, setShowPicker] = useState(false);

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
    <div className="mt-16 space-y-4 md:flex md:flex-row w-full h-full bg-gray-50">
      <div
        className={`w-full h-full absolute z-30 ${!showPicker && "hidden"}`}
        onClick={() => setShowPicker(false)}
      ></div>

      <main className="md:w-1/2 space-y-4 p-4 ">
        <form className="space-y-4  rounded-lg  shadow-sm bg-white shadow-gray-100 p-4 ">
          <div className="flex flex-row space-x-2">
            <div className="w-10 h-10 shrink-0 overflow-hidden rounded-full">
              <img
                className="object-cover h-full w-full"
                src={tweetInfo.avatarSrc}
                alt="avatar"
              />
            </div>
            <textarea
              placeholder="Type your tweet"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
              className="w-full p-4 h-52 text-lg appearance-none focus:outline-none resize-none bg-transparent "
            ></textarea>
          </div>
          <div
            id="bottom-options flex flex-row"
            className="flex items-center justify-between"
          >
            <div className="right-0 ">
              <button
                className="hover:bg-slate-100 p-2 rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPicker((previousState) => !previousState);
                }}
              >
                <PhotoIcon className="w-5 fill-gray-600" />
              </button>
              <button
                className="hover:bg-slate-100 p-2 rounded-full peer"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPicker((previousState) => !previousState);
                }}
              >
                <EmojiIcon className="w-5 fill-gray-600" />
              </button>
              <div className={`absolute z-50 ${!showPicker && "hidden"}`}>
                <Picker
                  perLine={8}
                  onSelect={(emoji) => {
                    setTweet((prevTweet) => prevTweet + emoji.native);
                  }}
                  style={{
                    bottom: "20px",
                    right: "20px",
                  }}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Counter count={tweet.length} className="z-50" />
            </div>
          </div>
        </form>
        <DatePicker />
      </main>
      <article className="md:w-1/2 h-full p-4">
        <span className="font-semibold text-lg">Scheduled actions</span>
      </article>
    </div>
  );
};

export default Schedule;
