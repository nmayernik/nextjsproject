import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="py-14 lg:py-20 px-4">
          <h1 className="lg:text-title-desktop text-title-mobile text-opacity-90 font-serif font-semibold italic pt-3">I'm <span className="text-system-green">Nick</span>, a full-stack UX Designer.</h1>
          <p class="py-2 font-mono text-base lg:text-lg text-opacity-70">
            I work across research, design and development to help products connect with people.
          </p>

         <div className="mt-6 grid justify-items-center">
              <a href="http://changelog.nickmayernik.com" class="w-full text-center px-16 py-4 sm:py-3 border border-system-dark dark:border-system-light border-opacity-10 text-system-dark dark:text-system-light font-semibold text-base rounded-full bg-system-dark dark:bg-system-light bg-opacity-5 hover:bg-opacity-10">
                View my changelog
              </a>
          </div>  
       </div>

       <div className="py-6 lg:py-20 px-4">
          <h2 className="py-2 font-mono text-base lg:text-lg text-system-dark dark:text-system-light text-opacity-50">
            Recent Posts
          </h2>
          <a>             
            <div className="pt-4">              
              <div className="px-6 py-6 bg-system-dark bg-opacity-5 border border-system-dark border-opacity-10 rounded-2xl">
                <h3 className="font-serif font-semibold text-lg text-system-dark dark:text-system-light">
                  Focus Modes on iOS 15
                </h3>
                <p className="pt-1 font-serif text-base text-system-dark dark:text-system-light">Caption <br />caption line two</p>
                <p className="pt-2 font-mono text-base text-system-dark dark:text-system-light">Date</p>
              </div>             
            </div>
           </a>

          
       </div>
    </div>
  );
}
