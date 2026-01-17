import { FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {

    const educationInfo = [
        {
            school: "SUNY - Stony Brook University",
            location: "Stony Brook, NY",
            degree: "Bachelor of Science in Computer Science",
            start: "August 2021",
            end: "May 2025"
        },
        {
            school: "Manhattan Center for Science and Mathematics",
            location: "New York, NY",
            degree: "High School Diploma",
            start: "September 2017",
            end: "June 2021"
        },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-20" id="Education">
            <h2 className="text-3xl font-bold mb-8 underline">Education</h2>

            {educationInfo.map((edu, index) => (
                <div key={index} className="mb-6">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold">{edu.school}</h3>
                        <p className="font-bold">{edu.start} - {edu.end}</p>
                    </div>
                    
                    <p className="italic"><FaMapMarkerAlt className="inline mr-2 text-red-500" />{edu.location}</p>
                    <p className="font-bold mt-2">{edu.degree}</p>
                </div>
            ))}

        </div>
    )
}

export default Education;