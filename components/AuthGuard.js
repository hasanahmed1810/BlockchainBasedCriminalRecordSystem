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
        router.push("/landingPage");
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
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (
        (!user &&
          (router.asPath == "/login" || router.asPath == "/signUpCivilian")) ||
        (user &&
          user.displayName == "civilian" &&
          (router.asPath == "/createFIR" ||
            router.asPath == "/createLossReport" ||
            router.asPath == "/createMissingPersonReport")) ||
        (user &&
          user.displayName == null &&
          router.asPath != "/login" &&
          router.asPath != "/signUpCivilian")
      ) {
      } else {
        router.push("/landingPage");
      }
    });
  }, []);

  return (
    <div>
      <nav class="bg-blue-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/landingPage" class="flex items-center">
            <img src="/blockchain-logo.png" class="h-12 mr-3" alt="" />
            <span class="self-center text-xl font-semibold whitespace-nowrap ">
              Criminal Chain
            </span>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              {!user ||
                (user.displayName == null && (
                  <li>
                    <button
                      onClick={() => router.push("/viewMissingPersons")}
                      class={
                        router.asPath == "/viewMissingPersons"
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                          : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      }
                    >
                      Missing Persons
                    </button>
                  </li>
                ))}
              {!user ||
                (user.displayName == null && (
                  <li>
                    <button
                      onClick={() => router.push("/viewLossReports")}
                      class={
                        router.asPath == "/viewLossReports"
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                          : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      }
                    >
                      Loss Reports
                    </button>
                  </li>
                ))}
              {!user ||
                (user.displayName == null && (
                  <li>
                    <button
                      onClick={() => router.push("/viewFIRs")}
                      class={
                        router.asPath == "/viewFIRs"
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                          : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      }
                    >
                      FIRs
                    </button>
                  </li>
                ))}
              {!user ||
                (user.displayName == null && (
                  <li>
                    <button
                      onClick={() => router.push("/viewInvestigations")}
                      class={
                        router.asPath == "/viewInvestigations"
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                          : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      }
                    >
                      Investigations
                    </button>
                  </li>
                ))}
              {!user ||
                (user.displayName == null && (
                  <li>
                    <button
                      onClick={() => router.push("/viewChargeSheets")}
                      class={
                        router.asPath == "/viewChargeSheets"
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                          : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      }
                    >
                      Charge Sheets
                    </button>
                  </li>
                ))}
              {!user ||
                (user.displayName == null && (
                  <li>
                    <button
                      onClick={() => router.push("/")}
                      class={
                        router.asPath == "/"
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                          : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      }
                    >
                      Criminals
                    </button>
                  </li>
                ))}
              {!user ||
                (user.displayName == null && (
                  <li class="border-r border-blue-200 pr-8">
                    <button
                      onClick={() => router.push("/analytics")}
                      class={
                        router.asPath == "/analytics"
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                          : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      }
                    >
                      Analytics
                    </button>
                  </li>
                ))}
              {user?.displayName == "civilian" && (
                <li>
                  <button
                    onClick={() => router.push("/createFIR")}
                    class={
                      router.asPath == "/createFIR"
                        ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                        : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                    }
                  >
                    Submit FIR
                  </button>
                </li>
              )}
              {user?.displayName == "civilian" && (
                <li>
                  <button
                    onClick={() => router.push("/createLossReport")}
                    class={
                      router.asPath == "/createLossReport"
                        ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                        : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                    }
                  >
                    Submit Loss Report
                  </button>
                </li>
              )}
              {user?.displayName == "civilian" && (
                <li class="border-r border-blue-200 pr-10">
                  <button
                    onClick={() => router.push("/createMissingPersonReport")}
                    class={
                      router.asPath == "/createMissingPersonReport"
                        ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                        : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                    }
                  >
                    Submit Missing Person Report
                  </button>
                </li>
              )}
              {user && (
                <li>
                  <button
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 cursor-default md:p-0 "
                    aria-current="page"
                  >
                    {user.email}
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={user ? signout : logIn}
                  class={
                    router.asPath == "/login"
                      ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  }
                >
                  {user ? "Log out" : "Log in"}
                </button>
              </li>
              {!user && (
                <li>
                  <button
                    onClick={() => router.push("/signUpCivilian")}
                    class={
                      router.asPath == "/signUpCivilian"
                        ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                        : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                    }
                  >
                    Civilian Sign up
                  </button>
                </li>
              )}
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
