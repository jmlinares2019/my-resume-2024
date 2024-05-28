import { Injectable } from '@angular/core';
import { Experience } from '../_models/Experience';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  experiences: Experience[] = [
    {
      id: 1,
      company: "Monster Worldwide",
      hasLogo: true,
      logo: "../../../../assets/img/monster-logo-150px.png",
      location: "Prague (CZ)",
      position: "Frontend Developer",
      duration: "2022 - 2023",
      description: "Development and maintenance of career websites for all kind of international clients (mainly based in the US), under the Monster Strategic Solutions Team (US, CA, CZ)",
      techStack: [Tag.HTML, Tag.CSS, Tag.SASS, Tag.JAVASCRIPT, Tag.JQUERY, Tag.JSON, Tag.LARAVEL, Tag.PHP, Tag.GIT],
      altTechStack: ["Jenkins", "Figma", "Jira"],
      projectLinks: [
        {
          id: 1,
          name: "Monster Veterans",
          url: "https://www.monster.com/about/veteran-hiring/"
        },
        {
          id: 2,
          name: "Careers at Aesi",
          url: "https://www.careersataesi.com/" 
        },
        {
          id: 3,
          name: "Endurance Environmental",
          url: "https://www.enduranceenvironmental.com/"
        } 
      ]
    },
    {
      id: 2,
      company: "eBay Czech Republic",
      hasLogo: true,
      logo: "../../../../assets/img/ebay-logo-150px.png",
      location: "Prague (CZ)",
      position: "Frontend Developer (email specialist)",
      duration: "2021 - 2022",
      description: "Email development and customization using eBay's own tools, for the launch of multiple marketing or transactional campaigns. Documenting tools and processes for the team's wiki.",
      techStack: [Tag.HTML, Tag.CSS, Tag.SASS, Tag.JAVASCRIPT, Tag.JSON],
      altTechStack: ["Nunjucks", "Jira"],
      projectLinks: []
    },
    {
      id: 3,
      company: "Moovity",
      hasLogo: false,
      logo: "",
      location: "Burgos (ES, remote)",
      position: "Frontend Developer",
      duration: "2020 - 2021",
      description: "HTML5 / CSS3 / JS / PHP development of custom templates for WordPress dynamic sites, customizable by the client via the WP dashboard",
      techStack: [Tag.HTML, Tag.CSS, Tag.SASS, Tag.JAVASCRIPT, Tag.JQUERY, Tag.PHP, Tag.WORDPRESS],
      altTechStack: ["Figma"],
      projectLinks: [
        {
          id: 1,
          name: "beaktor",
          url: "https://www.beaktor.com/" 
        },
        {
          id: 2,
          name: "passivhaus",
          url: "https://plataforma-pep.org/" 
        } 
      ]
    },
    {
      id: 4,
      company: "Estudios DWI",
      hasLogo: false,
      logo: "",
      location: "Barcelona (ES)",
      position: "Frontend Developer (Wordpress specialist)",
      duration: "2018 - 2019",
      description: "Responsible for translating layouts from designers into friendly and responsive websites through HTML5 and CSS3, mainly over the Wordpress environment with the use of theme builders",
      techStack: [Tag.HTML, Tag.CSS, Tag.WORDPRESS],
      altTechStack: ["Theme builders"],
      projectLinks: []
    },
    {
      id: 5,
      company: "Various companies",
      hasLogo: false,
      logo: "",
      location: "Barcelona (ES)",
      position: "Multimedia Specialist",
      duration: "2018 - 2019",
      description: "Communication tasks, involving: copywriting, design of brochures and posters, both promotional and informative. Blog and newsletter management (design and content), video recording, editing & publishing, etc.",
      techStack: [Tag.WORDPRESS, Tag.ACC],
      altTechStack: ["Theme builders"],
      projectLinks: [
        {
          id: 1,
          name: "issuu",
          url: "https://issuu.com/jlinaresmar" 
        }
      ]
    }
  ];

  constructor() { }

  getExperiences(){
    return this.experiences;
  }
}
