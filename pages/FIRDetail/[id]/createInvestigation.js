import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import createInvestigation from "../../../ethereum/createInvestigation";
import FIR from "../../../ethereum/fir";
import { db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";

function Investigation({ id }) {
  const router = useRouter();

  const [name, setName] = useState();
  const [civID, setCid] = useState();
  const [badge, setBadge] = useState();
  const [rank, setRank] = useState();

  async function submit(event) {
    event.preventDefault();
    // console.log(name, civID, badge, rank);
    await FIR(id).methods.startInvestigation().send({
      from: "0x19EB8fcE962B24acf466dbA05B52Aa299B24Ac27",
      gas: 6721975,
    });
    const transaction = await createInvestigation.methods
      .createInvestigation(id, name, civID, badge, rank)
      .send({
        from: "0x19EB8fcE962B24acf466dbA05B52Aa299B24Ac27",
        gas: 6721975,
      });
    await setDoc(
      doc(db, "create Investigation transactions", transaction.transactionHash),
      transaction
    );
    router.push("/viewInvestigations");
  }

  function cancel(event) {
    event.preventDefault();
    router.push("/FIRDetail/" + id);
  }

  return (
    <div>
      <form
        onSubmit={submit}
        class="bg-blue-50 m-28 border border-gray p-16 shadow-md sm:rounded-lg"
      >
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Officer Name
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
              Officer ID
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
              for="badge"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Badge Number
            </label>
            <input
              onChange={(event) => setBadge(event.target.value)}
              type="text"
              id="badge"
              class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="rank"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Officer Rank
            </label>
            <input
              onChange={(event) => setRank(event.target.value)}
              type="text"
              id="rank"
              class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
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
    </div>
  );
}

Investigation.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default Investigation;
