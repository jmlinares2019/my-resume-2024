import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  projects: Project[] = [
    {id: 2, name: "React Flags Quiz", pictures: ["assets/img/img1.png","assets/img/img2.png","assets/img/img3.png"], projectWebLink: "https://reactjs-flags-quiz.netlify.app/", projectRepoLink: "https://github.com/jmlinares2019/country-flags-quiz", summary: "Guess which country random flags belong! The app calls an API that returns countries' data. Built in React over Vite environment", description: "", tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.HTML, Tag.SASS, Tag.NODEJS, Tag.JSON, Tag.GIT]},
    {id: 3, name: "React Quiz", pictures: ["assets/img/img1.png","assets/img/img2.png","assets/img/img3.png"], projectWebLink: "https://funny-react-quiz.netlify.app/", projectRepoLink: "https://github.com/jmlinares2019/react-quiz", summary: "A React basic quiz built in React over Vite environment", description: "", tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.HTML, Tag.SASS, Tag.NODEJS, Tag.JSON, Tag.GIT]},
    {id: 4, name: "React NASA APOD app", pictures: ["assets/img/img1.png","assets/img/img2.png","assets/img/img3.png"], projectWebLink: "https://nasa-apod-api-app.netlify.app/", projectRepoLink: "https://github.com/jmlinares2019/nasa-apod-api-app", summary: "A React app that calls a NASA API to show the Astronomy Picture of the Day and related info. Built in React over Vite.", description: "", tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.HTML, Tag.CSS, Tag.NODEJS, Tag.RESTAPI, Tag.JSON, Tag.GIT]},
    {id: 5, name: "React Wiktionary", pictures: ["assets/img/img1.png","assets/img/img2.png","assets/img/img3.png"], projectWebLink: "https://react-wiktionary.netlify.app/", projectRepoLink: "https://github.com/jmlinares2019/react-dictionary-app", summary: "A dictionary React app that calls the Free Dictionary API. Built in React over Vite.", description: "", tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.HTML, Tag.SASS, Tag.NODEJS, Tag.RESTAPI, Tag.JSON, Tag.GIT]},
    {id: 6, name: "React meme generator", pictures: ["assets/img/img1.png","assets/img/img2.png","assets/img/img3.png"], projectWebLink: "https://lets-meme.netlify.app/", projectRepoLink: "https://github.com/jmlinares2019/react-meme-generator", summary: "Meme generator that calls an API to fetch a random meme image, that the user can then caption adding some classic meme text over it via a form. Built in React.", description: "", tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.HTML, Tag.CSS, Tag.NODEJS, Tag.RESTAPI, Tag.JSON, Tag.GIT]},
    {id: 7, name: "Rick & Morty characters", pictures: ["assets/img/img1.png","assets/img/img2.png","assets/img/img3.png"], projectWebLink: "https://jmlinares2019.github.io/rick-and-morty-React-app/", projectRepoLink: "https://github.com/jmlinares2019/rick-and-morty-React-app", summary: "A React app that shows info about Rick & Morty characters from a public API. Personal project for learning purposes.", description: "", tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.HTML, Tag.CSS, Tag.NODEJS, Tag.RESTAPI, Tag.JSON]},
    {id: 8, name: "Endurance Environmental Solutions website", pictures: ["assets/img/img1.png","assets/img/img2.png","assets/img/img3.png"], projectWebLink: "https://www.enduranceenvironmental.com/", projectRepoLink: "", summary: "Careers website created as part of Monster Strategic Talents Solutions team for one of its clients in the US", description: "", tags: [Tag.HTML, Tag.SASS, Tag.JAVASCRIPT, Tag.JQUERY, Tag.PHP, Tag.LARAVEL, Tag.GIT]},
    {id: 9, name: "Passivhaus website", pictures: ["assets/img/img1.png","assets/img/img2.png","assets/img/img3.png"], projectWebLink: "https://plataforma-pep.org/", projectRepoLink: "", summary: "Website for a Spanish Passive House organization", description: "", tags: [Tag.HTML, Tag.SASS, Tag.JAVASCRIPT, Tag.JQUERY, Tag.PHP]},
    {id: 10, name: "Careers at Aesi", pictures: ["assets/img/img1.png","assets/img/img2.png","assets/img/img3.png"], projectWebLink: "https://www.careersataesi.com/", projectRepoLink: "", summary: "Careers website created as part of Monster Strategic Talents Solutions team for one of its clients in the US", description: "", tags: [Tag.HTML, Tag.SASS, Tag.JAVASCRIPT, Tag.JQUERY, Tag.PHP, Tag.LARAVEL, Tag.GIT]},
    {id: 11, name: "Monster Veterans Hiring", pictures: ["assets/img/img1.png","assets/img/img2.png","assets/img/img3.png"], projectWebLink: "https://www.monster.com/about/veteran-hiring/", projectRepoLink: "", summary: "Own Monster's Career website focused in veterans hiring", description: "", tags: [Tag.HTML, Tag.SASS, Tag.JAVASCRIPT, Tag.JQUERY, Tag.PHP, Tag.LARAVEL, Tag.GIT]},
    {id: 12, name: "Graphic Design portfolio at Issuu", pictures: ["assets/img/img1.png","assets/img/img2.png","assets/img/img3.png"], projectWebLink: "https://issuu.com/jlinaresmar", projectRepoLink: "", summary: "A collection of my works as Graphic Designer for different companies", description: "", tags: [Tag.ACC]},
  ];

  constructor() { }

  getProjects(){
    return this.projects;
  }

  getProjectById(id: number): Project{
    let project = this.projects.find(function(project){
      return project.id === id;
    });

    if (project === undefined){
      throw new TypeError("There's no project with the id " + id);
    }

    return project;
  }

  getProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function(project) {
      let foundAll = true;

      // for each project, checks whether it includes all the filter tags 
      filterTags.forEach(function(filterTag){
        if (project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      // if the project includes all the filter tags, push it to the results array
      if(foundAll){
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }

}
