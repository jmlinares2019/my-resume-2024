import { ProjectsService } from './../../_services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../_models/Project';
import { Tag } from '../../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit{

  constructor(private titleService: Title, private ProjectsService: ProjectsService){
    this.titleService.setTitle("John Doe - Portfolio");
  }

  projects = {} as Project[];
  
  isCollapsed: boolean = true;
  filtering: boolean = false;

  csharp: boolean = false;
  javascript: boolean = false;
  typescript: boolean = false;
  python: boolean = false;
  java: boolean = false;

  aspnet: boolean = false;
  nodejs: boolean = false;
  angular: boolean = false;
  react: boolean = false;
  

  ngOnInit(): void { 
    // getProjects when the component is initialized 
    // (when it loads, without clicking any button or performing any action)
    this.projects = this.ProjectsService.getProjects();
  }

  filterProjects(){
    let filterTags: Tag[] = [];

    if (this.typescript){ // === true
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if (this.python){
      filterTags.push(Tag.PYTHON);
    }

    if (this.csharp){
      filterTags.push(Tag.CSHARP);
    }

    if (this.nodejs){
      filterTags.push(Tag.NODEJS);
    }

    if (this.aspnet){
      filterTags.push(Tag.ASPNET);
    }

    if (this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }

    if (this.react){
      filterTags.push(Tag.REACT);
    }

    if (this.java){
      filterTags.push(Tag.JAVA);
    }

    // show reset button if at least one filter is applied
    if (filterTags.length > 0){
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.ProjectsService.getProjectsByFilter(filterTags);
  }

  resetFilters(){
    this.csharp = false;
    this.javascript = false;
    this.typescript = false;
    this.python = false;
    this.java = false;
    this.aspnet = false;
    this.nodejs = false;
    this.angular = false;
    this.react = false;
    this.filtering = false;

    this.projects = this.ProjectsService.getProjects();
  }

}
