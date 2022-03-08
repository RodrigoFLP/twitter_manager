import React, { useState } from "react";
import CommentsIcon from "../assets/icons/Comment";
import LikeIcon from "../assets/icons/Like";
import RetweetIcon from "../assets/icons/Retweet";
import Moment from "react-moment";
import DropdownButton from "./Dropdown";

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
    <div className="self-end">
      <div className=" bg-gray-50 flex flex-row space-x-3 p-4 items-start rounded-md hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer">
        <div>
          <div className="rounded-full w-12 overflow-hidden">
            <img
              src={avatarSrc}
              className="w-full h-12 object-cover"
              alt="avatar"
            />
          </div>
        </div>
        <main className="w-4/5">
          <div className="flex justify-between">
            <div className="flex space-x-1 whitespace-nowrap w-4/5">
              <span className="font-bold ">{name}</span>
              <span className="pl-1 text text-gray-700 truncate">
                @{username}
              </span>
              <div>·</div>
              <span className="pl-1 text text-gray-700  ">
                <Moment fromNow>{date}</Moment>
              </span>
            </div>
            <DropdownButton />
          </div>
          <div className="leading-5 truncate">{textContent}</div>
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
    </div>
  );
};

export default TweetCard;
