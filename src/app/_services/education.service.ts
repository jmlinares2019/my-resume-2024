import { Injectable } from '@angular/core';
import { Education } from '../_models/Education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educations: Education[] = [
    {
      id: 1,
      title: "Bachelor's Degree on Communication",
      center: "UOC - Open University of Catalonia",
      location: "Barcelona (ES)",
      duration: "",
      timePeriod: "2017"
    },
    {
      id: 2,
      title: "Professional Certificate on Front End Development",
      center: "CIFO L'Hospitalet",
      location: "Barcelona (ES)",
      duration: "580h",
      timePeriod: "2018"
    },
    {
      id: 3,
      title: "Course on Front End Development",
      center: "CIFO L'Hospitalet",
      location: "Barcelona (ES)",
      duration: "125h",
      timePeriod: "2017 - 2018"
    },
    {
      id: 4,
      title: "Graphic Design Assistant Diplomma",
      center: "UGT",
      location: "Madrid (ES)",
      duration: "580h",
      timePeriod: "2012"
    }
    
  ]

  constructor() { }

  getEducations(){
    return this.educations;
  }
}
