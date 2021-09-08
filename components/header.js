import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import { Menu } from "react-feather";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-system-light dark:bg-system-dark bg-opacity-90 px-5 py-3 sm:py-5 sticky top-0 z-50 backdrop-filter backdrop-blur-lg">
      <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap items-center justify-between lg:container mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-base md:text-base font-semibold text-system-dark dark:text-system-light text-opacity-90">
              Nick Mayernik
            </a>
          </Link>
        </div>

        <button
          className="flex items-center px-3.5 py-1 font-semibold bg-system-light drop-shadow-2xl	rounded-full bg-opacity-90 text-base text-system-dark text-opacity-80 hover:bg-opacity-80 md:hidden" 
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)} >               
            menu            
            <title>Menu</title>
        </button>

       

        <ul
          className={cn(
            "py-1 md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto backdrop-filter backdrop-blur-lg",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "About", route: "/about" },
            { title: "Projects", route: "/projects" },
            { title: "Writing", route: "/writing" },
            { title: "Contact", route: "/contact" },

            
          ].map(({ route, title }) => (
            <li className="mt-5 md:mt-0 md:ml-12" key={title}>
              <Link href={route}>
                <a className="grid justify-items-center dark:text-system-light hover:text-system-blue font-regular text-base">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </header>
  );
}
