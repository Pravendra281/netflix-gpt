import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { NetFlix_logo } from "../Utils/constant";

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
     const unsubscribe = onAuthStateChanged(auth,(user) => {
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
    // unsubscribe when component Un-Mount
    return ()=>unsubscribe();
  },[])
  return (
    <>
      <div className="absolute w-screen bg-gradient-to-b from-black  px-8 py-2 z-10 flex justify-between">
        <img
          className="w-48"
          src={NetFlix_logo}
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
