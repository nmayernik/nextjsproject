import { IoEllipse } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Book } from 'react-ionicons'



export default function Reading(params) {
    return (<section id="Currently Grid Container"
			className="relative px-6 py-6 mt-5 shadow break-inside sm:mx-0 bg-system-white bg-opacity-5 rounded-2xl">
			<div className="inline-flex items-center justify-center">
            <Book
                color={'#ff9300'} 
                title={"Book"}
                />
              <h1 id="Posts Title" className="pl-2 text-xl font-bold">
                  Books in Rotation
              </h1>
          </div>

            <p className="px-1 py-3 text-base">
                For leisure, I'm reading <a href="https://oku.club/book/the-premonition-by-michael-lewis-4lXyy?notice=oku" className="font-bold text-system-white">The Premonition by Michael Lewis</a>. For work, I'm reading Atomic Design.
            </p>

			<a href="/about/" class=" text-center font-semibold text-base hover:underline darktext-system-white hover:text-system-blue">
				Follow me on Oku ↗
			</a>
		</section>)
};
