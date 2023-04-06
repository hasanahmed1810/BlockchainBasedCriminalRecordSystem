import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import createChargeSheet from "../../../ethereum/createChargeSheet";
import Investigation from "../../../ethereum/Investigation";
import { db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";

function ChargeSheet({ id }) {
  const router = useRouter();

  const [name, setName] = useState();
  const [civID, setCid] = useState();
  const [dob, setDob] = useState();
  const [charge, setCharge] = useState();
  const [act, setAct] = useState();
  const [section, setSection] = useState();
  const [court, setCourt] = useState();
  const [address, setAddress] = useState();
  const [doh, setDoh] = useState();
  const [toh, setToh] = useState();

  async function submit(event) {
    event.preventDefault();
    // console.log(name, civID, phone, email, address, station, DOI, TOI, POI, details)

    await Investigation(id).methods.investigationComplete().send({
      from: "0x19EB8fcE962B24acf466dbA05B52Aa299B24Ac27",
      gas: 6721975,
    });

    const transaction = await createChargeSheet.methods
      .createChargeSheet(
        name,
        civID,
        dob,
        charge,
        act,
        section,
        court,
        address,
        doh,
        toh
      )
      .send({
        from: "0x19EB8fcE962B24acf466dbA05B52Aa299B24Ac27",
        gas: 6721975,
      });

    await setDoc(
      doc(db, "create charge sheet transactions", transaction.transactionHash),
      transaction
    );
    router.push("/viewChargeSheets");
  }

  function cancel(event) {
    event.preventDefault();
    router.push("/viewInvestigations");
  }

  return (
    <form
      onSubmit={submit}
      class="bg-blue-50 m-28 border border-gray p-16 shadow-md sm:rounded-lg"
    >
      <h1 class="text-xl font-bold leading-tight tracking-tight text-blue-700 md:text-2xl mb-8">
        Issue Charge Sheet
      </h1>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Name of the Accused
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
            Civilian ID of the Accused
          </label>
          <input
            onChange={(event) => setCid(event.target.value)}
            type="text"
            id="CID"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="dob"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Date of Birth of the Accused
          </label>
          <input
            onChange={(event) => setDob(event.target.value)}
            type="date"
            id="dob"
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
            Charge of the Accused
          </label>
          <input
            onChange={(event) => setCharge(event.target.value)}
            type="text"
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
            Under the Act
          </label>
          <input
            onChange={(event) => setAct(event.target.value)}
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
            Under Section
          </label>
          <input
            onChange={(event) => setSection(event.target.value)}
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
            Court Where Case Will Be Heard
          </label>
          <input
            onChange={(event) => setCourt(event.target.value)}
            type="text"
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
            Address of Court
          </label>
          <input
            onChange={(event) => setAddress(event.target.value)}
            type="text"
            id="TOI"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="doh"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Date of Hearing
          </label>
          <input
            onChange={(event) => setDoh(event.target.value)}
            type="date"
            id="doh"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="toh"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Time of Hearing
          </label>
          <input
            onChange={(event) => setToh(event.target.value)}
            type="time"
            id="toh"
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

ChargeSheet.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default ChargeSheet;
