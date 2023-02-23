import React from "react";

function wrong() {
  return (
    <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div class="w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div class="relative">
          <div class="absolute">
            <div class="">
              <h1 class="my-2 text-gray-800 font-bold text-4xl">
                Bad Connection or Incorrect Credentials
              </h1>
              <p class="font-bold my-2 text-gray-800">Please Try Again</p>
              <a href="/login">
                <button class="sm:w-full lg:w-auto my-2 border rounded-xl md:py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                  Try Again
                </button>
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  );
}

export default wrong;
