
const Skills = () => {

    const programmingLanguages = [
        "Python",
        "Java",
        "C",
        "JavaScript",
        "TypeScript",
        "Ruby",
        "Bash",
    ];

    const frameworks = [
        "React",
        "Node.js",
        "Express",
    ];

    const databases = [
        "MySQL",
        "MongoDB",
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-5 border mt-10">

            <h3 className="text-2xl font-semibold mb-3">Programming Languages:</h3>
            {programmingLanguages.map((language, index) => (
                <span
                    key={index}
                    className="inline-block border bg-gray-700 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 transition hover:bg-white hover:text-gray-dark hover:-translate-y-1"
                >
                    {language}
                </span>
            ))}

            <h3 className="text-2xl font-semibold mb-3">Frameworks:</h3>
            {frameworks.map((framework, index) => (
                <span
                    key={index}
                    className="inline-block border bg-gray-700 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 transition hover:bg-white hover:text-gray-dark hover:-translate-y-1"
                >
                    {framework}
                </span>
            ))}

            <h3 className="text-2xl font-semibold mb-3">Databases:</h3>
            {databases.map((database, index) => (
                <span
                    key={index}
                    className="inline-block border bg-gray-700 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 transition hover:bg-white hover:text-gray-dark hover:-translate-y-1"
                >
                    {database}
                </span>
            ))}

        </div>
    )
}

export default Skills;