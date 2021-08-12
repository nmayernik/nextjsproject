import Image from "next/image";

export default function Projects() {
  return (
    <div className="">
      <div className="max-w-xl mx-auto justify-center py-12">
        <section id="intro">
          <h1 className="text-4xl text-trueGray-700 font-semibold pb-1">Projects</h1>
          <p class="mt-3 text-base text-trueGray-600 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
             Home of my previous work, including case studies from clients, side projects and coursework.
          </p>
        </section>
        
        <section className="pt-16" id="selected">
          <h2 className="text-2xl text-trueGray-400">Select Projects</h2>
          <ul className="pt-2">
            <li className="py-2">
              <a href="/projects/datastorytelling">
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

