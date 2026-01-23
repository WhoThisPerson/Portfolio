import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {

    const educationInfo = [
        {
            school: "SUNY - Stony Brook University",
            location: "Stony Brook, NY",
            degree: "B.Sc in Computer Science",
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
        <div className="max-w-4xl mx-auto px-4 py-5 border" id="Education">
            {educationInfo.map((edu, index) => (
                <div key={index} className="mb-6">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-xl">{edu.school}</h3>
                        <p className="font-bold text-xl">{edu.degree}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="italic"><FaMapMarkerAlt className="inline mr-2 text-red-500" />{edu.location}</p>
                        <p className="italic"><FaCalendarAlt className="inline mr-2 text-red-500" />{edu.start} - {edu.end}</p>
                    </div>
        
                </div>
            ))}

        </div>
    )
}

export default Education;