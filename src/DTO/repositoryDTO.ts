import { Item } from "../types/repositoryType"

export interface RepositoryDTO extends Pick<Item, 'name'> {
    name: string
}