"use server";

export async function getContributors() {
    try {
        const response = await fetch(
            "https://api.github.com/repos/AxelRojas-hub/plan-estudios-unpsjb/contributors",
            { next: { revalidate: 86400 } }
        );

        if (!response.ok) {
            console.error("Error al obtener colaboradores de la API de GitHub");
            return [];
        }

        const data = await response.json();
        const contributors = data as { login: string; avatar_url: string; html_url: string }[];

        return contributors.filter(contributor => contributor.login !== "vercel[bot]");
    } catch (error) {
        console.error("Error al obtener colaboradores:", error);
        return [];
    }
}
