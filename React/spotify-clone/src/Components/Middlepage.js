import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsDownload,
  BsMusicNote,
  BsFillHeartFill,
  BsSuitHeart,
  BsSuitHeartFill,
  BsTrash3Fill,
} from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import img from "../images/album.jpg";
import AudioPlayer from "./AudioPlayer";
import { collection, doc, getDocs } from "firebase/firestore";
import { db, auth } from "../Config/Config";

export const Middlepage = () => {
  const [isLike, setIsLike] = useState(false);
  const [songs, setSongs] = useState([]);
  const [songImg, setSongImg] = useState({ song: "", image: "" });
  const { song, image } = songImg;

  function fileUrls(audio, image) {
    setSongImg({
      song: audio,
      image: image,
    });
  }

  useEffect(() => {
    const getSongs = async () => {
      const songDetails = await getDocs(collection(db, "album"));
      const songArr = songDetails.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setSongs(songArr);
    };
    getSongs();
  }, []);
  // console.log(songs);
  const id = auth.currentUser.uid;
  const onLike = () => {
    setIsLike(!isLike);
  };
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
            <Link className="profile" to={`/profile/${id}`}>
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
              <span className="upload-song">
                <Link to="/upload">
                  Upload Song <FiUpload />
                </Link>
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
            <li></li>
          </ul>
        </div>
        <div className="songs">
          {songs &&
            songs.map((song) => {
              return (
                <ul
                  className="song"
                  key={song.id}
                  onClick={() => fileUrls(song.audioTrack, song.imageLink)}
                >
                  <li className="song-url">
                    <div className="song-img">
                      <img
                        src={song.imageLink}
                        alt="song-img"
                        style={{ height: "50px", width: "50px" }}
                      />
                    </div>
                    <div className="song-details">
                      <div className="name">{song.name}</div>
                      <div className="singer">{song.artist}</div>
                    </div>
                  </li>
                  <li className="song-album">{song.album}</li>
                  <li className="song-date">
                    {song.createdAt.toDate().toDateString()}
                  </li>
                  <li className="song-dur">00:00</li>
                  <li className="likeDel">
                    <i className="like" onClick={onLike}>
                      {!song.like ? (
                        <i>
                          <BsSuitHeart />
                        </i>
                      ) : (
                        <i>
                          <BsSuitHeartFill />
                        </i>
                      )}
                    </i>
                    <i className="delete">
                      <BsTrash3Fill />
                    </i>
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
      <div className="player-page">
        <AudioPlayer song={song} image={image} />
      </div>
    </div>
  );
};
