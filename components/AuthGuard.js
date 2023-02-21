import React from "react";
import { useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

function AuthGuard({ children }) {
  const router = useRouter();

  function signout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user || router.asPath == "/landingPage") {
        
      } else {
        router.push("/login");
      }
    });
  }, []);

  return (
    <div>
      <button
        onClick={signout}
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-8  focus:outline-none"
      >
        sign out
      </button>
      {children}
    </div>
  );
}

export default AuthGuard;
