import { Octokit } from "octokit";

export const octokit = new Octokit({
    // auth: process.env.TOKEN
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
 * Defines the information needed to display most recent commit
 */
export interface LatestPushEvent {
    repoName: string,
    repoUrl: string,
    avatarUrl: string,
    createdAt: string,
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
            per_page: 3,
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

/**
 * @returns details on most recent commit
 */
export async function getLatestPushEvent(): Promise<LatestPushEvent | null> {
    try {
        const response = await octokit.rest.activity.listPublicEventsForUser({
            username: OWNER,
            per_page: 100,
        });

        const latestPush = response.data.find(
            (event) => event.type === "PushEvent"
        );

        if (!latestPush || !latestPush.created_at) return null;
        
        return {
            repoName: latestPush.repo.name,
            repoUrl: `https://github.com/${latestPush.repo.name}`,
            avatarUrl: latestPush.actor.avatar_url,
            createdAt: latestPush.created_at ?? null,
        };
    } catch (error) {
        throw new Error("Failed to fetch GitHub events");
    }
}