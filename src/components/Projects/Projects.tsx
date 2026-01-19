import { useEffect, useState } from "react";

const Projects = () => {

    const [event, setEvent] = useState<any | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/users/WhoThisPerson/events/public")
            .then((response) => response.json())
            .then((events: any[]) => {
                const latestPush = events.find(
                    (e) => (e.type === "PushEvent") 
                );
                
                if (latestPush) setEvent(latestPush);
            })
            .catch(() => {});
    }, []);

    const latestCommit = event ? {
            repo: event.repo.name,
            url: `https://github.com/${event.repo.name}`,
            date: new Date(event.created_at).toLocaleDateString(),
            avatar_icon: event.actor.avatar_url,
        } : null;

    return (
        <div className="max-w-10xl mx-auto px-4 py-5 h" id="Projects">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

            {/* Wrapper for the GitHub Stats Section */}
            <div className="flex items-center justify-center">
                {/* Contribution Graph */}
                <div>
                    <img src="https://github-readme-activity-graph.vercel.app/graph?username=WhoThisPerson&theme=github-compact"></img>
                </div>

                <img
                    src={latestCommit ? latestCommit.avatar_icon : ""}
                    alt="Avatar Icon"
                    className="w-16 h-16 rounded-full ml-5"                
                >
                </img>
                {/* Latest Commit Section*/}
                {latestCommit && (
                    <div>
                        <h3 className="text-xl font-semibold ml-5">Most Recent GitHub Commit:</h3>

                        <p>
                        <span className="font-medium ml-5">Repo:</span>{" "}
                        <a
                            href={latestCommit.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue hover:underline"
                        >
                            {latestCommit.repo}
                        </a>
                        </p>

                        <p className="italic ml-5">Made on: {latestCommit.date}</p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Projects;