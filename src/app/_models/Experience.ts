import { Tag } from "./Tag";
import { ProjectLinks } from "./ProjectLinks";

export interface Experience{
    id: number;
    company: string;
    hasLogo: boolean;
    logo: string;
    location: string;
    position: string;
    duration: string;
    description: string;
    techStack: Tag[];
    altTechStack: string[];
    projectLinks: ProjectLinks[];
}