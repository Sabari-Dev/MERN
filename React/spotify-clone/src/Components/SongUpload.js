import React, { useEffect, useState } from "react";
import { storage, auth, db } from "../Config/Config";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import {
  getDoc,
  updateDoc,
  Timestamp,
  addDoc,
  collection,
} from "firebase/firestore";
import "../style/songAdd.css";
import { useNavigate } from "react-router-dom";

const SongUpload = () => {
  const [songAdd, setSongAdd] = useState({
    name: "",
    artist: "",
    album: "",
    audio: "",
    image: "",
    loading: false,
  });
  const [audioUrl, setAudioUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    return setSongAdd((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  useEffect(() => {
    const getUrls = async () => {
      try {
        let imgUrl = "";

        const imageRef = ref(
          storage,
          `images/${new Date().getTime()}-${imageUrl.name}`
        );
        const snap = await uploadBytes(imageRef, imageUrl);
        let imgeUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
        imgUrl = imgeUrl;
        console.log(imgUrl);
        // Upload audio file
        let audUrl = "";
        const audioRef = ref(
          storage,
          `songs/${new Date().getTime()}-${audioUrl.name}`
        );
        const snapAud = await uploadBytes(audioRef, audioUrl);
        let audiUrl = await getDownloadURL(ref(storage, snapAud.ref.fullPath));
        audUrl = audiUrl;
        console.log(audUrl);
        if (!imgUrl == "" && !audUrl == "") {
          setSongAdd((prev) => ({
            ...prev,
            audio: audUrl,
            image: imgUrl,
          }));
        }
        audUrl = "";
        imgUrl = "";
      } catch (error) {
        console.log(error);
      }
    };
    getUrls();
    return () => {
      // Cleanup function to delete the files when the component unmounts
      if (audioUrl && audioUrl.name) {
        const audioRef = ref(
          storage,
          `songs/${new Date().getTime()}-${audioUrl.name}`
        );
        deleteObject(audioRef).catch((error) => {
          console.log(
            "Error deleting audio file from Firebase Storage:",
            error
          );
        });
      }

      if (imageUrl && imageUrl.name) {
        const imageRef = ref(
          storage,
          `images/${new Date().getTime()}-${imageUrl.name}`
        );
        deleteObject(imageRef).catch((error) => {
          console.log(
            "Error deleting image file from Firebase Storage:",
            error
          );
        });
      }
    };
  }, [audioUrl, imageUrl]); // Add audioUrl and imageUrl as dependencies

  // ... (remaining code)

  // Now, when the component is unmounted, the cleanup function will be executed, and it will delete the audio and image files if they exist in the Firebase Storage. This way, you can prevent re-uploading files that were deleted from the storage. Also, note that I have added audioUrl and imageUrl as dependencies to the useEffect hook so that the cleanup function is called whenever these values change (i.e., whenever new audio or image files are selected).

  const navigate = useNavigate();
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setSongAdd({ ...songAdd, loading: true });

    console.log(songAdd);

    await addDoc(collection(db, "album"), {
      ...songAdd,
      createdAt: Timestamp.fromDate(new Date()),
    });

    setSongAdd({
      name: "",
      artist: "",
      album: "",
      audio: "",
      image: "",
      loading: false,
    });
    if (!window.confirm("Are you want add another song ?")) {
      navigate("/home");
      setSongAdd({ ...songAdd, loading: false });
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="song-add">
      <form onSubmit={handleFormSubmit}>
        <h2>Upload your Song</h2>
        <label htmlFor="name">Song Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={songAdd.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="album">Album:</label>
        <input
          type="text"
          id="album"
          name="album"
          value={songAdd.album}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={songAdd.artist}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="imageUrl">Album Cover Image:</label>
        <input
          type="file"
          id="imageUrl"
          name="imageUrl"
          onChange={(e) => setImageUrl(e.target.files[0])}
          accept="image/*"
          required
        />
        <br />
        <br />

        <label htmlFor="audioUrl">Audio File:</label>
        <input
          type="file"
          id="audioUrl"
          name="audioUrl"
          onChange={(e) => setAudioUrl(e.target.files[0])}
          accept="audio/*"
          required
        />
        <br />
        <br />

        <button type="submit">
          {songAdd.loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default SongUpload;
