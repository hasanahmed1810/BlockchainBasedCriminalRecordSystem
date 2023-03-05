import React, { useState } from "react";
import Link from "next/link";
import createInvestigation from "../../ethereum/createInvestigation";
import Investigation from "../../ethereum/Investigation";

function viewInvestigations({ investigations, investigationData }) {
  const [search, setSearch] = useState();

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-28 border border-gray mb-52">
      <table class="w-full text-sm text-left text-gray-700">
        <caption class="p-5 text-2xl font-semibold text-left text-gray-900 bg-blue-100 ">
          List of Investigations
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
              placeholder="Search using Officer ID"
            />
          </div>
        </caption>
        <thead class="text-xs uppercase bg-blue-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              Officer Name
            </th>
            <th scope="col" class="px-6 py-3">
              Officer ID
            </th>
            <th scope="col" class="px-6 py-3">
              Badge Number
            </th>
            <th scope="col" class="px-6 py-3">
              Officer Rank
            </th>
            <th scope="col" class="px-6 py-3">
              Investigation Status
            </th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {investigationData.map((element, index) => {
            // let Criminal = criminal(criminals[0]).methods.getData().call();
            // console.log(criminalData);
            if (search) {
              if (!element[2].includes(search)) {
                return;
              }
            }
            return (
              <tr class="cursor-pointer transition ease-in-out delay-100 hover:bg-blue-100 bg-white border-b ">
                <Link href={"FIRDetail//" + element[0]}>
                  <td class="px-6 py-4">{element[1]}</td>
                </Link>
                <Link href={"FIRDetail//" + element[0]}>
                  <td class="px-6 py-4">{element[2]}</td>
                </Link>

                <Link href={"FIRDetail//" + element[0]}>
                  <td class="px-6 py-4">{element[3]}</td>
                </Link>

                <Link href={"FIRDetail//" + element[0]}>
                  <td class="px-6 py-4">{element[4]}</td>
                </Link>

                <Link href={"FIRDetail//" + element[0]}>
                  <td class="px-6 py-4">
                    {element[5] ? "Complete" : "In Progress"}
                  </td>
                </Link>

                {element[5] ? (
                  <td class="bg-cyan-500 text-white px-6 py-4 cursor-default">
                    Charge Sheet Issued
                  </td>
                ) : (
                  <Link
                    href={
                      "viewInvestigations//" +
                      investigations[index] +
                      "//createChargeSheet"
                    }
                  >
                    <td class="bg-cyan-400 text-white px-6 py-4">
                      Issue Charge Sheet
                    </td>
                  </Link>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

viewInvestigations.getInitialProps = async () => {
  const investigations = await createInvestigation.methods
    .getDeployedContracts()
    .call();
  const investigationData = await Promise.all(
    investigations.map((element) =>
      Investigation(element).methods.getData().call()
    )
  );
  console.log(investigations);
  console.log(investigationData);
  return { investigations, investigationData };
};

export default viewInvestigations;
