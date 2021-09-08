import Image from "next/image";
import PostTeaser from "@components/Index/PostTeaser";
import { IoChevronForward } from  "react-icons/io5";
import { createClient } from "contentful";



export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'blogPost', limit: 3 })

  return {
    props: {
      posts: res.items
    }
  }

}

export default function IndexPage({posts}) {
  return (
    <div className="max-w-4xl mx-auto">
    
      <div id="Hero Grid Wrapper" className="mt-4 sm:mt-16 mb-4 mx-3 sm:mx-6 flex flex-wrap">
          <div id="Hero Card" className="w-full overflow-hidden py-8 bg-system-white border border-system-black border-opacity-20 dark:border-system-light dark:border-opacity-10 bg-opacity-90 dark:bg-opacity-5 rounded-2xl inline-grid sm:grid-cols-8 grid-cols-none justify-items-center">
            <div className="col-start-1 sm:col-end-3 col-end-6 text-center self-center">
              <div className="">
                <img className="sm:w-28 sm:h-28 w-24 h-24" alt="Nick's Face" src="/memoji.png"/>
              </div>
            </div>

            <div className="col-span-5 self-center px-3">
                <h1 className="sm:text-title-desktop text-title-mobile font-semibold sm:text-left text-center pt-3">
                  I'm Nick, a full-stack UX Designer.
                </h1>
                <div>
                <div className="col-span-5 mt-6 lg:mt-8 text-center text-system-blue sm:text-left">
                  <a href="/about/" class="bg-system-blue py-2 px-4 rounded-full font-medium text-base text-system-white">
                    More about me
                  </a>
                </div>  
                </div>
            </div>
          </div>
      </div>

      <div id="Cards Grid Wrapper" className="my-4 flex flex-wrap overflow-hidden mx-3">
          <div id="Currently Grid Container" className="relative flex w-full overflow-hidden md:w-1/2 my-2 lg:w-1/2 xl:w-1/2">
            <div id="Currently BG" className="mx-3 flex-1 py-6 px-6 dark:bg-system-white bg-opacity-5 border border-system-black border-opacity-20 dark:border-system-light dark:border-opacity-10 rounded-2xl">
                  <div id="Currently Content">
                      <div id="title">
                        <h2 className="font-semibold text-xl pb-1">Currently</h2>
                      </div>
                      <div id="currently items" className="pb-8">
                
                        <div className="my-5 grid grid-cols-8">
                          <div id="work icon" className="col-span-1">
                            <img src="/CurrentlyIcons/WorkIcon.svg" alt="Work Icon" className=""></img>
                          </div>
                          <div id="work text" className="col-span-7">
                            <p className="px-2 text-base leading-snug text-system-dark dark:text-system-light dark:text-opacity-90">
                              Leading Design & UX at <a href="http://www.pyramid.fitness" className="font-semibold text-system-white hover:text-system-blue">PYRAMID</a>
                            </p>
                          </div>
                          </div>
                          <div className="my-5 grid grid-cols-8">
                          <div id="school icon" className="col-span-1">
                            <img src="/CurrentlyIcons/SchoolIcon.svg" alt="Education Icon" className=""></img>
                          </div>
                          <div id="school text" className="col-span-7">
                            <p className="px-2 text-base leading-snug text-system-dark dark:text-system-light dark:text-opacity-90">
                              Celebrating graduating from <a className="font-semibold text-system-white hover:text-system-blue">Lafayette College</a>
                            </p>
                          </div>
                          </div>
                          <div className="my-5 grid grid-cols-8">
                          <div id="recreation icon" className="col-span-1">
                          <img src="/CurrentlyIcons/SoccerIcon.svg" alt="Recreation Icon" className=""></img>
                          </div>
                          <div id="recreation text" className="col-span-7">
                            <p className="px-2 text-base leading-widest text-system-dark dark:text-system-light dark:text-opacity-90">
                              Watching every <a className="font-semibold text-system-white hover:text-system-blue">Tottenham Hotspur</a> match
                            </p>
                          </div>
                          </div>
                        </div>
                        
                      <a href="http://changelog.nickmayernik.com" class="absolute bottom-5 font-medium text-xl text-system-blue hover:underline">
                            My Changelog
                          </a>
                    
                  </div>
              </div>
          </div>
          
          <div id="Posts Grid Container" className="relative flex w-full overflow-hidden lg:px-3 md:w-1/2 my-4 md:my-2 lg:w-1/2 xl:w-1/2">
          <div id="Posts BG" className="flex-col flex-1 py-6 px-6 dark:bg-system-white bg-opacity-5 border border-system-black border-opacity-20 dark:border-system-light dark:border-opacity-10 rounded-2xl">
            <div id="Post Content" className="mx-3">
            <h2 id="Posts Title" className="text-xl font-bold font-serif">Recent Posts</h2>
    
             <div className="pb-10">
                <ul classname="mt-5">
                  {posts.map(post => (

                    <li key={post.sys.id} className="my-1">
                      <PostTeaser post={post}/>
                    </li>
                ))}
                </ul>
            </div>
            <a href="writing" class="mt-5 absolute bottom-5 bg-system-light py-1.5 px-4 rounded-full bg-opacity-80 font-medium text-base text-system-dark text-opacity-80 hover:bg-opacity-80">
                See all posts
            </a>
          </div>
          </div>
          </div>
      </div>       
    </div>
  );
}
