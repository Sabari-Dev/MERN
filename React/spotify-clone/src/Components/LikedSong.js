import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Config/Config";
import AudioPlayer from "./AudioPlayer";
import "../style/likedSong.css";
import { BsFillHeartbreakFill } from "react-icons/bs";

const LikedSong = () => {
  const [likeSongs, setLikeSongs] = useState([]);

  const [songImg, setSongImg] = useState({
    song: "",
    image: "",
    like: false,
    id: "",
  });
  const { song, image, like, id } = songImg;
  function fileUrls(audio, image, like, id) {
    setSongImg({
      song: audio,
      image: image,
      like: like,
      id: id,
    });
  }

  useEffect(() => {
    const getLikedSong = async () => {
      const q = query(collection(db, "album"), where("like", "==", true));
      const querySnapshot = await getDocs(q);
      let likeValues = [];
      querySnapshot.forEach((doc) => {
        likeValues.push(doc.data());
      });
      setLikeSongs(likeValues);
    };
    getLikedSong();
  }, []);

  const onUnLike = async (songId) => {
    console.log(songId);
    try {
      const songDocRef = doc(db, "album", songId);
      await updateDoc(songDocRef, { like: false });
      alert("song Unliked");
      setLikeSongs(likeSongs.filter((song) => song.id !== songId));
      if (id === songId) {
        setSongImg({
          song: "",
          image: "",
          like: false,
          id: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="likedSongs">
      <h2 className="heading">Liked Songs</h2>
      <div className="list-head">
        <ul key="123">
          <li className="title-list" key="1">
            #Title
          </li>
          <li className="title-list" key="2">
            Album
          </li>
          <li className="title-list" key="3">
            Date added
          </li>
          <li className="title-list" key="4">
            UnLike
          </li>
        </ul>
      </div>
      <div className="songs-page">
        {likeSongs &&
          likeSongs.map((song, index) => {
            return (
              <ul className="song" key={index}>
                <li
                  className="song-url"
                  onClick={() =>
                    fileUrls(
                      song.audioTrack,
                      song.imageLink,
                      song.like,
                      song.id
                    )
                  }
                >
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
                <li className="like">
                  <i onClick={() => onUnLike(song.id)}>
                    <BsFillHeartbreakFill />
                  </i>
                </li>
              </ul>
            );
          })}
      </div>
      <div className="player-page1">
        <AudioPlayer song={song} image={image} like={like} id={id} />
      </div>
    </div>
  );
};

export default LikedSong;
