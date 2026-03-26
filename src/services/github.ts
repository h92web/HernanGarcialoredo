const GITHUB_USERNAME = 'h92web';

export interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    fork: boolean;
}

export const getRepositories = async (): Promise<Repo[]> => {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`);
        if (!response.ok) throw new Error();
        const data: Repo[] = await response.json();
        return data.filter(repo => !repo.fork);
    } catch (error) {
        return [];
    }
};

export const getProjectImageUrl = (repoName: string) => {
    return `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/main/pfImg.png`;
};