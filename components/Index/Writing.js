

export default function Writing({posts}) {
    return(
        <section className="relative px-6 py-6 shadow break-inside bg-system-white dark:bg-opacity-5 rounded-2xl">
            <div className="inline-flex items-center justify-center">
                <IconContext.Provider value= {{ size: "1.25rem", color: "#9F3636" }}>
                    <IoBookmark/>
                </IconContext.Provider>
                <h1 id="Posts Title" className="pt-1 pb-1 pl-2 text-2xl font-bold align-text-bottom md:text-serif-xl">
                    Recent Posts
                </h1>
            </div>
            
            <ul className="py-3">
                {posts.map((post) => (
                    <article key={post.sys.id} className="my-4 md:my-3">
                        <Post post={post} />
                    </article>
                ))}
            </ul>
            <a href="/about/" class="font-semibold text-base hover:underline dark:text-system-white hover:text-system-blue">
				Follow me on Oku →
			</a>
        </section>
    )
};

