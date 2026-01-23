import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {

    const experienceInfo = [
        {
            company: "Handshake",
            location: "Remote",
            position: "AI Fellow",
            role_type: "Part-Time",
            start: "December 2025",
            end: "Present",
            details: []
        },
        {
            company: "LadySurvivor & Family Benches",
            location: "New York, NY",
            position: "Project Management Intern",
            role_type: "Internship",
            start: "July 2025",
            end: "August 2025",
            details: [
                "Supported the planning and execution of community projects for the non-profit organization",
                "Coordinated with fellow interns to ensure quality completion of tasks within deadlines"
            ]
        },
        {
            company: "SBU",
            location: "Stony Brook, NY",
            position: "Undergraduate Teaching Assistant",
            role_type: "Part-Time",
            start: "August 2023",
            end: "May 2024",
            details: [
                "Selected as a teaching assistant for the Introduction to Object-Oriented Programming course (CSE 114)",
                "Served as a two-time TA during Fall 2023 and Spring 2024 semesters",
                "Conducted and graded bi-weekly lab sessions consisting of 30 students",
                "Held weekly office hours to address student questions/concerns, assist in HW assignments, and clarify course material",
            ]
        }
    ]

    return (
        <div className="max-w-4xl mx-auto px-4 py-5 border" id="Experience">
            
            {experienceInfo.map((exp, index) => (
                <div key={index} className="mb-10">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-xl">{exp.position} @ {exp.company}</h3>
                        <p className="font-bold text-xl">{exp.role_type}</p>

                    </div>

                    <div className="flex justify-between items-center">
                        <p className="italic"><FaMapMarkerAlt className="inline mr-2 text-red-500" />{exp.location}</p>
                        <p className="italic"><FaCalendarAlt className="inline mr-2 text-red-500" />{exp.start} - {exp.end}</p>
                    </div>
                    
                    {exp.details.length > 0 && (
                        <ul className="list-disc list-inside mt-2">
                            {exp.details.map((detail, detailIndex) => (
                                <li key={detailIndex}>{detail}</li>
                            ))}
                        </ul>
                    )}

                </div>
            ))}
        </div>
    )
}


export default Experience;