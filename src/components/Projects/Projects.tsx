import { useEffect, useState } from "react";

const Projects = () => {

    const [event, setEvent] = useState<any | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/users/WhoThisPerson/events/public")
            .then((response) => response.json())
            .then((events: any[]) => {
                const latestPush = events.find(
                    (e) => 
                        (e.type === "PushEvent") ||
                        (e.type === "PullRequestEvent" && e.payload?.pull_request?.merged)
                );
                
                if (latestPush) setEvent(latestPush);
            })
            .catch(() => {});
    }, []);

    const latestCommit = event
        ? event.type === "PushEvent" ? {
                type: "commit",
                repo: event.repo.name,
                message: event.payload?.commits?.[0]?.message ?? "No commit message",
                url: `https://github.com/${event.repo.name}`,
                date: new Date(event.created_at).toLocaleDateString(),
            } 
        : {
                type: "pull_request",
                repo: event.repo.name,
                message: `Merged PR: ${event.payload?.pull_request?.title ?? "No PR title"}`,
                url: event.payload?.pull_request?.html_url,
                date: new Date(event.created_at).toLocaleDateString(),
            }
        : null;

    return (
        <div className="max-w-4xl mx-auto px-4 py-5" id="Projects">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            {/* Contribution Graph */}
            <div>
                <img src="https://github-readme-activity-graph.vercel.app/graph?username=WhoThisPerson&theme=github-compact"></img>
            </div>

            {/* Latest Commit Section*/}
            {latestCommit && (
                <div>
                    <h3 className="text-2xl font-semibold mt-8 mb-4">Most Recent Commit:</h3>

                    <p>
                    <span className="font-medium">Repo:</span>{" "}
                    <a
                        href={latestCommit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue hover:underline"
                    >
                        {latestCommit.repo}
                    </a>
                    </p>

                    <p className="mt-1 italic">{latestCommit.message}</p>
                    <p className="italic">{latestCommit.date}</p>
                </div>
            )}


        </div>
    )
}

export default Projects;