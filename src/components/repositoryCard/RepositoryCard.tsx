import { useEffect, useState } from "react";
import { ProgrammingLanguaje } from "../../types/languajesTypes";
import './repositoryCard.css'
import { RepositoryDTO } from "../../DTO/repositoryDTO";


import axios from "axios";

export function RepositoryCard(){

    const [languages, setLanguages] = useState<ProgrammingLanguaje[]>([])
    const [repository, setRepository] = useState([]);
    
    useEffect(() => {
        
       const fetchLanguajes = async () => {

            const {data} = await axios.get<ProgrammingLanguaje[]>('https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json');
            
            setLanguages(data);
        }

        async function fetchRepository() {
            const {data} = await axios.get('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=1')
            setRepository(data.items[0]);
        } 

        fetchLanguajes();
        fetchRepository();

    }, [])



    return (
        <> 
            <section>
                <h4>Github Repository Finder</h4>
                <form action="">
                    <select name="" id="">
                        {languages.map((language) => (
                            <option value={language.value}>{language.title}</option>
                        ))}
                    </select>

                    <div>
                        {<p>{repository.name}</p>}
                    </div>
                </form>
            </section>
        </>
    )

}