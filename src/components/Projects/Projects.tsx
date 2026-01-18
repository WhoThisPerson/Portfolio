// import { useEffect, useState } from "react";

const Projects = () => {

    // const [push, setPush] = useState<any | null>(null);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/WhoThisPerson/events/public")
    //         .then((response) => response.json())
    //         .then((events: any[]) => {
    //             const latestPush = events.find((e) => e.type === "PushEvent");
    //             if (latestPush) setPush(latestPush);
    //         })
    //         .catch(() => {});
    // }, []);

    // const latestCommit = 
    //     push && push.payload?.commits?.length > 0
    //         ? {
    //                 repo: push.repo.name,
    //                 message: push.payload.commits[0].message,
    //                 url: `https://github.com/${push.repo.name}`,
    //                 date: new Date(push.created_at).toLocaleDateString(),
    //         }
    //     : null;

    return (
        <div className="max-w-4xl mx-auto px-4 py-5" id="Projects">
            <h2 className="text-3xl font-bold mb-8 underline">Projects</h2>
            {/* Contribution Graph */}
            <div>
                <img src="https://github-readme-activity-graph.vercel.app/graph?username=WhoThisPerson&theme=github-compact"></img>
            </div>

            {/* Latest Commit Section*/}
            {/* {latestCommit && (
                <div>
                    <h3 className="text-2xl font-semibold mt-8 mb-4">Latest Commit</h3>
                    <span>Repo:</span>{" "}
                    <a
                        href={latestCommit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue hover:underline"
                    >
                        {latestCommit.repo}
                    </a>

                    <span>{latestCommit.message}</span>{" "}
                    <span className="italic text-sm">({latestCommit.date})</span>

                </div>
            )} */}

        </div>
    )
}

export default Projects;