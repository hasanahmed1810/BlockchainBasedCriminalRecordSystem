import React from "react";
import lossReport from "../../../ethereum/lossReport";

function LossReportDetail({ id, lossReportData, investigator, pid }) {
  async function found() {
    await lossReport(id).methods.markAsFound().send({
      from: "0x19EB8fcE962B24acf466dbA05B52Aa299B24Ac27",
      gas: 6721975,
    });
    location.reload();
  }

  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-28 mt-28 mb-12 border border-gray">
        <table class="w-full text-sm text-left text-gray-700 ">
          <caption class="p-5 text-2xl font-semibold text-left text-gray-900 bg-blue-100 ">
            <img
              class="float-right h-32 rounded-lg bg-blue-100"
              src={"https://" + pid + ".ipfs.w3s.link"}
              alt=""
            />
            Loss Information
            <br />
            <br />
            Contract ID: {id}
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-blue-50 border border-b-1">
            <tr>
              <th scope="col" class="px-6 py-3">
                Property Type
              </th>
              <th scope="col" class="px-6 py-3">
                Property Description
              </th>
              <th scope="col" class="px-6 py-3">
                Date of Loss
              </th>
              <th scope="col" class="px-6 py-3">
                Time of Loss
              </th>
              <th scope="col" class="px-6 py-3">
                Where Property Was Lost
              </th>
              <th scope="col" class="px-6 py-3">
                Value of Loss
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <td class="px-6 py-4">{lossReportData[4]}</td>
              <td class="px-6 py-4">{lossReportData[5]}</td>
              <td class="px-6 py-4">{lossReportData[6]}</td>
              <td class="px-6 py-4">{lossReportData[7]}</td>
              <td class="px-6 py-4">{lossReportData[8]}</td>
              <td class="px-6 py-4">{lossReportData[9]}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-28 mb-12 border border-gray">
        <table class="w-full text-sm text-left text-gray-700 ">
          <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-blue-100 ">
            Complainant Information
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-blue-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                name
              </th>
              <th scope="col" class="px-6 py-3">
                Civilian ID
              </th>
              <th scope="col" class="px-6 py-3">
                phone number
              </th>
              <th scope="col" class="px-6 py-3">
                email address
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <td class="px-6 py-4">{lossReportData[0]}</td>
              <td class="px-6 py-4">{lossReportData[1]}</td>
              <td class="px-6 py-4">{lossReportData[2]}</td>
              <td class="px-6 py-4">{lossReportData[3]}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {lossReportData[10] && (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-28 mb-4 border border-gray">
          <table class="w-full text-sm text-left text-gray-700 ">
            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-blue-100 ">
              Investigator Information
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-blue-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  OFFICER name
                </th>
                <th scope="col" class="px-6 py-3">
                  Officer ID
                </th>
                <th scope="col" class="px-6 py-3">
                  badge number
                </th>
                <th scope="col" class="px-6 py-3">
                  OFFICER rank
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b ">
                <td class="px-6 py-4">{investigator[0]}</td>
                <td class="px-6 py-4">{investigator[1]}</td>
                <td class="px-6 py-4">{investigator[2]}</td>
                <td class="px-6 py-4">{investigator[3]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div class="rounded-lg mx-28 mb-28">
        <a href="/viewLossReports">
          <button
            type="button"
            class="shadow-md mr-4 text-white rounded-lg bg-gradient-to-r from-cyan-300 via-cyan-300 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium text-sm px-24 py-2.5 text-center"
          >
            Return
          </button>
        </a>
        {lossReportData[10] ? (
          <button
            disabled={lossReportData[11]}
            onClick={found}
            type="button"
            class="shadow-md rounded-lg text-white bg-gradient-to-r from-cyan-300 via-cyan-300 to-cyan-400 enabled:hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium text-sm px-24 py-2.5 text-center"
          >
            {lossReportData[11] ? "Has Been Found" : "Mark as found"}
          </button>
        ) : (
          <a href={"/lossReportDetail/" + id + "/addInvestigator"}>
            <button
              type="button"
              class="shadow-md rounded-lg text-white bg-gradient-to-r from-cyan-300 via-cyan-300 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium text-sm px-24 py-2.5 text-center"
            >
              Start an Investigation
            </button>
          </a>
        )}
      </div>
    </>
  );
}

LossReportDetail.getInitialProps = async ({ query }) => {
  const { id } = query;
  const lossReportData = await lossReport(id).methods.getData().call();
  const investigator = await lossReport(id).methods.getInvestigator().call();
  const pid = await lossReport(id).methods.getPictureID().call();

  return { id, lossReportData, investigator, pid };
};

export default LossReportDetail;
