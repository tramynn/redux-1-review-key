import React from "react";
import { Link } from "react-router-dom";

function GuestLanding() {
  return (
    <div>
      <h1>Welcome to Reducks</h1>
      <Link to="/login">
        <button>Login Here</button>
      </Link>
    </div>
  );
}

export default GuestLanding;
