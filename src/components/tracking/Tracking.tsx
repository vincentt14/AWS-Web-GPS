import TrackingSidebar from "./Navigation/TrackingSidebar";

export default function Tracking() {
  return (
    <main className="px-8 py-4 bg-white rounded-xl shadow-md w-full h-full">
      <h1 className="font-bold text-gray-700 text-xl mb-6">Laporan Berhenti</h1>

      <div className="mt-4 space-y-4 w-[500px]">
        <p className="grid grid-cols-3 items-center justify-center">
          <label htmlFor="body" className="text-gray-700 font-semibold">
            Tanggal Dari
          </label>
          <input className="col-span-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm" type="text" id="name" name="author" required />
        </p>
        <p className="grid grid-cols-3 gap-1 items-center justify-center">
          <label htmlFor="body" className="text-gray-700 font-semibold">
            Tanggal Sampai
          </label>
          <input className=" col-span-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm" type="text" id="name" name="author" required />
        </p>
        <p className="grid grid-cols-3 gap-1 items-center justify-center">
          <label htmlFor="body" className="text-gray-700 font-semibold">
            Urutkan
          </label>
          <input className=" col-span-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm" type="text" id="name" name="author" required />
        </p>
        <p className="grid grid-cols-3 gap-1 items-center justify-center">
          <label htmlFor="body" className="text-gray-700 font-semibold">
            Lebih dari (menit)
          </label>
          <input className=" col-span-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm" type="text" id="name" name="author" required />
        </p>
        <button type="submit" className="mt-6 right-0 font-semibold px-10 py-3 rounded-xl bg-blue-500 text-white cursor-pointer">
          Submit
        </button>
      </div>
    </main>
  );
}
