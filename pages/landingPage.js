import React from "react";
import Lottie from "react-lottie";
import * as heroData from "../animations/hero.json";
import * as securityData from "../animations/security.json";

function landingPage() {
  const heroOptions = {
    loop: true,
    autoplay: true,
    animationData: heroData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const securityOptions = {
    loop: true,
    autoplay: true,
    animationData: securityData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div class="flex m-auto">
        <div class="flex-1 my-48 ml-32">
          <h1 class="text-6xl text-blue-400 font-bold">Criminal Chain</h1>
          <br />
          <h2 class="text-3xl text-blue-300 font-semibold">
            A Block Chain Based Criminal Record System
          </h2>
        </div>
        <div class="flex-1 my-6">
          <Lottie options={heroOptions} height={500} width={500} />
        </div>
      </div>
      <div class="flex m-auto">
        <div class="flex-1 my-12 mx-24">
          <Lottie options={securityOptions} height={500} width={500} />
        </div>
        <div class="flex-1 p-6 bg-blue-100 rounded-lg shadow mr-32 my-32">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            About Our Project
          </h5>
          <p class="mb-3 font-normal text-gray-500">
            Crime is an act or omission commanded by public law and makes the
            offender liable to punishment by said law. A criminal record is a
            list of a person’s previous criminal convictions. The reason to have
            a criminal record is to help police officers and investigators keep
            track of criminals and know the kind of people they deal with. In this
            final year project, we are interested to design a system where the
            criminal records are secure enough that once entered into the system
            it is nigh impossible to alter them without it being noticed by the
            higher authorities. This can be done by storing said records on a
            blockchain network. The system will be a simple user-friendly
            program built using Next.js with Ethereum blockchain technology to
            enhance its security.
          </p>
        </div>
      </div>
    </>
  );
}

export default landingPage;
