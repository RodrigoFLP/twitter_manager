import React, { useState } from "react";
import CommentsIcon from "../assets/icons/Comment";
import LikeIcon from "../assets/icons/Like";
import RetweetIcon from "../assets/icons/Retweet";
import Moment from "react-moment";
import DropdownButton from "./Dropdown";
import moment from "moment-twitter";

moment();

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
  // const [show, setShow] = useState(false);

  return (
    <div className="relative bg-gray-50 flex space-x-4 flex-row p-4 rounded-md hover:bg-blue-50 hover:border-blue-200 transition-colors">
      <div className="w-10 h-10 shrink-0 overflow-hidden rounded-full bg-slate-600">
        <img
          className="object-cover h-full w-full"
          src={avatarSrc}
          alt="avatar"
        />
      </div>
      <div id="main-content" className="w-full ">
        <div className="flex space-x-1 whitespace-nowrap w-8/12  absolute">
          <span className="font-bold ">{name}</span>
          <span className="pl-1 text text-gray-700 truncate">@{username}</span>
          <div>·</div>
          <span className="pl-1 text text-gray-700 ">
            <Moment fromNow trim>
              {date}
            </Moment>
          </span>
        </div>
        <div className="absolute right-4 top-4">
          <DropdownButton />
        </div>
        <div id="content" className="overflow-hidden w-full pt-6">
          {textContent}
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
