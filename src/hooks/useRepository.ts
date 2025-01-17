import axios from "axios";
import { useEffect, useState } from "react";
import { ProgrammingLanguaje, Repository } from "../types/languajesTypes";

export function useRepository() {

    const [languages, setLanguages] = useState<ProgrammingLanguaje[]>([]);
    const [repository, setRepository] = useState<Repository[] | undefined>();
    const [error, setError] = useState(false);
    const [selectedLanguaje, setSelectedLanguaje] = useState<string>('');
    const [randomIndex, setRandomIndex] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

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
        };

        setLoading(false);
        fetchRepository();
    }, [selectedLanguaje]);

    return {
        languages,
        repository,
        error,
        setSelectedLanguaje,
        randomIndex,
        loading,
        selectedLanguaje,
    }
}