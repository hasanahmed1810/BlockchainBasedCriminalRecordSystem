import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import createFIR from "../ethereum/createFIR";
import { db } from "../firebase.js";
import { doc, setDoc } from "firebase/firestore";

function FIR() {
  const router = useRouter();

  const [name, setName] = useState();
  const [civID, setCid] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [station, setStation] = useState();
  const [DOI, setDOI] = useState();
  const [TOI, setTOI] = useState();
  const [POI, setPOI] = useState();
  const [details, setDetails] = useState();

  async function submit(event) {
    event.preventDefault();
    // console.log(name, civID, phone, email, address, station, DOI, TOI, POI, details)
    const transaction = await createFIR.methods
      .createFIR(
        name,
        civID,
        phone,
        email,
        address,
        station,
        DOI,
        TOI,
        POI,
        details
      )
      .send({
        from: "0x19EB8fcE962B24acf466dbA05B52Aa299B24Ac27",
        gas: 6721975,
      });
    await setDoc(
      doc(db, "create FIR transactions", transaction.transactionHash),
      transaction
    );
    router.push("/success");
  }

  function cancel(event) {
    event.preventDefault();
    router.push("/landingPage");
  }

  return (
    <form
      onSubmit={submit}
      class="bg-blue-50 m-28 border border-gray p-16 shadow-md sm:rounded-lg"
    >
      <h1 class="text-xl font-bold leading-tight tracking-tight text-blue-700 md:text-2xl mb-8">
        Submit an FIR
      </h1>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Name
          </label>
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            id="name"
            class="border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="CID"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Civilian ID
          </label>
          <input
            onChange={(event) => setCid(event.target.value)}
            type="tel"
            pattern="[0-9]{13}"
            id="CID"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Phone Number
          </label>
          <input
            onChange={(event) => setPhone(event.target.value)}
            type="tel"
            pattern="[0-9]{10}"
            id="phone"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Email Address
          </label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            id="email"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="address"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Current Address
          </label>
          <input
            onChange={(event) => setAddress(event.target.value)}
            type="text"
            id="address"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="station"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Police Station
          </label>
          <input
            onChange={(event) => setStation(event.target.value)}
            type="text"
            id="station"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="DOI"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Date of Incident
          </label>
          <input
            onChange={(event) => setDOI(event.target.value)}
            type="date"
            id="DOI"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="TOI"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Time of Incident
          </label>
          <input
            onChange={(event) => setTOI(event.target.value)}
            type="time"
            id="TOI"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="POI"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Place of Incident
          </label>
          <input
            onChange={(event) => setPOI(event.target.value)}
            type="text"
            id="POI"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="details"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            The Incident
          </label>
          <input
            onChange={(event) => setDetails(event.target.value)}
            type="text"
            id="details"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
      </div>

      <button
        type="button"
        onClick={cancel}
        class="bg-white text-blue-700 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center mr-4"
      >
        Cancel
      </button>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center "
      >
        Submit
      </button>
    </form>
  );
}

export default FIR;
