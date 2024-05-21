import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  
  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle("John Doe - Resume");
  }

  // Experience
  experienceIsOpen: boolean = false;

  // Educations
  educationIsOpen: boolean = false;

  // Certificates
  certificatesIsOpen: boolean = false;

  // Skills
  skillsIsOpen: boolean = false;

  languages: string[] = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "PHP"
  ];

  frameworks: string[] = [
    "Angular",
    "React",
    "NodeJS",
    "Laravel",
    "Wordpress"
  ];

  others: string[] = [
    "Source control (Git)",
    "MVC architecture",
    "Adobe Creative Suite"
  ]

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
