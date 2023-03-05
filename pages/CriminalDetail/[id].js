import React from "react";
import criminal from "../../ethereum/criminal.js";

function criminalDetail({ criminalData, id, criminalRecords }) {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-28 mt-28 mb-4 border border-gray">
        <table class="w-full text-sm text-left text-gray-700 ">
          <caption class="p-5 text-2xl font-semibold text-left text-gray-900 bg-blue-100 ">
            <img
              class="float-right h-32 rounded-lg bg-blue-100"
              src={"https://" + criminalData[0] + ".ipfs.w3s.link"}
              alt=""
            />
            Criminal Details
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
                age
              </th>
              <th scope="col" class="px-6 py-3">
                height
              </th>
              <th scope="col" class="px-6 py-3">
                date of birth
              </th>
              <th scope="col" class="px-6 py-3">
                native language
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <td class="px-6 py-4">{criminalData[1]}</td>
              <td class="px-6 py-4">{criminalData[2]}</td>
              <td class="px-6 py-4">{criminalData[3]}</td>
              <td class="px-6 py-4">{criminalData[4]}</td>
              <td class="px-6 py-4">{criminalData[7]}</td>
              <td class="px-6 py-4">{criminalData[16]}</td>
            </tr>
            <tr class="text-xs text-gray-700 bg-blue-50 border-b ">
              <th scope="col" class="px-6 py-3">
                HAIR COLOR
              </th>
              <th scope="col" class="px-6 py-3">
                FACIAL HAIR COLOR
              </th>
              <th scope="col" class="px-6 py-3">
                EYE COLOR
              </th>
              <th scope="col" class="px-6 py-3">
                CITIZENSHIP
              </th>
              <th scope="col" class="px-6 py-3">
                WEIGHT
              </th>
              <th scope="col" class="px-6 py-3">
                PHYSIQUE
              </th>
            </tr>
            <tr class="bg-white border border-b-1">
              <td class="px-6 py-4  ">{criminalData[9]}</td>
              <td class="px-6 py-4">{criminalData[10]}</td>
              <td class="px-6 py-4">{criminalData[12]}</td>
              <td class="px-6 py-4">{criminalData[17]}</td>
              <td class="px-6 py-4">{criminalData[15]}</td>
              <td class="px-6 py-4">{criminalData[11]}</td>
            </tr>
            <tr class="text-xs text-gray-700  bg-blue-50 border-b ">
              <th scope="col" class="px-6 py-3">
                MOTHER'S NAME
              </th>
              <th scope="col" class="px-6 py-3">
                FATHER'S NAME
              </th>
              <th scope="col" class="px-6 py-3">
                RELIGION
              </th>
              <th scope="col" class="px-6 py-3">
                PLACE OF BIRTH
              </th>
              <th scope="col" class="px-6 py-3">
                IDENTIFICATION MARK
              </th>
              <th scope="col" class="px-6 py-3">
                SKIN TONE
              </th>
            </tr>
            <tr class="bg-white ">
              <td class="px-6 py-4">{criminalData[5]}</td>
              <td class="px-6 py-4">{criminalData[6]}</td>
              <td class="px-6 py-4">{criminalData[14]}</td>
              <td class="px-6 py-4">{criminalData[18]}</td>
              <td class="px-6 py-4">{criminalData[13]}</td>
              <td class="px-6 py-4">{criminalData[8]}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="rounded-lg mx-28 mb-16">
        <a href="/">
          <button
            type="button"
            class="shadow-md mr-4 text-white rounded-lg bg-gradient-to-r from-cyan-300 via-cyan-300 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium text-sm px-24 py-2.5 text-center"
          >
            Return
          </button>
        </a>
        <a href={"/addRecord//" + id}>
          <button
            type="button"
            class="shadow-md rounded-lg text-white bg-gradient-to-r from-cyan-300 via-cyan-300 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium text-sm px-24 py-2.5 text-center"
          >
            Add Criminal Record
          </button>
        </a>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-28 mb-28 border border-gray">
        <table class="w-full text-sm text-left text-gray-700 ">
          <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-blue-100 ">
            Criminal Records
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-blue-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Trial number
              </th>
              <th scope="col" class="px-6 py-3">
                date
              </th>
              <th scope="col" class="px-6 py-3">
                crime committed
              </th>
              <th scope="col" class="px-6 py-3">
                jail
              </th>
              <th scope="col" class="px-6 py-3">
                location
              </th>
            </tr>
          </thead>
          <tbody>
            {criminalRecords.map((element, index) => (
              <tr class="bg-white border-b ">
                <td class="px-6 py-4">{element[0]}</td>
                <td class="px-6 py-4">{element[1]}</td>
                <td class="px-6 py-4">{element[2]}</td>
                <td class="px-6 py-4">{element[3]}</td>
                <td class="px-6 py-4">{element[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

criminalDetail.getInitialProps = async ({ query }) => {
  const { id } = query;
  const criminalData = await criminal(id).methods.getData().call();
  const criminalRecords = await criminal(id).methods.getRecords().call();
  // console.log(criminalRecords);
  return { criminalData, id, criminalRecords };
};

export default criminalDetail;
