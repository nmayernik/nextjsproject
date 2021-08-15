import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import { Menu } from "react-feather";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="max-w-2xl mx-auto">
      <div className="flex flex-wrap items-center justify-between lg:container p-3 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-xl md:text-2xl sm:text-2xl font-medium text-trueGray-700">
              Nick Mayernik
            </a>
          </Link>
        </div>

        <button
          className="flex items-center block px-3 py-2 text-gray-700 md:hidden" 
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)} >               
            <Menu />            
            <title>Menu</title>
        </button>

       

        <ul
          className={cn(
            "md:flex flex-col text-xl md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "About", route: "/about" },
            { title: "Projects", route: "/projects" },
            
          ].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={title}>
              <Link href={route}>
                <a className="grid justify-items-center text-trueGray-600 hover:text-blue-500 sm:text-lg">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </header>
  );
}
