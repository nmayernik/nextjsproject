import Image from "next/image";
import Script from 'next/script'

export default function DataStorytelling() {
  return (
    <div className="">
      <div className="max-w-xl mx-auto justify-center py-12">
        <section id="details">
          <a href="/projects" className="text-blue-500 hover:underline">← Back to Projects Page</a>
          <h1 className="text-4xl text-trueGray-700 font-semibold pt-3">Data Storytelling</h1>
          <p class="mt-3 text-xl text-trueGray-600">
             COMM-198: Data Storytelling is a course at Lehigh University that blends the hard science of data collection and cleaning with the more human-friendly qualities of storytelling and visualization. 
          </p>
          <p class="mt-3 text-trueGray-600 sm:mt-5 text-xl sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
             This page includes my projects from the class, which included data scraping in R, and visualization in Tableau.
          </p>
          <hr className="mt-12 border-trueGray-300" />
        </section>
        <section>
          <h2 className="text-2xl text-trueGray-500 pt-12 pb-2">Projects</h2>        
           
          <div className="py-6">
            <h2 className="text-2xl text-trueGray-700 pb-2">VR Visualization in Thinglink</h2>
            <p class="mt-1 text-trueGray-600 text-xl pb-6">
             Immersive storytelling has the capability of making us feel things that are more easily ignored in text. This is a virtual tour of two rooms at PYRAMID: Our Sports Turf & Our Multipurpose Fitness Studio.
            </p>     
            <iframe width="640" height="320" data-original-width="640" data-original-height="320" src="https://www.thinglink.com/mediacard/1475221191688978435" type="text/html" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen scrolling="no"></iframe><script async src="//cdn.thinglink.me/jse/responsive.js"></script>
          </div>

          <div className="py-8">
            <h3 class="mt-1 text-2xl text-trueGray-700 pb-2">Data Visualization in Tableau</h3>
            <p class="text-xl text-trueGray-600 pb-3">Tableau dashboards and maps are powerful tools for putting data in context. They've been used for <a href="https://public.tableau.com/en-us/gallery/?tab=viz-of-the-day&type=viz-of-the-day" class="text-blue-500 underline">incredible visualizations</a>.</p>
            <p class="text-xl text-trueGray-600 pb-6">This map shows the breakdown between corporate and licensed Starbucks locations in the US in 2017.</p>

            <div className='tableauPlaceholder' id='viz1628270795991' styles='position: relative'><noscript><a href='#'><img alt='Every Starbucks US Location in 2017 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;St&#47;StarbucksBreakdown&#47;StarbucksBreakdowns&#47;1_rss.png' styles='border: none' /></a></noscript><object class='tableauViz'  styles='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='StarbucksBreakdown&#47;StarbucksBreakdowns' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;St&#47;StarbucksBreakdown&#47;StarbucksBreakdowns&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>                

            <Script type='text/javascript'> 
              var divElement = document.getElementById('viz1628270795991'); 
              var vizElement = divElement.getElementsByTagName('object')[0]; 
              vizElement.style.width='550px';vizElement.style.height='1000px';  
              var scriptElement = document.createElement('script'); 
              scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; 
              vizElement.parentNode.insertBefore(scriptElement, vizElement); 
            </Script>

            <p class="pt-8 text-xl text-trueGray-600 mb-3">This dashboard juxtaposes home and away goals scored in the 2018-2019 Premier League season.</p>

            <div class="pb-12">
                <div class='tableauPlaceholder' id='viz1628199096237' styles='position: relative'><noscript><a href='#'><img alt='2018-2019 Premier League Goal Breakdown ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;EP&#47;EPLHomeAwayGoals&#47;BreakdownDashboard&#47;1_rss.png' styles='border: none' /></a></noscript><object class='tableauViz'  styles='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='EPLHomeAwayGoals&#47;BreakdownDashboard' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;EP&#47;EPLHomeAwayGoals&#47;BreakdownDashboard&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>                

                <Script type='text/javascript'> 
                    var divElement = document.getElementById('viz1628199096237'); 
                    var vizElement = divElement.getElementsByTagName('object')[0]; 
                    vizElement.style.width='550px';vizElement.style.height='1000px'; 
                    var scriptElement = document.createElement('script'); 
                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; 
                    vizElement.parentNode.insertBefore(scriptElement, vizElement); 
                </Script>
            </div>
          </div>

        </section>

        <section class="py-8" id="ArcGIS and R">
            <h3 class="text-2xl text-truegray-700 pb-3">Scraping Twitter Data with R & Visualing in ArcGIS</h3>
            <p class="text-xl text-truegray-600 mb-3">Twitter data can be useful in understanding opinions of pockets of Internet users. It's important to remember, however, that Twitter is not a perfectly representative sample of the US population (something I've had to remind myself).</p>
            <p class="text-xl text-truegray-600 mb-3">In this project, I used <a href="https://www.earthdatascience.org/courses/earth-analytics/get-data-using-apis/map-tweet-locations-over-time-r/" class="text-blue-500 underline">R to scrape tweets</a> containing the hashtag "#iOS15." From there, I used ArcGIS to map each tweet's location. Tap the red buttons on the map for more details.</p>

            <div class="pb-12">

            </div>
        </section>

        
      </div>
    </div>
  );
}
