type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
  function stopPropagationHandler(event: React.MouseEvent) {
    event.stopPropagation();
  }

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.6)] z-20 flex items-center justify-center" onClick={onClose}>
      <dialog open onClick={stopPropagationHandler} style={{ position: "static", margin: 0 }} className="border-none rounded-md shadow-lg overflow-hidden z-20 w-6xl max-w-full p-4">
        {children}
      </dialog>
    </div>
  );
}
