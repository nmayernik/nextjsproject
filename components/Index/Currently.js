import { Ellipse } from 'react-ionicons'

export default function Currently() {
	return (
		<section id="Currently Grid Container"
			className="relative px-6 py-6 mt-5 shadow break-inside sm:mx-0 bg-system-white dark:bg-opacity-5 rounded-2xl">
			<div className="inline-flex items-center justify-center">
            <Ellipse color={'#17b232'} title={"Currently Icon"} />
             
              <h1 id="Posts Title" className="pl-2 text-xl font-bold">
                  Currently
              </h1>
          </div>


            <ul className="py-2">
                <li className="inline-flex items-center justify-center my-2">
                    <img src="/CurrentlyIcons/WorkIcon.svg" alt="Work Icon"/>
                    <p className="pl-4 text-base leading-snug text-system-dark dark:text-system-light dark:text-opacity-90">
                        Leading Design & UX at{" "}
                        <a href="http://www.pyramid.fitness" className="font-semibold dark:text-system-white hover:text-system-blue">
                            PYRAMID
                        </a>
                    </p>
                </li>
                <li className="inline-flex items-center justify-center my-2">
                        <img src="/CurrentlyIcons/SchoolIcon.svg" alt="Education Icon"/>
                        <p className="pl-4 text-base leading-snug text-system-dark dark:text-system-light dark:text-opacity-90">
                            Celebrating graduating from{" "}
                            <a className="font-semibold dark:text-system-white hover:text-system-blue">
                                Lafayette College
                            </a>
                        </p>
                </li>
                <li className="inline-flex items-center justify-center my-2">
                        <img src="/CurrentlyIcons/SoccerIcon.svg" alt="Recreation Icon"/>
                        <p className="pl-4 text-base leading-snug text-system-dark dark:text-system-light dark:text-opacity-90">
                            Watching every{" "}
                            <a className="font-semibold dark:text-system-white hover:text-system-blue">
                                Tottenham Hotspur
                            </a>{" "}
                            match
                        </p>
                </li>
            </ul>

			<a href="/about/" class="font-semibold text-base hover:underline darktext-system-white hover:text-system-blue">
				My Changelog →
			</a>
		</section>
	);
}
