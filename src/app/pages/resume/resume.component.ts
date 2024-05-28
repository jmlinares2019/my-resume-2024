import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Experience } from '../../_models/Experience';
import { Education } from '../../_models/Education'; 
import { Language } from './../../_models/Languages';
import { LanguagesService } from './../../_services/languages.service';
import { EducationService } from './../../_services/education.service';
import { ExperiencesService } from './../../_services/experiences.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit{
  
  experiences = {} as Experience[];
  educations = {} as Education[];
  languages = {} as Language[];
  
  constructor(private titleService: Title, private ExperiencesService: ExperiencesService, private EducationService: EducationService, private LanguagesService: LanguagesService){
    this.titleService.setTitle("Juan Manuel Linares - Resume");
  }

  ngOnInit(): void {
    this.experiences = this.ExperiencesService.getExperiences();
    this.educations = this.EducationService.getEducations();
    this.languages = this.LanguagesService.getLanguages();
  }

  // Experience
  experienceIsOpen: boolean = false;

  // Education
  educationIsOpen: boolean = false;

  // Languages
  languagesIsOpen: boolean = false;

  // Skills
  skillsIsOpen: boolean = false;
}
