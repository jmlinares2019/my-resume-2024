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
    this.titleService.setTitle("Juan Manuel Linares - Frontend Developer");
    this.receivedTag = "";
  }

  ngOnInit(): void { 
    // getProjects when the component is initialized 
    // (when it loads, without clicking any button or performing any action)
    this.projects = this.ProjectsService.getProjects();
  }

  receivedTag: string;

  projects = {} as Project[];
  
  isCollapsed: boolean = true;
  filtering: boolean = false;
  // languages
  html: boolean = false;
  css: boolean = false;
  sass: boolean = false;
  javascript: boolean = false;
  jquery: boolean = false;
  typescript: boolean = false;
  php: boolean = false;
  // others
  nodejs: boolean = false;
  angular: boolean = false;
  react: boolean = false;
  wordpress: boolean = false;
  laravel: boolean = false;
  json: boolean = false;
  api: boolean = false;
  git: boolean = false;
  acc: boolean = false;

  filterFromCardTags(tag: string){
    this.receivedTag = tag;

    if(tag === "html"){
      this.html = true;
    }
    if(tag === "css"){
      this.css = true;
    }
    if(tag === "sass"){
      this.sass = true;
    }
    if(tag === "javascript"){
      this.javascript = true;
    }
    if(tag === "jquery"){
      this.jquery = true;
    }
    if(tag === "html"){
      this.html = true;
    }
    if(tag === "typescript"){
      this.typescript = true;
    }
    if(tag === "php"){
      this.php = true;
    }
    if(tag === "angular"){
      this.angular = true;
    }
    if(tag === "react"){
      this.react = true;
    }
    if(tag === "laravel"){
      this.laravel = true;
    }
    if(tag === "nodejs"){
      this.nodejs = true;
    }
    if(tag === "json"){
      this.json = true;
    }
    if(tag === "api"){
      this.api = true;
    }
    if(tag === "wordpress"){
      this.wordpress = true;
    }
    if(tag === "git"){
      this.git = true;
    }
    if(tag === "acc"){
      this.acc = true;
    }
    this.filterProjects();
    
  }

  filterProjects(){
    let filterTags: Tag[] = [];

    if (this.html){ // === true
      filterTags.push(Tag.HTML);
    }

    if (this.css){
      filterTags.push(Tag.CSS);
    }

    if (this.sass){
      filterTags.push(Tag.SASS);
    }

    if (this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }

    if(this.jquery){
      filterTags.push(Tag.JQUERY);
    }

    if (this.typescript){ 
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (this.php){
      filterTags.push(Tag.PHP);
    }

    if (this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if (this.react){
      filterTags.push(Tag.REACT);
    }

    if (this.laravel){
      filterTags.push(Tag.LARAVEL);
    }

    if (this.nodejs){
      filterTags.push(Tag.NODEJS);
    }

    if (this.json){
      filterTags.push(Tag.JSON);
    }

    if (this.api){
      filterTags.push(Tag.RESTAPI);
    }

    if (this.wordpress){
      filterTags.push(Tag.WORDPRESS);
    }

    if (this.git){
      filterTags.push(Tag.GIT);
    }
    
    if (this.acc){
      filterTags.push(Tag.ACC);
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
    this.html = false;
    this.css = false;
    this.javascript = false;
    this.jquery = false;
    this.typescript = false;
    this.php = false;
    this.angular = false;
    this.react = false;
    this.laravel = false;
    this.nodejs = false;
    this.json = false;
    this.api = false;
    this.git = false;
    this.acc = false;

    this.filtering = false;

    this.projects = this.ProjectsService.getProjects();
  }

}
