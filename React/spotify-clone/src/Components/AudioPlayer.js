import React, { useEffect, useRef, useState } from "react";
import noSong from "../images/nosong.jpg";
import "../style/audioPlayer.css";
import {
  BsSuitHeart,
  BsSuitHeartFill,
  BsFillPlayFill,
  BsPauseFill,
  BsTrash3Fill,
} from "react-icons/bs";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../Config/Config";

const AudioPlayer = ({ song, image, like, id, songs }) => {
  const [isLike, setIsLike] = useState(like);
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // console.log(songs);
  const audioPlay = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  useEffect(() => {
    const seconds = Math.floor(audioPlay.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlay?.current?.loadedmetadata, audioPlay?.current?.readyState]);

  const calculateMin = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMin}:${returnSec}`;
  };
  const whilePlaying = () => {
    progressBar.current.value = audioPlay.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };
  const changeProgress = () => {
    audioPlay.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };
  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };
  const onLike = async () => {
    try {
      const newLikeStatus = !isLike;
      await updateDoc(doc(db, "album", id), { like: newLikeStatus });
      setIsLike(newLikeStatus);
    } catch (error) {
      console.log(error);
    }
  };
  const onPlay = () => {
    const prevValue = play;
    if (!prevValue) {
      audioPlay.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlay.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
    setPlay(!prevValue);
  };

  const deleteSong = async () => {
    if (window.confirm("Are sure to delete this song")) {
      await deleteDoc(doc(db, "album", id));
    }
  };
  return (
    <div className="audio-player">
      <div className="audio-img">
        <img src={image ? image : noSong} alt="audioImage" />
      </div>
      <div className="player">
        <audio src={song} preload="metadata" ref={audioPlay} />
        <div className="top">
          <div className="left" onClick={onLike}>
            {isLike ? (
              <i>
                <BsSuitHeartFill />
              </i>
            ) : (
              <i>
                <BsSuitHeart />
              </i>
            )}
          </div>

          <div className="middle">
            <div className="previous">
              <i>
                <AiFillStepBackward />
              </i>
            </div>
            <div className="pausePlay" onClick={onPlay}>
              {!play ? (
                <i>
                  <BsFillPlayFill />
                </i>
              ) : (
                <i>
                  <BsPauseFill />
                </i>
              )}
            </div>
            <div className="next">
              <i>
                <AiFillStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            {song ? (
              <i className="delete" onClick={deleteSong}>
                <BsTrash3Fill />
              </i>
            ) : null}
          </div>
        </div>
        <div className="bottom">
          <div className="start-time">{calculateMin(currentTime)}</div>
          <input
            type="range"
            name="audio-bar"
            id="audio-bar"
            ref={progressBar}
            onChange={changeProgress}
          />
          <div className="duration-time">
            {duration && !isNaN(duration) && calculateMin(duration)
              ? calculateMin(duration)
              : `00:00`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
