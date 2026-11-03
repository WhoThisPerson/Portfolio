const Resume = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-14">
            <h2 className="text-3xl font-bold mb-8 text-center">
                Resume
            </h2>

            <iframe
                src="Resume.pdf"
                title="Resume"
                className="w-full aspect-[8.5/11] border rounded"
            />
        </div>
    );
};

export default Resume;