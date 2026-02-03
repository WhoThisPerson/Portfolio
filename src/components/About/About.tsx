import { FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
    return (
        <div className="max-w-5xl mx-auto py-20" id="About">
            {/*Wrapper for Left and Right sides*/}
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6">
                {/* Left Side Wrapper - Photo*/}
                <div className="flex flex-col">
                    {/* Profile Picture Location */}
                    <img
                        src="profile-picture.webp"
                        alt="Profile Picture"
                        className="w-48 h-48 rounded-full mx-auto object-cover"
                    ></img>

                    <div className="text-center mt-4">
                        <FaMapMarkerAlt className="inline mb-1 text-red-500" />
                        {" "} New York, USA
                    </div>

                </div>

                {/* Right Side Wrapper- Details */}
                <div>
                    <div className="text-bold text-xl mb-4 flex items-center space-x-2">
                        Hi. My name is Qirong ("Chee-Wrong"). Friends and family call me Jason.
                    </div>
                    <div className="text-bold text-lg mb-4 flex items-center space-x-2">
                        Software Developer with experience in full-stack development, DevOps, and
                        AI.
                    </div>

                    <div className="mt-4">
                        In my free time, I am usually working on personal projects to improve my skills or
                        working/volunteering on the side.
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