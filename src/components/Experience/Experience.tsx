import { FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {

    const experienceInfo = [
        {
            company: "Handshake",
            location: "Remote",
            position: "AI Fellow",
            start: "December 2025",
            end: "Present",
        },
        {
            company: "LadySurvivor & Family Benches",
            location: "New York, NY",
            position: "Project Management Intern",
            start: "July 2025",
            end: "August 2025",
        },
        {
            company: "SUNY - Stony Brook University",
            location: "Stony Brook, NY",
            position: "Undergraduate Teaching Assistant",
            start: "August 2023",
            end: "May 2024",
        }
    ]

    return (
        <div className="max-w-4xl mx-auto px-4 py-20" id="Experience">
            <h2 className="text-3xl font-bold mb-8 underline">Experience</h2>
        </div>
    )
}


export default Experience;