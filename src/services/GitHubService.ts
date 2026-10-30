import { Octokit } from "octokit";

export const octokit = new Octokit({
    auth: process.env.TOKEN
});

const OWNER = "WhoThisPerson";

/**
 * Defines the information needed for GitHub retrieval
 */
export interface ProjectDetails {
    repoName: string,
    description: string | null,
    repoUrl: string,
    primaryLanguage: string | null,
    lastUpdated: string | null,
}

/**
 * @returns GitHub repository details
 */
export async function getProjectDetails(): Promise<ProjectDetails[]> {

    try {
        const response = await octokit.rest.repos.listForUser({
            username: OWNER,
            sort: "pushed",
            direction: "desc",
            per_page: 5,
        });

        return response.data.map((repo) => ({
            repoName: repo.name,
            description: repo.description,
            repoUrl: repo.html_url,
            primaryLanguage: repo.language ?? null,
            lastUpdated: repo.pushed_at ?? null,
        }));

    } catch (error) {
        throw new Error("Failed to fetch repository data");
    }
}
