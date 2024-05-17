import { ProjectsService } from './../../_services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../_models/Project';
// import { Tag } from '../../_models/Tag';

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

  ngOnInit(): void { 
    // getProjects when the component is initialized 
    // (without clicking any button or performing any action)
    this.projects = this.ProjectsService.getProjects();
  }

}
