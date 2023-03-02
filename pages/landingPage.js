import React from "react";
import Lottie from "react-lottie";
import * as heroData from "../animations/hero.json";
import * as securityData from "../animations/security.json";
import * as ethereumData from "../animations/ethereum.json";

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

  const ethereumOptions = {
    loop: true,
    autoplay: true,
    animationData: ethereumData,
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
            A Blockchain Based Criminal Record System
          </h2>
          <h2 class="text-xl text-blue-200 font-semibold">
            Developed By Hasan Ahmed and Abdullahi Ali
          </h2>
        </div>
        <div class="flex-1 my-6">
          <Lottie options={heroOptions} height={500} width={500} />
        </div>
      </div>
      <hr class="w-2/3 mx-auto h-0.5 mt-16 bg-blue-200 border-0"></hr>
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
            track of criminals and know the kind of people they deal with. In
            this final year project, we are interested to design a system where
            the criminal records are secure enough that once entered into the
            system it is nigh impossible to alter them without it being noticed
            by the higher authorities. This can be done by storing said records
            on a blockchain network. The system will be a simple user-friendly
            program built using Next.js with Ethereum blockchain technology to
            enhance its security.
          </p>
        </div>
      </div>
      <hr class="w-2/3 mx-auto h-0.5 mb-24 bg-blue-200 border-0"></hr>
      <div class="flex m-auto">
        <div class="flex-1 my-32 ml-32">
          <h1 class="text-6xl text-blue-400 font-bold">Technologies Used</h1>
          <br />
          <div class="flex">
            <img
              class="h-24"
              src="https://miro.medium.com/max/1400/1*gxOA6-EF8P8vnYdk3Bc9bg.png"
              alt=""
            />
            <img
              class="ml-10 h-24"
              src="https://www.vectorlogo.zone/logos/firebase/firebase-ar21.png"
              alt=""
            />
            <img
              class="ml-10 h-24"
              src="https://repository-images.githubusercontent.com/24655114/c71c5800-6a8c-11e9-9117-8ec357c9f69e"
              alt=""
            />
          </div>
          <br />
          <div class="flex">
            <img
              class="h-24"
              src="https://cryptologos.cc/logos/versions/ethereum-eth-logo-full-vertical.svg?v=024"
              alt=""
            />
            <img
              class="h-24 ml-20 mr-8"
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png"
              alt=""
            />
            <img
              class="ml-10 h-24"
              src="https://miro.medium.com/max/624/1*6Cbo1WZ499BM4b8Q7Ziyug.png"
              alt=""
            />
          </div>
        </div>
        <div class="flex-1">
          <Lottie options={ethereumOptions} height={500} width={500} />
        </div>
      </div>
    </>
  );
}

export default landingPage;
