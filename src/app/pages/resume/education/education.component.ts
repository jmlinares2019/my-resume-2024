import { Component, Input } from '@angular/core';
import { Education } from '../../../_models/Education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  
  @Input() education = {} as Education;
}
