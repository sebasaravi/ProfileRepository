import { Octokit } from "@octokit/rest";
import { API_TOKEN } from "@/config"

const octokit = new Octokit({
    auth:API_TOKEN
})


export const getUserRepositories = async(username: string)=>{
    const response = await octokit.repos.listForUser({
        username,
    })
    return response.data.map((repo)=>repo.name)
}