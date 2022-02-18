import React from "react";
import CommentsIcon from "../assets/icons/Comment";
import LikeIcon from "../assets/icons/Like";
import RetweetIcon from "../assets/icons/Retweet";

export const TweetCard = ({
  name,
  username,
  date,
  textContent,
  nComments,
  nRetweets,
  nLikes,
  avatarSrc,
}) => {
  console.log(avatarSrc);
  return (
    <div className="border-2 flex flex-row space-x-3 p-4 items-start rounded-md lg:w-1/4 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer">
      <div className="rounded-full overflow-hidden">
        <img src={avatarSrc} alt="avatar" />
      </div>
      <main className="">
        <div className="flex justify-between">
          <div>
            <span className="font-bold text">{name}</span>
            <span className="pl-1 text text-gray-700">@{username}</span>
          </div>
          <span className="pl-1 text text-gray-700">{date}</span>
        </div>
        <div className="leading-5">{textContent}</div>
        <div className="flex flex-row space-x-4 justify-between pt-2">
          <div className="flex flex-row space-x-1">
            <CommentsIcon width="w-4" fillColor="fill-gray-600" />
            <span className="text-xs">{nComments}</span>
          </div>
          <div className="flex flex-row space-x-1">
            <RetweetIcon width="w-4" fillColor="fill-gray-600" />
            <span className="text-xs">{nRetweets}</span>
          </div>
          <div className="flex flex-row space-x-1">
            <LikeIcon width="w-4" fillColor="fill-gray-600" />
            <span className="text-xs">{nLikes}</span>
          </div>
          <div className="flex flex-row space-x-1">
            <CommentsIcon />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TweetCard;
