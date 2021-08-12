import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="">
      <div className="max-w-xl mx-auto justify-center py-12">
        <section id="details">
          <a href="/projects" className="text-blue-500 hover:underline">← Back to Projects Page</a>
          <h1 className="text-4xl text-trueGray-700 font-semibold pt-3">Data Storytelling</h1>
          <p class="mt-3 text-xl text-trueGray-600 sm:mt-5 m:mx-auto md:mt-5  lg:mx-0">
             COMM-198: Data Storytelling is a course at Lehigh University that blends the hard science of data collection and cleaning with the more human-friendly qualities of storytelling and visualization. 
          </p>
          <p class="mt-3 text-trueGray-600 sm:mt-5 text-xl sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
             This page includes my projects from the class, which included data scraping in R, and visualization in Tableau.
          </p>
        </section>
        <section>
            <h2 className="text-2xl text-trueGray-700 py-12">Details</h2>        
        </section>

        <section>
        </section>
      </div>
    </div>
  );
}
