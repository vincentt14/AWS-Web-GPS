import { useState } from "react";

import MenuShell from "./MenuShell";
import Modal from "../Modal";
import ModalContent from "./ModalContent";
import Dropdown from "./Dropdown";
import Chart from "./Chart";
import MainTable from "./MainTable";
import { ChartData, ListKodeDC, MainTabelData, MenuDetails, MenuProps, SemuaTableData } from "../../data/home_dummy";

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModalHandler = () => {
    setActiveModal(null);
  };

  const handleSelect = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {MenuProps.map((prop) => (
          <MenuShell key={prop.modalKey} logo={prop.logo} alt={prop.alt} text={prop.text} onClick={() => setActiveModal(prop.modalKey)} />
        ))}
      </main>

      {MenuDetails.map((detail) =>
        activeModal === detail.modalValue ? (
          <Modal key={detail.modalValue} onClose={closeModalHandler}>
            <ModalContent title={detail.title} content={detail.content} data={SemuaTableData} onClose={closeModalHandler} />
          </Modal>
        ) : null
      )}

      <main className="mt-4 p-4 bg-white rounded-xl shadow-md">
        <Dropdown options={ListKodeDC} onSelect={handleSelect} />
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <Chart data={ChartData} />
          </div>
          <div className="col-span-2">
            <MainTable data={MainTabelData} />
          </div>
        </div>
      </main>
    </>
  );
}
