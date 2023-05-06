import Carousel  from "react-bootstrap/Carousel"
import { useEffect, useState } from "react"
import { getUserRepositories } from "@/pages/api/gitHubConsume"
import style from "../styles/globalComponents.module.css"

export default function Projects(){
    const[repos, setRepos] = useState<string[]>([])

    useEffect(()=>{
        const fetchUser = async()=>{
            const repositories = await getUserRepositories('sebasaravi')
            setRepos(repositories)
        }
        fetchUser()
    }, [])

    return(
        <>
            <div className={style.projectstitle}>
                <h1>GitHub Projects</h1>
            </div>
            <div className={style.projects}>
            <Carousel>
                {repos.map((repo)=>(
                    <Carousel.Item interval={10000}>
                        <img src="programming.jpg" className="db-block w-100"></img>
                            <Carousel.Caption>
                                <h3 key={repo}>{repo}</h3>
                                <p>Description</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            </div>
        </>
    )
}