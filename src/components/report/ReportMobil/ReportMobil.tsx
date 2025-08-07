import { redirect } from "react-router-dom";
import FormReport from "./FormReport";
import ReportTable from "./ReportTable";

type DataReport = {
  tanggal: string;
  kodeMobil: string;
  supir: string;
  posisi: string;
  durasi: string;
  lokasi: string;
  ambilAlamat: string;
};


const reportTableData = Array.from({ length: 50 }, (_, i) => ({
  tanggal: `JKT9${i % 5}`,
  kodeMobil: `JKT9${i % 5}`,
  supir: i % 2 === 0 ? "Muh Arlen" : "Ahmad Calvin",
  posisi: `111222${i % 5}`,
  durasi: `1${i % 5}/0${i % 5}/2025 1${i % 5}:4${i % 5}:1${i % 5}`,
  lokasi: `0${i % 5}/0${i % 5}/2025`,
  ambilAlamat: '0'
}));

export default function ReportMobil() {
  return (
    <>
      <main className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-xl shadow-md p-4">
          <p>dsadsads</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <FormReport />
        </div>
      </main>

      <main className="mt-4">
        <ReportTable data={reportTableData} />
      </main>
    </>
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

  return redirect("/");
}
