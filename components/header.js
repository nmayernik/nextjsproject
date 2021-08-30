import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import { Menu } from "react-feather";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-system-light dark:bg-system-dark px-5 py-5">
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
          className="flex items-center block px-3.5 py-0.5 font-semibold text-base text-system-light dark:text-system-light bg-system-dark dark:bg-system light bg-opacity-5 rounded-lg border border-system-dark dark:border-system-light border-opacity-10 md:hidden" 
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)} >               
            <p>MENU</p>            
            <title>Menu</title>
        </button>

       

        <ul
          className={cn(
            "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "About", route: "/about" },
            { title: "Projects", route: "/projects" },
            { title: "Writing", route: "/writing" },
            { title: "Contact", route: "/contact" },

            
          ].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:ml-12" key={title}>
              <Link href={route}>
                <a className="grid justify-items-center dark:text-system-light hover:text-blue-500 font-medium text-base">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </header>
  );
}
