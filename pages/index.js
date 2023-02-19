import React, { useEffect, useState } from "react";
import createCriminal from "../ethereum/createCriminal.js";
import criminal from "../ethereum/criminal.js";
import Link from "next/link";

export default function index({ criminals, criminalData }) {
  // const [criminals, setCriminals] = useState([]);

  // useEffect(async () => {
  //   const criminals = await createCriminal.methods
  //     .getDeployedContracts()
  //     .call();

  //   setCriminals(criminals);
  //   console.log(criminals);
  // }, []);

  async function submit() {
    // var data = {pictureCID: "0", name: "jason", civilianID: 0, age: 30, height: 180, mothersName: "0", fathersName: "0", dateOfBirth: "0", skinTone: "0", hairColor: "0", facialHairColor: "0", physique: "0", eyeColor: "0", identificationMark: "0", religion: "0", religion: "0", religion: "0"}
    // var data2 = ("000","john",3467893348,30,180,"mary","jack","01/01/1990","white","black","black","slim","black","scar on eye","islam","example","urdu");
    // const data3 = ["000","hasan",3467893348,30,180,"mary","jack","01/01/1990","white","black","black","slim","black","scar on eye","islam","example","urdu"];
    // createCriminal.methods
    //   .createCriminal(data3)
    //   .send({ from: "0x19EB8fcE962B24acf466dbA05B52Aa299B24Ac27", gas: 6721975 });
    // location.reload();
    // <a href="/addCriminalForm"></a>
  }

  return (
    // <div>
    // {criminals}
    // <br />
    // <button
    //   class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-10"
    //   onClick={submit}
    // >
    //   enter info
    // </button></div>
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-28 mt-28 mb-4 border border-gray">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs  uppercase bg-gray-50">
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
            {/* <tr class="bg-white border-b ">
            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
              Example 1
            </th>
            <td class="px-6 py-4">111111</td>
            <td class="px-6 py-4">31</td>
            <td class="px-6 py-4">150</td>
            <td class="px-6 py-4">01/01/1991</td>
            <td class="px-6 py-4">english</td>
          </tr> */}

            {criminalData.map((element, index) => {
              // let Criminal = criminal(criminals[0]).methods.getData().call();
              // console.log(element[0])
              return (
                <Link href={"CriminalDetail//" + criminals[index]}>
                  <tr class="bg-white border-b ">
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
        <a href="/addCriminalForm">
          <button
            type="button"
            class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-32 py-2.5 text-center"
          >
            Add Criminal
          </button>
        </a>
      </div>
    </>
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
