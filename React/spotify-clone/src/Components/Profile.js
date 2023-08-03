import React, { useEffect, useState } from "react";
import "../style/profile.css";
import profileImg from "../images/profile.jpg";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../Config/Config";

const Profile = () => {
  const [currentUsers, setCurrentUsers] = useState({});
  const [profilePhoto, setProfilePhoto] = useState(null);

  const param = useParams();
  const { id } = param;

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userDoc = await getDoc(doc(db, "users", id));
        if (userDoc.exists()) {
          setCurrentUsers({ id: userDoc.id, ...userDoc.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    getUserDetails();
  }, [id]);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  };

  const handleUpload = async () => {
    try {
      if (profilePhoto) {
        const storageRef = storage.ref();
        const photoRef = storageRef.child(`profile-photos/${id}`);
        await photoRef.put(profilePhoto);

        const downloadURL = await photoRef.getDownloadURL();

        await updateDoc(doc(db, "users", id), { profilePhotoURL: downloadURL });

        console.log("Profile photo uploaded successfully!");
      }
    } catch (error) {
      console.error("Error uploading profile photo:", error);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-area">
        <div className="profile-img">
          <img
            src={profilePhoto ? URL.createObjectURL(profilePhoto) : profileImg}
            alt="profile"
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        <div className="details">
          <div className="name">{currentUsers.name}</div>
          <div className="email">{currentUsers.email}</div>
          <hr />
          <div className="create-time">
            {`Join in: ${currentUsers.createdAt}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
