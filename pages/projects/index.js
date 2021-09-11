import Image from "next/image";
import { createClient } from "contentful";
import ProjectCard from "@components/ProjectCard";



export default function Projects({caseStudies}) {
  return (
    <div className="">
      <div className="max-w-3xl px-3 py-12 mx-auto">
        <section id="intro">
          <h1 className="pt-3 font-serif italic font-semibold lg:text-title-desktop text-title-mobile text-opacity-90">Projects</h1>
          <p class="py-2 text-base lg:text-lg text-opacity-80">
            Explore my previous work in design, research, and development — including those for clients, classes, and side projects.
          </p>
          
        </section>
        
        <section className="pt-16" id="selected">
          <h1 className="py-2 font-mono text-base text-opacity-50 lg:text-lg text-system-dark dark:text-system-light">
            Selected Projects
          </h1>          <ul className="pt-2">
            <li className="py-2">
              <a href="/projects/datastory">
                <h2 className="pb-1 text-2xl text-trueGray-700 hover:text-blue-500">Data Storytelling Portfolio</h2>
                <p className="text-lg text-trueGray-600">All the projects I created for a Data Storytelling Course I took at Lehigh in Summer 2021.</p>
              </a>
            </li>
          </ul>
        </section>

        <section className="pt-16">
          <h1>
              Case Studies
          </h1>

          <div className="pt-8">
				<ul classname="">
					{caseStudies.map((caseStudy) => (
						<li key={caseStudy.sys.id} className="">
							<ProjectCard post={caseStudy} />
						</li>
					))}
				</ul>
			</div>

          
        </section>


      </div>
    </div>
  );
}

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: "caseStudy" });

	return {
		props: {
			caseStudies: res.items,
		},
	};
}