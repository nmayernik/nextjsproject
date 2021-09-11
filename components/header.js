import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { IconContext } from "react-icons";


export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-5 py-1 bg-system-light dark:bg-system-dark bg-opacity-90 sm:py-5 backdrop-filter backdrop-blur-lg">
      <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap items-center justify-between mx-auto lg:container md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-base font-semibold md:text-base text-system-dark dark:text-system-light text-opacity-90">
              Nick Mayernik
            </a>
          </Link>
        </div>

        <button
          className="flex items-center p-1 text-base font-semibold border rounded-full bg-system-blue bg-opacity-10 border-system-blue drop-shadow-2xl text-system-blue hover:bg-opacity-80 md:hidden" 
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)} >               
            <IconContext.Provider value={{ size: "1em", color: "#228DEF" }}>
              <div>
              <IoEllipsisHorizontal style={{color: "#228DEF"}} />
              </div>
            </IconContext.Provider>            
            <title>Menu</title>
        </button>

       

        <nav
          className={cn(
            "list-none py-1 md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto backdrop-filter backdrop-blur-lg",
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
                <a className="grid text-base justify-items-center dark:text-system-light hover:text-system-blue font-regular">{title}</a>
              </Link>
            </li>
          ))}
        </nav>
      </div>
      </div>
    </header>
  );
}
