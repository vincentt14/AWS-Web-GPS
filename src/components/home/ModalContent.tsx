import { IoCloseOutline } from "react-icons/io5";

type ModalContentProps = {
  title: string;
  content: string;
  onClose: () => void;
};

export default function ModalContent({title, content, onClose}: ModalContentProps){
  return (
    <>
    <header className="py-4 text-center flex justify-between items-center font-medium text-2xl">
      <h1>{title}</h1>

      <div className="flex items-center space-x-6">
        <div>
          {/* serach bar */}
        </div>
        <p className="text-gray-700 hover:text-blue-500 text-4xl cursor-pointer" onClick={onClose}>
          <IoCloseOutline />
        </p>
      </div>
    </header>
    <main>
      <p>{content}</p>
    </main>
    </>
  )
}