import * as React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase";

function signUpCivilian() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function submit(event) {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        updateProfile(auth.currentUser, {
          displayName: "civilian"
        });
        const user = userCredential.user;
        console.log(user);
        router.push("/landingPage");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        router.push("/wrong");
      });
  }

  return (
    <section class="bg-gray-50 ">
      <div class="bg-white flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href=""
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <img class=" h-12 mr-3" src="/blockchain-logo.png" alt="logo" />
          Criminal Chain
        </a>
        <div class="w-full bg-blue-50 rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-blue-700 md:text-2xl ">
              Create civilian account
            </h1>
            <form onSubmit={submit} class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-4 focus:border-blue-600 block w-full p-2.5"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-4 focus:border-blue-600 block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default signUpCivilian;
