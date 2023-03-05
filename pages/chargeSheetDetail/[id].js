import React from "react";
import chargeSheet from "../../ethereum/chargeSheet";

function chargeSheetDetail({ id, chargeSheetData }) {
  // need to be removed later on
  async function onClick() {
    await chargeSheet(id).methods.personIsGuilty().send({
      from: "0x19EB8fcE962B24acf466dbA05B52Aa299B24Ac27",
      gas: 6721975,
    });
    // location.reload();
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
          <thead class="text-xs text-gray-700 uppercase bg-blue-50">
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
            <tr class="bg-white">
              <td class="px-6 py-4">{chargeSheetData[0]}</td>
              <td class="px-6 py-4">{chargeSheetData[1]}</td>
              <td class="px-6 py-4">{chargeSheetData[2]}</td>
              <td class="px-6 py-4">{chargeSheetData[3]}</td>
              <td class="px-6 py-4">{chargeSheetData[4]}</td>
              <td class="px-6 py-4">{chargeSheetData[5]}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-28 mb-4 border border-gray">
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
            <tr class="bg-white">
              <td class="px-6 py-4">{chargeSheetData[6]}</td>
              <td class="px-6 py-4">{chargeSheetData[7]}</td>
              <td class="px-6 py-4">{chargeSheetData[8]}</td>
              <td class="px-6 py-4">{chargeSheetData[9]}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="rounded-lg mx-28 mb-28">
        <a href="/viewChargeSheets">
          <button
            type="button"
            class="shadow-md mr-4 text-white rounded-lg bg-gradient-to-r from-cyan-300 via-cyan-300 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium text-sm px-24 py-2.5 text-center"
          >
            Return
          </button>
        </a>
        <a href="/addCriminalForm">
          <button
            onClick={onClick}
            disabled={chargeSheetData[10]}
            type="button"
            class="shadow-md text-white rounded-lg bg-gradient-to-r from-cyan-300 via-cyan-300 to-cyan-400 enabled:hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium text-sm px-24 py-2.5 text-center"
          >
            {chargeSheetData[10]
              ? "Person Has Been Marked Guilty"
              : "Mark This Person As Guilty and Add to Criminal Records"}
          </button>
        </a>
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
