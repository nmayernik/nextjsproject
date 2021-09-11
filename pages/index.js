import Image from "next/image";
import Post from "@components/Index/Post";
import { createClient } from "contentful";
import Hero from "@components/Index/Hero";
import Writing from "@components/Index/Writing";
import Reading from "@components/Index/Reading";
import Currently from "@components/Index/Currently";
import { IconContext } from "react-icons";
import { IoBookmark } from "react-icons/io5";
import { IoLibrary } from "react-icons/io5";
import { CodeSlash } from 'react-ionicons'
import Project from "@components/Index/Project";





export default function IndexPage({ posts, caseStudies }) {
	return (
		<div className="max-w-3xl px-3 py-8 mx-auto md:py-12">
			<Hero />
			<div id="Sections Grid" className="md:masonry before:box-inherit after:box-inherit">
				<Currently />
        {/* Post Section */}
        <section className="relative px-6 py-6 mt-5 shadow break-inside bg-system-white dark:bg-opacity-5 rounded-2xl">
          <div className="inline-flex items-start">
            <div className="self-center -mt-1">
              <IconContext.Provider value= {{ size: "1.25rem", color: "#9F3636" }}>
                <IoBookmark style={{color:"#9F3636"}}/>
              </IconContext.Provider>
            </div>
              <h1 id="Posts Title" className="pb-1 pl-2 text-xl font-bold align-text-bottom">
                  Recent Posts
              </h1>
          </div>

          <ul className="px-2">
              {posts.map((post) => (
                  <article key={post.sys.id} className="my-4 md:my-3">
                      <Post post={post} />
                  </article>
              ))}
          </ul>
          
          <a href="/writing/" class="font-semibold text-base hover:underline darktext-system-white hover:text-system-blue">
				    See all posts →
			    </a>
        </section>

        {/* Projects Section */}
        <section className="relative px-6 py-6 my-5 shadow break-inside bg-system-white dark:bg-opacity-5 rounded-2xl">
          <div className="inline-flex items-start">
            <div className="self-center -mt-1">
            <CodeSlash color={'#94e3fe'} title={"Case Study Icon"}/>
            </div>
              <h1 id="Posts Title" className="pb-1 pl-2 text-xl font-bold align-text-bottom">
                  Recent Case Studies
              </h1>
          </div>

          <ul className="px-2">
              {caseStudies.map((caseStudy) => (
                  <article key={caseStudy.sys.id} className="my-4 md:my-3">
                      <Post post={caseStudy} />
                  </article>
              ))}
          </ul>
          
          <a href="/writing/" class="font-semibold text-base hover:underline darktext-system-white hover:text-system-blue">
				    See all projects →
			    </a>
        </section>
			<Reading/>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({
		content_type: "blogPost",
		limit: 3,
	});

  const res2 = await client.getEntries({
    content_type: "caseStudy",
    limit: 3,
  });

	return {
		props: {
			posts: res.items,
      caseStudies: res2.items,
		},
	};
}
