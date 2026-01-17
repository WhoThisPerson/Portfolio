import { FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20" id="About">
            {/*Wrapper for Left and Right sides*/}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Left Side Wrapper - Photo*/}
                <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
                    {/* Placeholder for Photo */}
                    <FaUser className="text-gray-400 w-24 h-24" />
                </div>

                {/* Right Side Wrapper- Details */}
                <div>
                    <div className="text-bold text-xl mb-4 flex items-center space-x-2">
                        Hi. My name is Qirong ("Chee-Wrong"). Friends and family call me  Jason.
                    </div>
                    <div className="text-bold text-lg mb-4 flex items-center space-x-2">
                        I am a software developer based in
                        {" "}
                        <FaMapMarkerAlt className="inline mb-1 text-red-500 ml-1" /> 
                        New York.
                    </div>

                    <div className="mt-4">
                        Current seeking opportunities in full-time software development roles.
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