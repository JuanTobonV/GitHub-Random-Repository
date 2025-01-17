import { useEffect, useState } from "react";
import { ProgrammingLanguaje } from "../../types/languajesTypes";
import { RepositoryDTO } from "../../DTO/repositoryDTO";

import './repositoryCard.css'


import axios from "axios";
import { Item } from "../../types/repositoryType";

export function RepositoryCard(){

    const [languages, setLanguages] = useState<ProgrammingLanguaje[]>([])
    const [repository, setRepository] = useState<RepositoryDTO>();
    useEffect(() => {
        
       const fetchLanguajes = async () => {

            const {data} = await axios.get<ProgrammingLanguaje[]>('https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json');
            
            setLanguages(data);
        }

        async function fetchRepository() {
            const {data} = await axios.get<Item>('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=1')
           setRepository(data);
        } 

        fetchLanguajes();
        fetchRepository();

    }, [])



    return (
        <> 
            
                <form className="card" action="">

                    <label>Github Repository Finder</label>

                    <select name="" id="">
                        {languages.map((language) => (
                            <option value={language.value}>{language.title}</option>
                        ))}
                    </select>

                    <div>

                    </div>
                </form>
            
        </>
    )

}