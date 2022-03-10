import React, { useState } from "react";
import CommentsIcon from "../assets/icons/Comment";
import LikeIcon from "../assets/icons/Like";
import RetweetIcon from "../assets/icons/Retweet";
import DropdownButton from "./Dropdown";
import Moment from "react-moment";

export const TweetCard = ({
  name,
  username,
  date,
  textContent,
  nComments,
  nRetweets,
  nLikes,
  avatarSrc,
  selected,
  setItem,
}) => {
  let timer = null;

  function onPointerDown() {
    timer = setTimeout(() => {
      setItem((old) =>
        !old.includes(date) ? [...old, date] : old.filter((val) => val !== date)
      );

      console.log("seteado");
    }, 300);
  }

  function onPointerLeave() {
    if (timer !== null) {
      console.log("Leaveado");
      clearTimeout(timer);
      timer = null;
      console.log(timer);
    }
  }

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerLeave={onPointerLeave}
      onPointerUp={onPointerLeave}
      className={`relative select-none cursor-pointer bg-gray-50 bg-opacity-30 flex space-x-4 flex-row p-4 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors transition-transform ${
        selected && "scale-95 border-2 border-blue-100 bg-blue-50"
      }`}
    >
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
        <div className="flex flex-row space-x-4 justify-between pt-4">
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
      </div>
    </div>
  );
};

export default TweetCard;
