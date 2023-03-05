import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../animations/success-animation.json";

function success() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div class="bg-white h-screen">
      <div class=" p-6  md:mx-auto">
        <Lottie options={defaultOptions} height={400} width={400} />
        <div class="text-center">
          <h1 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Your Report has been submitted
          </h1>
          <div class="py-10 text-center">
            <a
              href="/landingPage"
              class="rounded-lg px-12 bg-cyan-400 hover:bg-cyan-300 text-white font-semibold py-3"
            >
              GO BACK TO LANDING PAGE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default success;
