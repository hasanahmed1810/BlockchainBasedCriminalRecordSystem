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
        {/* <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg> */}
        <Lottie options={defaultOptions} height={400} width={400} />
        <div class="text-center">
          <h1 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Your FIR has been submitted
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
