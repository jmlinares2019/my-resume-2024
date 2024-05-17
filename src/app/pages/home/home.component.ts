import { ProjectsService } from './../../_services/projects.service';
import { Project } from '../../_models/Project';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private ProjectsService: ProjectsService){
    this.titleService.setTitle("John Doe - Home");
  }

  featuredProject = {} as Project;

  ngOnInit(): void {
    this.featuredProject = this.ProjectsService.getProjectById(1);
  }

  
}
