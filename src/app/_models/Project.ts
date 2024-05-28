import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectWebLink: string;
    projectRepoLink: string;
    pictures: string[];
    tags: Tag[];
}