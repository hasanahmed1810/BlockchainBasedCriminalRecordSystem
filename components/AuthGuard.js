import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

function AuthGuard({ children }) {
  const router = useRouter();
  const [user, setUser] = useState();

  function signout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  }

  function logIn() {
    router.push("/login");
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user || router.asPath == "/landingPage" || router.asPath == "/createFIR") {
        if (user) {
          setUser(user.email);
        } else {
          setUser(null);
        }
      } else {
        router.push("/login");
      }
    });
  }, []);

  return (
    <div>
      <nav class="bg-blue-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap ">
              Criminal Chain
            </span>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              {user && (
                <li>
                  <button
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                    aria-current="page"
                  >
                    {user}
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={user ? signout : logIn}
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  {user ? "Log out" : "Log in"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <footer class="bg-blue-100 shadow md:flex md:items-center md:justify-between md:p-6 ">
        <span class="p-4 text-sm text-gray-500 sm:text-center dark:text-gray-400 m-auto">
          <p class="hover:underline">
            © 2023 Criminal Chain™ All Rights Reserved
          </p>
        </span>
      </footer>
    </div>
  );
}

export default AuthGuard;
