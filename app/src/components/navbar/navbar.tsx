import LeafIcon from "../../assets/images/leaf.svg?react";

function Navbar() {
  return (
    <div className="bg-special h-14 w-full shadow-md shadow-red-200">
      <ul className="flex space-x-4 items-center h-full px-4 text-lg font-medium mx-4">
        <li className="flex justify-start">
          <a href="#">
            <h1 className="flex items-center text-4xl color-special font-bold ml-1 geist-mono">
              <span className="color-special-green">/</span>
              euKauatf
              <span className="ml-2">
                <LeafIcon className="w-8 h-8 fill-[#4F772D]" />
              </span>
            </h1>
          </a>
        </li>
        <li className="ml-auto">
          <a href="/" className="text-white hover:text-gray-300">
            Profissional
          </a>
        </li>
        <li className="ml-4">
          <a href="/pessoal" className="text-white hover:text-gray-300">
            Pessoal
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
