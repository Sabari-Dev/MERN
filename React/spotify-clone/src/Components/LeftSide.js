import React, { useEffect } from "react";
import {
  BsSpotify,
  BsThreeDots,
  BsFillHeartFill,
  BsPlusLg,
  BsFillTrash3Fill,
} from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { PiPulseBold } from "react-icons/pi";
import { BiSolidPlaylist } from "react-icons/bi";
import { IoAlbums, IoRadio } from "react-icons/io5";
import { playList } from "./PlayList";

const LeftSide = () => {
  useEffect(() => {
    const allMenuTitle = document.querySelectorAll(".menu-title");
    function changeActive() {
      allMenuTitle.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allMenuTitle.forEach((n) => n.addEventListener("click", changeActive));
  }, []);
  return (
    <div className="left-container">
      {/* title  */}
      <div className="title">
        <div className="logo">
          <i>
            <BsSpotify />
          </i>
        </div>
        <div className="name">Spotify</div>
        <div className="menu-bar">
          <i>
            <BsThreeDots />
          </i>
        </div>
      </div>
      {/* search bar */}
      <div className="search-bar">
        <input
          type="text"
          name="search"
          className="searchBox"
          placeholder="Search songs/albums"
        />
      </div>

      {/* menu */}
      <div className="menu-page">
        <h4 className="menu-heading">menu</h4>
        <ul className="menus">
          <li className="menu-title">
            <i>
              <HiHome />
            </i>
            Home
          </li>
          <li className="menu-title">
            <i>
              <BsFillHeartFill />
            </i>
            Liked songs
          </li>
          <li className="menu-title">
            <i>
              <PiPulseBold />
            </i>
            Discover
          </li>
          <li className="menu-title">
            <i>
              <IoAlbums />
            </i>
            Albums
          </li>
          <li className="menu-title">
            <i>
              <IoRadio />
            </i>
            Radio
          </li>
        </ul>
      </div>
      {/* playList */}
      <div className="play-list">
        <div className="listHead">
          <h4>PlayList</h4>
          <i>
            <BsPlusLg />
          </i>
        </div>
        <div className="play-lists">
          {playList &&
            playList.map((list) => {
              return (
                <div className="listName" key={list.id}>
                  <p>
                    <i>
                      <BiSolidPlaylist />
                    </i>
                    {list.name}
                  </p>
                  <i>
                    <BsFillTrash3Fill />
                  </i>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
