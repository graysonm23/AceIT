import React from "react";
import "../css/Landing.css";

function Landing() {
  return (
    <div className="wrapperLanding">
      <div class="landing">
        <div class="home-wrap">
          <div class="home-inner"></div>
        </div>
      </div>

      <div class="caption text-center">
        <h1>Ace It</h1>
        <h3>(Augmentative Communication Environment)</h3>
        <a class="btn btn-outline-light btn-lg" href="/login">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Landing;
