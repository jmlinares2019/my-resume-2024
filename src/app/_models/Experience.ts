import { Tag } from "./Tag";

export interface Experience{
    id: number;
    company: string;
    logo: string;
    location: string;
    position: string;
    duration: string;
    description: string;
    techStack: Tag[];
    altTechStack: string[];
    projectLink: string[];
}