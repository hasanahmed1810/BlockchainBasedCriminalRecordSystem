import React, { useState } from "react";
import Link from "next/link";
import createMissingPerson from "../ethereum/createMissingPerson";
import missingPerson from "../ethereum/missingPerson";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import HeightIcon from "@mui/icons-material/Height";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ScaleIcon from "@mui/icons-material/Scale";
import DoneIcon from "@mui/icons-material/Done";

function viewMissingPersons({ missingPersons, missingPersonsData }) {
  const [search, setSearch] = useState();

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-28 border border-gray mb-52">
      <table class="w-full text-sm text-left text-gray-700">
        <caption class="p-5 text-2xl font-semibold text-left text-gray-900 bg-blue-100 ">
          List of Missing People
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
              class="focus:outline-none focus:ring-4 focus:border-blue-600  block p-2 pl-10 text-sm text-gray-900 border border-blue-300 rounded-lg w-80 bg-gray-50"
              placeholder="Search using Civilian ID"
            />
          </div>
        </caption>
        <thead class="text-xs uppercase bg-blue-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              <PersonIcon /> name
            </th>
            <th scope="col" class="px-6 py-3">
              <BadgeIcon /> Civilian id
            </th>
            <th scope="col" class="px-6 py-3">
              <AccessTimeFilledIcon /> age
            </th>
            <th scope="col" class="px-6 py-3">
              <HeightIcon /> height (cm)
            </th>
            <th scope="col" class="px-6 py-3">
              <ScaleIcon /> weight (kg)
            </th>
            <th scope="col" class="px-6 py-3">
              <DoneIcon /> Found
            </th>
          </tr>
        </thead>
        <tbody>
          {missingPersonsData.map((element, index) => {
            if (search) {
              if (!element[1].includes(search)) {
                return;
              }
            }
            return (
              <Link href={"missingPersonDetail/" + missingPersons[index]}>
                <tr class="cursor-pointer transition ease-in-out delay-100 hover:bg-blue-100 bg-white border-b ">
                  <td class="px-6 py-4">{element[0]}</td>
                  <td class="px-6 py-4">{element[1]}</td>
                  <td class="px-6 py-4">{element[3]}</td>
                  <td class="px-6 py-4">{element[4]}</td>
                  <td class="px-6 py-4">{element[5]}</td>
                  <td class="px-6 py-4">{element[11] ? "Yes" : "No"}</td>
                </tr>
              </Link>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default viewMissingPersons;

viewMissingPersons.getInitialProps = async () => {
  const missingPersons = await createMissingPerson.methods
    .getDeployedContracts()
    .call();
  const missingPersonsData = await Promise.all(
    missingPersons.map((element) =>
      missingPerson(element).methods.getData().call()
    )
  );
  return { missingPersons, missingPersonsData };
};
