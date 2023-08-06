import React, { useEffect, useState } from "react";
import image from "../images/profile.jpg";
import "../style/profile.css";
import { BsFillCameraFill, BsFillTrash3Fill } from "react-icons/bs";
import { storage, auth, db } from "../Config/Config";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams, Link } from "react-router-dom";

const Profile = () => {
  const [img, setImg] = useState("");
  const [user, setUser] = useState();
  //   console.log(img);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    getDoc(doc(db, "users", id))
      .then((docSnap) => {
        if (docSnap.exists) {
          setUser(docSnap.data());
          console.log(user);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    if (img) {
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        );
        try {
          if (user.avatarPath) {
            await deleteObject(ref(storage, user.avatarPath));
          }
          const snap = await uploadBytes(imgRef, img);
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));
          //   console.log(snap.ref.fullPath);
          //   console.log(url);

          await updateDoc(doc(db, "users", id), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });
          setImg("");
        } catch (error) {
          console.log(error.message);
        }
      };
      uploadImg();
    }
  }, [img]);
  const navigate = useNavigate();
  const deleteProfile = async () => {
    try {
      const confirm = window.confirm("Are you sure to delete avatar?");
      if (confirm) {
        await deleteObject(ref(storage, user.avatarPath));

        await updateDoc(doc(db, "users", id), {
          avatar: "",
          avatarPath: "",
        });
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return user ? (
    <section className="profile-page">
      <div className="profile-area">
        <div className="img-area">
          <img
            src={user.avatar || image}
            alt="avatar"
            style={{ height: "200px", width: "200px" }}
          />
          <div className="over">
            <div>
              <label htmlFor="img">
                <BsFillCameraFill />
              </label>
              {user.avatar ? (
                <BsFillTrash3Fill className="delete" onClick={deleteProfile} />
              ) : null}
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="img"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div className="text-area  ">
          <p>
            Name :<span>{user.name}</span>
          </p>
          <p>
            Email : <span>{user.email}</span>
          </p>
          <p>
            Date of birth: <span>{user.dateOfBirth}</span>
          </p>
          <hr />
          <small>{`Joined On :${user.createdAt
            .toDate()
            .toDateString()}`}</small>
          <br />
          <br />
          <Link to="/home" className="button">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  ) : null;
};

export default Profile;
