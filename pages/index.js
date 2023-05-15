import React, { useState } from "react";
import createCriminal from "../ethereum/createCriminal.js";
import criminal from "../ethereum/criminal.js";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import HeightIcon from "@mui/icons-material/Height";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LanguageIcon from "@mui/icons-material/Language";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
export default function index({ criminals, criminalData }) {
  const [search, setSearch] = useState();

  return (
    <div class="m-28">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray mb-4">
        <table class="w-full text-sm text-left text-gray-700">
          <caption class="p-5 text-2xl font-semibold text-left text-gray-900 bg-blue-100 ">
            List of Criminals
            <div class=" float-right relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                type="text"
                id="table-search"
                class="focus:outline-none focus:ring-4  focus:border-blue-600  block p-2 pl-10 text-sm text-gray-900 border border-blue-300 rounded-lg w-80 bg-gray-50"
                placeholder="Search using Civilian ID"
              />
            </div>
          </caption>
          <thead class="text-xs uppercase bg-blue-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                <PersonIcon /> Name
              </th>
              <th scope="col" class="px-6 py-3">
                <BadgeIcon /> Civilian ID
              </th>
              <th scope="col" class="px-6 py-3">
                <AccessTimeFilledIcon /> age
              </th>
              <th scope="col" class="px-6 py-3">
                <HeightIcon /> height (in cm)
              </th>
              <th scope="col" class="px-6 py-3">
                <CalendarMonthIcon /> date of birth
              </th>
              <th scope="col" class="px-6 py-3">
                <LanguageIcon /> native language
              </th>
            </tr>
          </thead>
          <tbody>
            {criminalData.map((element, index) => {
              // let Criminal = criminal(criminals[0]).methods.getData().call();
              console.log(criminalData);
              if (search) {
                if (!element[2].includes(search)) {
                  return;
                }
              }
              return (
                <Link href={"CriminalDetail//" + criminals[index]}>
                  <tr class="cursor-pointer transition ease-in-out delay-100 hover:bg-blue-100 bg-white border-b ">
                    <td class="px-6 py-4">{element[1]}</td>
                    <td class="px-6 py-4">{element[2]}</td>
                    <td class="px-6 py-4">{element[3]}</td>
                    <td class="px-6 py-4">{element[4]}</td>
                    <td class="px-6 py-4">{element[7]}</td>
                    <td class="px-6 py-4">{element[16]}</td>
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </table>
      </div>
      <a href="/addCriminalForm">
        <button
          type="button"
          class="w-34 text-white bg-gradient-to-r from-cyan-300 via-cyan-300 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium text-sm px-32 py-2.5 text-center rounded-lg shadow-md"
        >
          Add Criminal
        </button>
      </a>
    </div>
  );
}

index.getInitialProps = async () => {
  const criminals = await createCriminal.methods.getDeployedContracts().call();
  const criminalData = await Promise.all(
    criminals.map((element) => criminal(element).methods.getData().call())
  );
  console.log(criminals);
  console.log(criminalData);
  return { criminals, criminalData };
};
