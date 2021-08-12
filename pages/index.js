import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="">
      <div className="max-w-xl mx-auto justify-center py-12">
        <div id="text">
          <h1 className="text-4xl text-trueGray-700 font-semibold pb-1">Hello, I'm Nick Mayernik.</h1>
          <p class="mt-3 text-base text-trueGray-600 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
             I'm a full-stack UX Professional, working in research, design, and development to create humane products. I'm currently leading Design & Development for PYRAMID.
          </p>
        </div>
        <div id="buttons">
          <div class="mt-3 sm:mt-8 sm:flex lg:justify-start">
            <div class="">
              <a href="#" class="w-full flex items-center justify-center px-8 py-2 sm:py-3 border border-transparent font-medium rounded-xl text-trueGray-700 bg-gray-200 hover:cursor-pointer hover:bg-trueGray-300 md:py-4 md:text-lg md:px-10">
                More About Me
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="http://changelog.nickmayernik.com" class="w-full flex items-center justify-center px-8 py-2 sm:py-3 border border-transparent text-base font-medium rounded-xl text-blue-500 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                My Changelog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
