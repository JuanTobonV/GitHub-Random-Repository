import '../repositoryCard/repositoryCard.css';
import starIcon from '../../assets/star.png';
import forkIcon from '../../assets/split-ends.png';
import { Repository } from '../../types/languajesTypes';

type LoadedRepositoryProps = {
    randomIndex:number,
    repository: Repository[],
    selectedLanguaje: string
}

export function LoadedRepository({randomIndex, repository, selectedLanguaje}:LoadedRepositoryProps) {


    return (
        <div className="repository__info">
            <div>
                <h1>{repository[randomIndex].full_name}</h1>
                <p className="repository__description">{repository[randomIndex].description}</p>
            </div>

            <div className='repository__Bottom'>
                <div className="languaje_circle">
                    <div className="circle"></div>
                    <p>{selectedLanguaje}</p>
                </div>
    
                <div className="iconContainer">
                    <div className="icon">
                        <img src={starIcon} alt="Star Icon" />
                        <span>{repository[randomIndex].stargazers_count}</span>
                    </div>
                    <div className="icon">
                        <img src={forkIcon} alt="Fork Icon" />
                        <span>{repository[randomIndex].forks_count}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}