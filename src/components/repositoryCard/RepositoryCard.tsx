import './repositoryCard.css';
import { useRepository } from "../../hooks/useRepository";
import { LoadedRepository } from "../LoadedRepository/LoadedRepository";

export function RepositoryCard() {

    const {   
        repository,
        /*error,*/
        setSelectedLanguaje,
        randomIndex,
        selectedLanguaje,
        languages,
        /*loading*/ } = useRepository();


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

                <div className="card__repository">
                    {repository && randomIndex !== null && 
                    
                    <LoadedRepository
                        randomIndex = {randomIndex}
                        repository = {repository}
                        selectedLanguaje = {selectedLanguaje}
                    />}
                </div>
            </form>
        </>
    );
}
