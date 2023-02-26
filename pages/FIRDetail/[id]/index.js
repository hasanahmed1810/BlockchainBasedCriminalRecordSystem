import React from "react";
import FIR from "../../../ethereum/fir";

function FIRDetail({ id, FIRData }) {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-28 mt-28 mb-12 border border-gray">
        <table class="w-full text-sm text-left text-gray-700 ">
          <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-blue-100 ">
            Complainant Information
            <br />
            <br />
            Contract ID: {id}
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-blue-50 border border-b-1">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Civilian ID
              </th>
              <th scope="col" class="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" class="px-6 py-3">
                Email Address
              </th>
              <th scope="col" class="px-6 py-3">
                Current Address
              </th>
              <th scope="col" class="px-6 py-3">
                Police Station
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <td class="px-6 py-4">{FIRData[0]}</td>
              <td class="px-6 py-4">{FIRData[1]}</td>
              <td class="px-6 py-4">{FIRData[2]}</td>
              <td class="px-6 py-4">{FIRData[3]}</td>
              <td class="px-6 py-4">{FIRData[4]}</td>
              <td class="px-6 py-4">{FIRData[5]}</td>
            </tr>
          </tbody>
        </table>
        <a href="/viewFIRs">
          <button
            type="button"
            class="w-full text-white bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium text-sm px-32 py-2.5 text-center"
          >
            Go Back
          </button>
        </a>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-28 mb-28 border border-gray">
        <table class="w-full text-sm text-left text-gray-700 ">
          <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-blue-100 ">
            Incident Information
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-blue-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Date of Incident
              </th>
              <th scope="col" class="px-6 py-3">
                Time of Incident
              </th>
              <th scope="col" class="px-6 py-3">
                Place of Incident
              </th>
              <th scope="col" class="px-6 py-3">
                Details of Incident
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <td class="px-6 py-4">{FIRData[6]}</td>
              <td class="px-6 py-4">{FIRData[7]}</td>
              <td class="px-6 py-4">{FIRData[8]}</td>
              <td class="px-6 py-4">{FIRData[9]}</td>
            </tr>
          </tbody>
        </table>
        <a href={"/FIRDetail//" + id + "//createInvestigation"}>
          <button
            disabled = {FIRData[10]}
            type="button"
            class="w-full text-white bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium text-sm px-32 py-2.5 text-center"
          >
            {FIRData[10] ? "Investigation Started" : "Start an Investigation"}
          </button>
        </a>
      </div>
    </>
  );
}

FIRDetail.getInitialProps = async ({ query }) => {
  const { id } = query;
  const FIRData = await FIR(id).methods.getData().call();
  //   console.log(FIRData);
  return { id, FIRData };
};

export default FIRDetail;
