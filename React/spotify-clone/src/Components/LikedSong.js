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
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";

const LikedSong = () => {
  const [likeSongs, setLikeSongs] = useState([]);
  const [isLike, setIsLike] = useState(true);
  const [songImg, setSongImg] = useState({
    song: "",
    image: "",
    like: false,
    id: "",
  });
  const { song, image, like, id } = songImg;
  useEffect(() => {
    const getLikedSong = async () => {
      const q = query(collection(db, "album"), where("like", "==", true));
      const querySnapshot = await getDocs(q);
      let likeValues = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        likeValues.push(doc.data());
      });
      setLikeSongs(likeValues);
    };
    getLikedSong();
  }, []);
  console.log(likeSongs);
  function fileUrls(audio, image, like, id) {
    setSongImg({
      song: audio,
      image: image,
      like: like,
      id: id,
    });
  }
  // const onLike = async () => {
  //   try {
  //     const newLikeStatus = !isLike;
  //     await updateDoc(doc(db, "album", id), { like: newLikeStatus });
  //     setIsLike(newLikeStatus);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const onLike = async () => {
    try {
      const newLikeStatus = !song.like;
      await updateDoc(doc(db, "album", id), { like: newLikeStatus });
      setLikeSongs((prevSongs) =>
        prevSongs.map((prevSong) =>
          prevSong.id === id ? { ...prevSong, like: newLikeStatus } : prevSong
        )
      );
      setSongImg((prevImg) => ({ ...prevImg, like: newLikeStatus }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="likedSongs">
      <h2 className="heading">Liked Song</h2>
      <div className="list-head">
        <ul>
          <li className="title-list">#Title</li>
          <li className="title-list">Album</li>
          <li className="title-list">Date added</li>
          <li className="title-list">Like</li>
        </ul>
      </div>
      <div className="songs-page">
        {likeSongs &&
          likeSongs.map((song) => {
            return (
              <ul
                className="song"
                key={song.id}
                onClick={() =>
                  fileUrls(song.audioTrack, song.imageLink, song.like, song.id)
                }
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
                <li className="like" onClick={onLike}>
                  {isLike ? (
                    <i>
                      <BsSuitHeartFill />
                    </i>
                  ) : (
                    <i>
                      <BsSuitHeart />
                    </i>
                  )}
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
