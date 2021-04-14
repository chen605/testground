import React from "react";
import "../styles/ProfilePage.css";
import { auth } from "../firebase/firebase";

function ProfilePage() {
  return (
    <div>
      <h1>Profile page</h1>
      <button onClick={() => auth.signOut()} className="profileScreen__signOut">
        Sign Out
      </button>
    </div>
  );
}

export default ProfilePage;
