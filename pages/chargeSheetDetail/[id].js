import React from "react";
import chargeSheet from "../../ethereum/chargeSheet";

function chargeSheetDetail({ id, chargeSheetData }) {
  async function onClick() {
    await chargeSheet(id).methods.personIsGuilty().send({
      from: "0x19EB8fcE962B24acf466dbA05B52Aa299B24Ac27",
      gas: 6721975,
    });
    location.reload();
  }

  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-28 mt-28 mb-12 border border-gray">
        <table class="w-full text-sm text-left text-gray-700 ">
          <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-blue-100 ">
            Details of the Accused
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
                Date of Birth
              </th>
              <th scope="col" class="px-6 py-3">
                Charge
              </th>
              <th scope="col" class="px-6 py-3">
                Under the Act
              </th>
              <th scope="col" class="px-6 py-3">
                Under Section
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <td class="px-6 py-4">{chargeSheetData[0]}</td>
              <td class="px-6 py-4">{chargeSheetData[1]}</td>
              <td class="px-6 py-4">{chargeSheetData[2]}</td>
              <td class="px-6 py-4">{chargeSheetData[3]}</td>
              <td class="px-6 py-4">{chargeSheetData[4]}</td>
              <td class="px-6 py-4">{chargeSheetData[5]}</td>
            </tr>
          </tbody>
        </table>
        <a href="/viewChargeSheets">
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
            Details of the Hearing
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-blue-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name of Court
              </th>
              <th scope="col" class="px-6 py-3">
                Address of Court
              </th>
              <th scope="col" class="px-6 py-3">
                Date of Hearing
              </th>
              <th scope="col" class="px-6 py-3">
                Time of Hearing
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <td class="px-6 py-4">{chargeSheetData[6]}</td>
              <td class="px-6 py-4">{chargeSheetData[7]}</td>
              <td class="px-6 py-4">{chargeSheetData[8]}</td>
              <td class="px-6 py-4">{chargeSheetData[9]}</td>
            </tr>
          </tbody>
        </table>

        {chargeSheetData[10] ? (
          <a href="/addCriminalForm">
            <button
              type="button"
              class="w-full text-white bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium text-sm px-32 py-2.5 text-center"
            >
              Add to Records as Person Has Been Found Guilty
            </button>
          </a>
        ) : (
          <button
            onClick={onClick}
            type="button"
            class="w-full text-white bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium text-sm px-32 py-2.5 text-center"
          >
            Mark This Person As Guilty
          </button>
        )}
      </div>
    </>
  );
}

chargeSheetDetail.getInitialProps = async ({ query }) => {
  const { id } = query;
  const chargeSheetData = await chargeSheet(id).methods.getData().call();
  console.log(chargeSheetData);
  return { id, chargeSheetData };
};

export default chargeSheetDetail;
