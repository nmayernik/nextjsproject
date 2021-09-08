export default function Contact() {

    return(
        <div className="max-w-3xl mx-auto my-12">
            <div id="title">
                <h1 className="text-title-desktop font-bold py-6">
                    Contact
                </h1>

                <p className="text-base max-w-prose text-system-white text-opacity-70">
                    For ease of scheduling, I've implemented asynchronous tools that minimize the amount of digital 
                    back-and-forth communication.
                </p>
            </div>

            <div id="body" className="my-8">
                <div id="Office Hours">
                    <h2 className= "text-xl font-semibold py-3">
                        Schedule an Office Hours Meeting
                    </h2>
                    
                    <p className="text-system-white text-opacity-50">
                        //Calendso goes here
                    </p>
                </div>
            </div>
        </div>
    )
    
};
