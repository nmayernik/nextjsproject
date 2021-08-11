import Image from "next/image";

export default function IndexPage() {
  return (
    <div>
      <div className="max-w-xl mx-auto justify-center py-12">
        <div id="text">
          <h1 className="text-4xl font-bold pb-1">Hello, I'm Nick Mayernik.</h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
             I'm a full-stack UX Professional, blending research, design, and development. I'm currently leading Design & Development for PYRAMID.
          </p>
        </div>
        <div id="buttons">
          <div class="mt-3 sm:mt-8 sm:flex  lg:justify-start">
            <div class="rounded-md shadow">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                More About Me
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="http://changelog.nickmayernik.com" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                My Changelog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
