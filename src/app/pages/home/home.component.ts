import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from './../../_services/projects.service';
import { Project } from '../../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private ProjectsService: ProjectsService, private renderer: Renderer2, ){
    this.titleService.setTitle("John Doe - Home");
  }

  featuredProject = {} as Project;

  ngOnInit(): void {
    // this.featuredProject = this.ProjectsService.getProjectById(1);
  }

  // Download PDF file
  downloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../../assets/resume_2023.pdf');
    link.setAttribute('download', 'resume_2023.pdf');
    link.click();
    link.remove();
  }

  
}
