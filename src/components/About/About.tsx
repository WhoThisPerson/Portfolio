import { FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20" id="About">
            <div className="text-bold text-lg mb-4 flex items-center space-x-2">
                Hi. My name is Qirong ("Chee-Rong"). Friends and familiy call me Jason.
            </div>
            <div className="text-bold text-lg mb-4 flex items-center space-x-2">
                I am a software developer based in
                {" "}
                <FaMapMarkerAlt className="inline mb-1 text-red-500 ml-1" /> 
                New York.
            </div>

            Currently seeking job opportunities in software development. 
            In the mean time, I am working on personal projects to improve my skills
            or working/volunteering on the side.

            For contact, check out my Resume and other profiles in the Header above.
        </div>
    )
}

export default About;