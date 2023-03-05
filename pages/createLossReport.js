import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import createLossReport from "../ethereum/createLossReport";
import { Web3Storage } from "web3.storage";
import { db } from "../firebase.js";
import { doc, setDoc } from "firebase/firestore";

function LossReport() {
  const client = new Web3Storage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDllODI2M2I5NGZmMjNFNDIyMjc3NWI3Q0I2ZWVkOWIzNjY2MWZiODQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjU2NjgzMDIwODMsIm5hbWUiOiJGWVAifQ.Z5f_2aRj4-6B1fcXc71VMduUXjYk2lNUF5CuJn9Iy6I",
  });

  const router = useRouter();

  const [name, setName] = useState();
  const [civID, setCid] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [type, setType] = useState();
  const [description, setDescription] = useState();
  const [DOI, setDOI] = useState();
  const [TOI, setTOI] = useState();
  const [POI, setPOI] = useState();
  const [value, setValue] = useState();
  const [image, setImage] = useState();

  async function submit(event) {
    event.preventDefault();
    const pid = await client.put(image, {
      name: description,
      wrapWithDirectory: false,
    });
    const transaction = await createLossReport.methods
      .createLossReport(
        pid,
        name,
        civID,
        phone,
        email,
        type,
        description,
        DOI,
        TOI,
        POI,
        value
      )
      .send({
        from: "0x19EB8fcE962B24acf466dbA05B52Aa299B24Ac27",
        gas: 6721975,
      });
    await setDoc(
      doc(db, "create Loss Report transactions", transaction.transactionHash),
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
        Submit a Loss Report
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
            for="type"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Property Type
          </label>
          <input
            onChange={(event) => setType(event.target.value)}
            type="text"
            id="type"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Property Description
          </label>
          <input
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            id="description"
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
            Date of Loss
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
            Time of Loss
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
            Where Property Was Lost
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
            for="value"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Value of Loss
          </label>
          <input
            onChange={(event) => setValue(event.target.value)}
            type="number"
            id="value"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
      </div>

      <label
        class="block mb-2 text-sm font-medium text-gray-900 "
        for="large_size"
      >
        Upload Image
      </label>
      <input
        onChange={(event) => setImage(event.target.files)}
        class="p-4 block w-full text-lg text-gray-900 border border-blue-300 rounded-lg cursor-pointer bg-white  focus:outline-none focus:ring-4 focus:border-blue-50 mb-8"
        id="large_size"
        type="file"
        required
      ></input>

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

export default LossReport;
