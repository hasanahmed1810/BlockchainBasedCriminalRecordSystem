import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import createFIR from "../ethereum/createFIR";
import fir from "../ethereum/fir";
import createInvestigation from "../ethereum/createInvestigation";
import Investigation from "../ethereum/Investigation";
import createChargeSheet from "../ethereum/createChargeSheet";
import chargeSheet from "../ethereum/chargeSheet";
import createMissingPerson from "../ethereum/createMissingPerson";
import missingPerson from "../ethereum/missingPerson";
import createLossReport from "../ethereum/createLossReport";
import lossReport from "../ethereum/lossReport";

function analytics({
  FIRData,
  investigationData,
  chargeSheetData,
  missingPersonsData,
  lossReportsData,
}) {
  const BeingInvestigated = FIRData.filter(
    (element) => element[10] == true
  ).length;
  const notBeingInvestigated = FIRData.filter(
    (element) => element[10] == false
  ).length;
  const complete = investigationData.filter(
    (element) => element[5] == true
  ).length;
  const notComplete = investigationData.filter(
    (element) => element[5] == false
  ).length;
  const isGuilty = chargeSheetData.filter(
    (element) => element[10] == true
  ).length;
  const notGuilty = chargeSheetData.filter(
    (element) => element[10] == false
  ).length;
  const personFound = missingPersonsData.filter(
    (element) => element[11] == true
  ).length;
  const personNotFound = missingPersonsData.filter(
    (element) => element[11] == false
  ).length;
  const propertyFound = lossReportsData.filter(
    (element) => element[11] == true
  ).length;
  const propertyNotFound = lossReportsData.filter(
    (element) => element[11] == false
  ).length;
  const fir = {
    labels: ["No", "Yes"],
    datasets: [
      {
        data: [notBeingInvestigated, BeingInvestigated],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const investigations = {
    labels: ["No", "Yes"],
    datasets: [
      {
        data: [notComplete, complete],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const guilty = {
    labels: ["No", "Yes"],
    datasets: [
      {
        data: [notGuilty, isGuilty],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const missingPerson = {
    labels: ["No", "Yes"],
    datasets: [
      {
        data: [personNotFound, personFound],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const missingProperty = {
    labels: ["No", "Yes"],
    datasets: [
      {
        data: [propertyNotFound, propertyFound],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <div class="flex m-28 mb-0 bg-blue-50 rounded-xl p-10 shadow-md">
        <div class="flex-1 m-auto text-center">
          <h1 class="text-blue-700 font-medium text-lg">
            FIR's Being Investigated
          </h1>
          <Pie data={fir} />
        </div>
        <div class="flex-1 m-auto text-center">
          <h1 class="text-blue-700 font-medium text-lg">
            Investigations Completed
          </h1>
          <Pie data={investigations} />
        </div>
        <div class="flex-1 m-auto text-center">
          <h1 class="text-blue-700 font-medium text-lg">
            Suspects Found Guilty
          </h1>
          <Pie data={guilty} />
        </div>
      </div>
      <div class="flex m-28 mt-10 bg-blue-50 rounded-xl p-10 shadow-md">
        <div class="flex-1 m-auto text-center pl-44">
          <h1 class="text-blue-700 font-medium text-lg">
            Missing People Found
          </h1>
          <Pie data={missingPerson} />
        </div>
        <div class="flex-1 m-auto text-center pr-44">
          <h1 class="text-blue-700 font-medium text-lg">Lost Property Found</h1>
          <Pie data={missingProperty} />
        </div>
      </div>
    </div>
  );
}

analytics.getInitialProps = async () => {
  const FIRs = await createFIR.methods.getDeployedContracts().call();
  const FIRData = await Promise.all(
    FIRs.map((element) => fir(element).methods.getData().call())
  );
  const investigations = await createInvestigation.methods
    .getDeployedContracts()
    .call();
  const investigationData = await Promise.all(
    investigations.map((element) =>
      Investigation(element).methods.getData().call()
    )
  );
  const chargeSheets = await createChargeSheet.methods
    .getDeployedContracts()
    .call();
  const chargeSheetData = await Promise.all(
    chargeSheets.map((element) => chargeSheet(element).methods.getData().call())
  );
  const missingPersons = await createMissingPerson.methods
    .getDeployedContracts()
    .call();
  const missingPersonsData = await Promise.all(
    missingPersons.map((element) =>
      missingPerson(element).methods.getData().call()
    )
  );
  const lossReports = await createLossReport.methods
    .getDeployedContracts()
    .call();
  const lossReportsData = await Promise.all(
    lossReports.map((element) => lossReport(element).methods.getData().call())
  );
  return {
    FIRData,
    investigationData,
    chargeSheetData,
    missingPersonsData,
    lossReportsData,
  };
};

export default analytics;
