import { useState } from "react";

import semuaLogo from "../../assets/MenuShell/semuaLogo.png";
import berjalanLogo from "../../assets/MenuShell/berjalanLogo.png";
import siapLogo from "../../assets/MenuShell/siapLogo.png";
import selesaiLogo from "../../assets/MenuShell/selesaiLogo.png";
import berhentiLogo from "../../assets/MenuShell/berhentiLogo.png";
import infoLogo from "../../assets/MenuShell/infoLogo.png";

const menuProps = [
  { logo: semuaLogo, alt: "Semua Mobil", text: "Semua", modalKey: "semua" },
  { logo: berjalanLogo, alt: "Semua Mobil Berjalan", text: "Berjalan", modalKey: "berjalan" },
  { logo: siapLogo, alt: "Semua Mobil Siap Pakai", text: "Siap", modalKey: "siap" },
  { logo: selesaiLogo, alt: "Semua Mobil Selesai Tugas", text: "Selesai", modalKey: "selesai" },
  { logo: berhentiLogo, alt: "Mobil Berhenti di luar DC", text: "Berhenti Luar DC", modalKey: "berhenti" },
  { logo: infoLogo, alt: "Info Lainnya", text: "Lainnya", modalKey: "lainnya" },
];

import MenuShell from "./MenuShell";
import Modal from "../Modal";
import ModalContent from "./ModalContent";

const menuDetails = [
  { title: "Semua Mobil", content: "Semua", modalValue: "semua" },
  { title: "Semua Mobil Berjalan", content: "Berjalan", modalValue: "berjalan" },
  { title: "Semua Mobil Siap Pakai", content: "Siap", modalValue: "siap" },
  { title: "Semua Mobil Selesai Tugas", content: "Selesai", modalValue: "selesai" },
  { title: "Mobil Berhenti di luar DC", content: "Berhenti Luar DC", modalValue: "berhenti" },
  { title: "Info Lainnya", content: "Lainnya", modalValue: "lainnya" },
];

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModalHandler = () => {
    setActiveModal(null);
  };

  return (
    <>
      <main className="my-3 p-4 px-[5%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {menuProps.map((prop) => (
          <MenuShell key={prop.modalKey} logo={prop.logo} alt={prop.alt} text={prop.text} onClick={() => setActiveModal(prop.modalKey)} />
        ))}
      </main>

      {menuDetails.map((detail) =>
        activeModal === detail.modalValue ? (
          <Modal key={detail.modalValue} onClose={closeModalHandler}>
            <ModalContent title={detail.title} content={detail.content} onClose={closeModalHandler} />
          </Modal>
        ) : null
      )}

    </>
  );
}
