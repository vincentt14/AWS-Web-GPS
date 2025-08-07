type MenuShellProps = {
  logo: string;
  alt: string;
  text: string;
  onClick: () => void;
};

export default function MenuShell({ logo, alt, text, onClick }: MenuShellProps) {
  return (
    <button onClick={onClick} className="bg-white cursor-pointer w-[200px] h-[180px] rounded-xl shadow flex flex-col items-center justify-center space-y-3 hover:shadow-md transition">
      <img src={logo} alt={alt} className="h-16 w-16" />
      <p className="text-gray-700 text-sm font-medium">{text}</p>
    </button>
  );
}
