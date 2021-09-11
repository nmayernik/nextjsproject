export default function Contact() {

    return(
        <div className="max-w-3xl px-3 py-12 mx-auto">
            <div id="title">
                <h1 className="py-6 font-bold text-title-desktop">
                    Contact
                </h1>

                <p className="text-base max-w-prose text-system-white text-opacity-70">
                    For ease of scheduling, I've implemented asynchronous tools that minimize the amount of digital 
                    back-and-forth communication.
                </p>
            </div>

            <div id="body" className="my-8">
                <div id="Office Hours">
                    <h2 className= "py-3 text-xl font-semibold">
                        Schedule an Office Hours Meeting
                    </h2>
                    
                    <p className="text-opacity-50 text-system-white">
                        //Calendso goes here
                    </p>
                </div>
            </div>
        </div>
    )
    
};
