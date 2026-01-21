import { FaMapMarkerAlt, FaUser, FaCircle } from 'react-icons/fa';

const About = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-20" id="About">
            {/*Wrapper for Left and Right sides*/}
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6">
                {/* Left Side Wrapper - Photo*/}
                <div className="bg-gray-700 flex flex-col">
                    {/* Placeholder for Photo */}
                    <FaUser 
                        className="text-gray-light text-9xl mt-5 mx-auto"
                    />

                    {/* Available for work indicator */}
                    <div className="flex items-center gap-2 text-sm mt-2">
                        <FaCircle className="text-green w-5 h-5 mt-5" />
                        <span className="text-lg mt-5">Available for Work</span>
                    </div>
                </div>

                {/* Right Side Wrapper- Details */}
                <div>
                    <div className="text-bold text-xl mb-4 flex items-center space-x-2">
                        Hi. My name is Qirong ("Chee-Wrong"). Friends and family call me Jason.
                    </div>
                    <div className="text-bold text-lg mb-4 flex items-center space-x-2">
                        Software Developer based in{" "}
                        <FaMapMarkerAlt className="inline mb-1 text-red-500 ml-1" /> 
                        New York.
                    </div>

                    <div className="mt-4">
                        Currently seeking opportunities in full-time software development roles.
                        In the mean time, I am working on personal projects to improve my skills
                        or working/volunteering on the side.
                    </div>

                    <p className="mt-4">
                        Feel free to peruse at your interest. Check out my resume and other socials in 
                        the header for my contact info.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;