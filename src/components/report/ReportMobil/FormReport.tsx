import { Form, redirect } from "react-router-dom";
import { useState } from "react";

import DropdownCheckbox from "./DropdownCheckbox";

const listKodeMobil = ["MDN039", "MDN033", "MDN043", "VNC123", "ARL321", "ERL232"];

export default function FormReport() {
  const [selectedKodeMobil, setSelectedKodeMobil] = useState<string[]>([]);


const handleDropdownChecked = (selected: string[]) => {
  setSelectedKodeMobil(selected);
  console.log("Selected mobil:", selected);
};

  return (
    <main>
      <Form method="post" className="mt-4 space-y-4 w-full">
        <DropdownCheckbox options={listKodeMobil} onSelect={handleDropdownChecked} />

        <div className="grid grid-cols-3 gap-1 items-center justify-center w-full">
          <input className="col-span-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm" type="number" id="name" name="durasi" required />
          <label htmlFor="body" className="text-gray-700 font-semibold">
            Menit
          </label>
        </div>
        
        <button type="submit" className="mt-6 right-0 font-semibold px-10 py-3 rounded-xl bg-blue-500 text-white cursor-pointer">
          Download Report
        </button>
      </Form>
    </main>
  );
}

export async function action({ request }: { request: Request }) {
  // const formData = await request.formData();
  // const postData = Object.fromEntries(formData);

  // await fetch("http://localhost:8089/posts", {
  //   method: "POST",
  //   body: JSON.stringify(postData),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  return redirect("/reportMobil");
}
