export default function Hero() {
	return (
		<section className="">
			<div
				id="Hero Card"
				className="grid items-center justify-center grid-cols-1 px-6 py-8 shadow md:px-8 md:grid-cols-12 md:gap-4 bg-system-white dark:bg-opacity-5 backdrop-filter backdrop-filter-blur rounded-2xl">
				<img className="w-20 col-span-2 pb-4 mx-auto rounded-full text-align-center "alt="Nick's Face" src="/memoji.png"/>
				<div className="col-span-10">
				<h1 className="font-semibold text-center md:text-left text-title-mobile sm:text-title-desktop">
					I'm Nick, a full-stack UX Designer.
				</h1>
				<p className="pt-2 text-base leading-snug text-center md:text-left text-opacity-80">
					I work across research, design, and development to create humane products. {""}
					<a href="/about/" class="whitespace-nowrap rounded-lg font-semibold text-base hover:underline text-system-black dark:text-system-white">
						More →
					</a>
				</p>
				</div>
			</div>
		</section>
		
	);
}
