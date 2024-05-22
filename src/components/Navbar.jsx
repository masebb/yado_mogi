import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="p-2 flex bg-gray-500 h-14 lg:h-20 w-full justify-between fixed top-0 z-20">
      <div className="relative aspect-square h-full">
        <Image 
          src="/logo.png" 
          alt="ロゴ" 
          fill
          className="h-full"
          />
      </div>
      <ul className="flex space-x-10 items-center text-white font-bold p-5 lg:h-full">
        <li>
          <div className="transition hover:opacity-50 h-full"><a href="#">場所</a></div>
        </li>
        <li>
          <div className="transition hover:opacity-50 h-full"><a href="#">現在の売り上げ</a></div>
        </li>
      </ul>
    </nav>
  );
}
