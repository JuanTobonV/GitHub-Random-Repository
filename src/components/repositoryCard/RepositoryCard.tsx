import { useEffect, useState } from "react";
import { ProgrammingLanguaje, Repository } from "../../types/languajesTypes";
import './repositoryCard.css';
import axios from "axios";

export function RepositoryCard() {
    const [languages, setLanguages] = useState<ProgrammingLanguaje[]>([]);
    const [repository, setRepository] = useState<Repository[] | undefined>();
    const [error, setError] = useState(false);
    const [selectedLanguaje, setSelectedLanguaje] = useState<string>('');
    const [randomIndex, setRandomIndex] = useState<number | null>(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRepository = async () => {
            try {
                const languagesResponse = await axios.get<ProgrammingLanguaje[]>('https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json');
                setLanguages(languagesResponse.data);

                const { data } = await axios.get(`https://api.github.com/search/repositories?q=language:${selectedLanguaje}&order=desc&per_page=100`);
                setRepository(data.items);
                setRandomIndex(Math.floor(Math.random() * data.items.length));
            } catch (error) {
                console.error(error);
                setError(true);
            }
        }

        fetchRepository();
    }, [selectedLanguaje]);

    return (
        <>
            <form className="card" action="">
                <label>Github Repository Finder</label>
                <select value={selectedLanguaje} onChange={(e) => setSelectedLanguaje(e.target.value)}>
                    {languages.map((language) => (
                        <option key={language.value} value={language.value}>
                            {language.title}
                        </option>
                    ))}
                </select>
                
                {loading &&                 
                
                <div className="card__repository">
                    {error && 
                    
                        <div>
                            {error}
                        </div>
                    }
                    
                    {repository && randomIndex !== null &&
                    <div className="repository__info">
                         <h1>
                            
                            {repository[randomIndex].full_name}
                         
                         </h1>
    
                         <p className="repository__description">
                            {repository[randomIndex].description}
                         </p>

                         <div className="languaje_circle">
                            <div className="circle"></div>
                            <p>{selectedLanguaje}</p>
                            
                         </div>

                         <span>{repository[randomIndex].stars}</span>

                    </div>
                     
                    }
                </div> 
                
                }



                
            </form>


        </>
    );
}
