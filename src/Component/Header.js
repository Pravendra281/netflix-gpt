import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(()=>{
    onAuthStateChanged(auth,(user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        // ...
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
  },[])
  return (
    <>
      <div className="absolute w-screen bg-gradient-to-b from-black  px-8 py-2 z-10 flex justify-between">
        <img
          className="w-48"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />

       {user && <div className="flex p-2">
          <img
            className="w-12 h-12 "
            src={user?.photoURL}
            alt="user-logo"
          />
          <button onClick={handleSignOut} className="font-bold text-white mx-2">
            (Sign Out)
          </button>
        </div>}
      </div>
    </>
  );
};

export default Header;
