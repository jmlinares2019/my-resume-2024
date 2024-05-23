import { Injectable } from '@angular/core';
import { Experience } from '../_models/Experience';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  experiences: Experience[] = [
    {
      id: 1,
      company: "Monster Worldwide",
      logo: "",
      location: "Prague (CZ)",
      position: "Frontend Developer",
      duration: "2022 - 2023",
      description: "Development and maintenance of career websites for all kind of international clients (mainly based in the US), under the Monster Strategic Solutions Team (US, CA, CZ). Technology stack: Laravel (PHP), HTML / CSS (Sass), JavaScript (+ jQuery), Git. Also: Node.js, Jenkins. Examples: Monster Veterans, Careers at Aesi",
      projectLink: "https://www.monster.com/about/veteran-hiring/"
    },
    {
      id: 2,
      company: "eBay Czech Republic",
      logo: "",
      location: "Prague (CZ)",
      position: "Frontend Developer (email specialist)",
      duration: "2021 - 2022",
      description: "Email development and customization using eBay's own tools, for the launch of multiple marketing or transactional campaigns. Documenting tools and processes for the team's wiki. Technology stack: HTML / CSS (Sass), JavaScript. Also: Nunjucks",
      projectLink: ""
    }
  ];

  constructor() { }

  getExperiences(){
    return this.experiences;
  }
}
