import Image from "next/image";

export default function Projects() {
  return (
    <div className="">
      <div className="max-w-xl mx-auto py-20 px-5">
        <section id="intro">
          <h1 className="lg:text-title-desktop text-title-mobile text-opacity-90 font-serif font-semibold italic pt-3">Projects</h1>
          <p class="py-2 font-mono text-base lg:text-lg text-opacity-80">
            Explore my previous work in design, research, and development — including those for clients, classes, and side projects.
          </p>
          
        </section>
        
        <section className="pt-16" id="selected">
          <h2 className="py-2 font-mono text-base lg:text-lg text-system-dark dark:text-system-light text-opacity-50">
            Selected Projects
          </h2>          <ul className="pt-2">
            <li className="py-2">
              <a href="/projects/datastory">
                <h3 className="text-2xl text-trueGray-700 hover:text-blue-500 pb-1">Data Storytelling Portfolio</h3>
                <p className="text-trueGray-600 text-lg">All the projects I created for a Data Storytelling Course I took at Lehigh in Summer 2021.</p>
              </a>
            </li>
          </ul>
        </section>



      </div>
    </div>
  );
}

