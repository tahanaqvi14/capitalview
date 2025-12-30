"use client";
import Charpage from "./lastsection/Chart";
import Infocard from "./lastsection/Infocard";
export default function Pricemovement() {

  return (
    <div className="p-4 w-full max-w-6xl">
      
      <h2 className="text-black text-xl sm:text-2xl font-semibold mb-4">
        Price Movement Explained
      </h2>

      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ================= Chart Card ================= */}
        <Charpage/>

        {/* ================= Info Card ================= */}
        <Infocard/>
      </div>
    </div>
  );
}
