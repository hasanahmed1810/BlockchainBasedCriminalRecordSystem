import * as React from "react";
import { useState } from "react";
import createCriminal from "../ethereum/createCriminal.js";
import { useRouter } from "next/router";
import { Web3Storage } from "web3.storage";

export default function AddressForm() {
  const client = new Web3Storage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDllODI2M2I5NGZmMjNFNDIyMjc3NWI3Q0I2ZWVkOWIzNjY2MWZiODQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjU2NjgzMDIwODMsIm5hbWUiOiJGWVAifQ.Z5f_2aRj4-6B1fcXc71VMduUXjYk2lNUF5CuJn9Iy6I",
  });
  const router = useRouter();
  const [name, setName] = useState("");
  const [civID, setCid] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [physique, setPhysique] = useState("");
  const [mother, setMother] = useState("");
  const [father, setFather] = useState("");
  const [dob, setDob] = useState("");
  const [skinTone, setSkinTone] = useState("");
  const [nativeLanguage, setNativeLanguage] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [facialHairColor, setFacialHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [mark, setMark] = useState("");
  const [religion, setReligion] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [image, setImage] = useState();

  function cancel(event) {
    event.preventDefault();
    router.push("/");
  }

  async function submit(event) {
    event.preventDefault();
    const cid = await client.put(image, {
      name: name,
      wrapWithDirectory: false,
    });
    const data = [
      cid,
      name,
      civID,
      age,
      height,
      mother,
      father,
      dob,
      skinTone,
      hairColor,
      facialHairColor,
      physique,
      eyeColor,
      mark,
      religion,
      weight,
      nativeLanguage,
      citizenship,
      placeOfBirth,
    ];
    createCriminal.methods.createCriminal(data).send({
      from: "0x19EB8fcE962B24acf466dbA05B52Aa299B24Ac27",
      gas: 6721975,
    });
    router.push("/");
    console.log(data);
  }
  return (
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
            type="number"
            id="CID"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="age"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Age
          </label>
          <input
            onChange={(event) => setAge(event.target.value)}
            type="number"
            id="age"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="height"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Height (in cm)
          </label>
          <input
            onChange={(event) => setHeight(event.target.value)}
            type="number"
            id="height"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="weight"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Weight (in kg)
          </label>
          <input
            onChange={(event) => setWeight(event.target.value)}
            type="number"
            id="weight"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="physique"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Physique
          </label>
          <input
            onChange={(event) => setPhysique(event.target.value)}
            type="text"
            id="physique"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="mother"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Mother's Name
          </label>
          <input
            onChange={(event) => setMother(event.target.value)}
            type="text"
            id="mother"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="father"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Father's Name
          </label>
          <input
            onChange={(event) => setFather(event.target.value)}
            type="text"
            id="father"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="DOB"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Date of Birth
          </label>
          <input
            onChange={(event) => setDob(event.target.value)}
            type="text"
            id="DOB"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="skinTone"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Skin Tone
          </label>
          <input
            onChange={(event) => setSkinTone(event.target.value)}
            type="text"
            id="skinTone"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="lang"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Native Language
          </label>
          <input
            onChange={(event) => setNativeLanguage(event.target.value)}
            type="text"
            id="lang"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="hairColor"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Hair Color
          </label>
          <input
            onChange={(event) => setHairColor(event.target.value)}
            type="text"
            id="hairColor"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="facialHairColor"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Facial Hair Color
          </label>
          <input
            onChange={(event) => setFacialHairColor(event.target.value)}
            type="text"
            id="facialHairColor"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="eyeColor"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Eye Color
          </label>
          <input
            onChange={(event) => setEyeColor(event.target.value)}
            type="text"
            id="eyeColor"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="mark"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Identification Mark
          </label>
          <input
            onChange={(event) => setMark(event.target.value)}
            type="text"
            id="mark"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="religion"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Religion
          </label>
          <input
            onChange={(event) => setReligion(event.target.value)}
            type="text"
            id="religion"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="citizenship"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Citizenship
          </label>
          <input
            onChange={(event) => setCitizenship(event.target.value)}
            type="text"
            id="citizenship"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="birth"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Place of Birth
          </label>
          <input
            onChange={(event) => setPlaceOfBirth(event.target.value)}
            type="text"
            id="birth"
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
