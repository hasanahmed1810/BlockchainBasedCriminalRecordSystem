import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import criminal from "../../ethereum/criminal.js";
import { db } from "../../firebase.js";
import { doc, setDoc } from "firebase/firestore";

export default function addRecord() {
  const router = useRouter();
  const [trialNumber, setTrialNumber] = useState("");
  const [date, setDate] = useState("");
  const [crime, setCrime] = useState("");
  const [jail, setJail] = useState("");
  const [location, setLocation] = useState("");

  function cancel(event) {
    event.preventDefault();
    const { id } = router.query;
    router.push("/CriminalDetail/" + id);
  }

  async function submit(event) {
    event.preventDefault();
    const { id } = router.query;
    const transaction = await criminal(id)
      .methods.addRecord(trialNumber, date, crime, jail, location)
      .send({
        from: "0x19EB8fcE962B24acf466dbA05B52Aa299B24Ac27",
        gas: 6721975,
      });
    await setDoc(doc(db, "add record transactions", transaction.transactionHash), transaction);
    router.push("/CriminalDetail/" + id);
  }

  return (
    <form
      onSubmit={submit}
      class="bg-blue-50 m-28 border border-gray p-16 shadow-md sm:rounded-lg"
    >
      <div class="mb-6">
        <label for="trial" class="block mb-2 text-sm font-medium text-gray-900">
          Trial Number
        </label>
        <input
          onChange={(event) => setTrialNumber(event.target.value)}
          type="text"
          id="trial"
          class=" border border-blue-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-4 focus:border-blue-60 block w-full p-2.5 "
          required
        />
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="date"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Date
          </label>
          <input
            onChange={(event) => setDate(event.target.value)}
            type="text"
            id="date"
            class=" border border-blue-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-4 focus:border-blue-60 block w-full p-2.5 "
            required
          />
        </div>
        <div>
          <label
            for="crime"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Crime Committed
          </label>
          <input
            onChange={(event) => setCrime(event.target.value)}
            type="text"
            id="crime"
            class=" border border-blue-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-4 focus:border-blue-60 block w-full p-2.5 "
            required
          />
        </div>
        <div>
          <label
            for="jail"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Jail
          </label>
          <input
            onChange={(event) => setJail(event.target.value)}
            type="text"
            id="jail"
            class=" border border-blue-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-4 focus:border-blue-60 block w-full p-2.5  "
            required
          />
        </div>
        <div>
          <label
            for="location"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Location
          </label>
          <input
            onChange={(event) => setLocation(event.target.value)}
            type="text"
            id="location"
            class=" border border-blue-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-4 focus:border-blue-60 block w-full p-2.5  "
            required
          />
        </div>
      </div>

      <button
        id="cancel"
        type="button"
        onClick={cancel}
        class="bg-white text-blue-700 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center mr-4"
      >
        Cancel
      </button>

      <button
        id="submit"
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center "
      >
        Submit
      </button>
    </form>
  );
}
