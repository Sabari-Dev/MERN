import React from "react";
import { Link } from "react-router-dom";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsDownload,
  BsMusicNote,
  BsFillHeartFill,
  BsHeartFill,
} from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import img from "../images/album.jpg";

export const Middlepage = () => {
  return (
    <div className="middle-page">
      <div className="banner">
        <div className="banner-buttons">
          <div className="arrow-btn">
            <i>
              <BsArrowLeftCircle />
            </i>
            <i>
              <BsArrowRightCircle />
            </i>
          </div>
          <div className="redirect-btn">
            <a
              href="https://www.spotify.com/us/download/windows/"
              target="_blank"
              className="installApp"
            >
              Install App
              <i>
                <BsDownload />
              </i>
            </a>
            <Link className="profile" to="/profile">
              <FaUser />
            </Link>
          </div>
        </div>
        <div className="album-banner">
          <div className="album-img">
            <img
              src={img}
              alt="album-img"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div className="album-content">
            <h4>PlayList</h4>
            <h3 className="album-heading">Gaming Music 2023.</h3>
            <p className="content">
              It's Gaming Time. Best of EDM and Epic songs playlist to listen to
              while playing video games like LOL, FNAF, GTA, Valorant, Fortnite,
              Apex Legends, Minecraft...
            </p>
            <p className="likeView">
              <span className="likes">
                <i>
                  <BsFillHeartFill />
                </i>
                167,482Likes
              </span>
              .
              <span className="totalSongs">
                <i>
                  <BsMusicNote />
                </i>
                19 Songs
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="songs-list">
        <div className="list-head">
          <ul>
            <li className="title-list">#Title</li>
            <li className="title-list">Album</li>
            <li className="title-list">Date added</li>
            <li className="title-list">
              <BiTime />
            </li>
          </ul>
        </div>
        <div className="songs">
          <ul className="song">
            <li className="song-url">
              <div className="s-no">1</div>
              <div className="song-img">
                <img
                  src={img}
                  alt="song-img"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div className="song-details">
                <div className="name">Shape of you</div>
                <div className="singer">shakes</div>
              </div>
            </li>
            <li className="song-album">shape of you</li>
            <li className="song-date">dec 2,2020</li>
            <li className="song-dur">
              03:04{" "}
              <i>
                <BsHeartFill />
              </i>
            </li>
          </ul>
          <ul className="song">
            <li className="song-url">
              <div className="s-no">1</div>
              <div className="song-img">
                <img
                  src={img}
                  alt="song-img"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div className="song-details">
                <div className="name">Shape of you</div>
                <div className="singer">shakes</div>
              </div>
            </li>
            <li className="song-album">shape of you</li>
            <li className="song-date">dec 2,2020</li>
            <li className="song-dur">03:04</li>
          </ul>
          <ul className="song">
            <li className="song-url">
              <div className="s-no">1</div>
              <div className="song-img">
                <img
                  src={img}
                  alt="song-img"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div className="song-details">
                <div className="name">Shape of you</div>
                <div className="singer">shakes</div>
              </div>
            </li>
            <li className="song-album">shape of you</li>
            <li className="song-date">dec 2,2020</li>
            <li className="song-dur">03:04</li>
          </ul>
          <ul className="song">
            <li className="song-url">
              <div className="s-no">1</div>
              <div className="song-img">
                <img
                  src={img}
                  alt="song-img"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div className="song-details">
                <div className="name">Shape of you</div>
                <div className="singer">shakes</div>
              </div>
            </li>
            <li className="song-album">shape of you</li>
            <li className="song-date">dec 2,2020</li>
            <li className="song-dur">03:04</li>
          </ul>
          <ul className="song">
            <li className="song-url">
              <div className="s-no">1</div>
              <div className="song-img">
                <img
                  src={img}
                  alt="song-img"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div className="song-details">
                <div className="name">Shape of you</div>
                <div className="singer">shakes</div>
              </div>
            </li>
            <li className="song-album">shape of you</li>
            <li className="song-date">dec 2,2020</li>
            <li className="song-dur">03:04</li>
          </ul>
          <ul className="song">
            <li className="song-url">
              <div className="s-no">1</div>
              <div className="song-img">
                <img
                  src={img}
                  alt="song-img"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div className="song-details">
                <div className="name">Shape of you</div>
                <div className="singer">shakes</div>
              </div>
            </li>
            <li className="song-album">shape of you</li>
            <li className="song-date">dec 2,2020</li>
            <li className="song-dur">03:04</li>
          </ul>
          <ul className="song">
            <li className="song-url">
              <div className="s-no">1</div>
              <div className="song-img">
                <img
                  src={img}
                  alt="song-img"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div className="song-details">
                <div className="name">Shape of you</div>
                <div className="singer">shakes</div>
              </div>
            </li>
            <li className="song-album">shape of you</li>
            <li className="song-date">dec 2,2020</li>
            <li className="song-dur">03:04</li>
          </ul>
        </div>
      </div>
      <div className="player-page"></div>
    </div>
  );
};
