import { Component, Input } from '@angular/core';
import { Experience } from '../../_models/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

    @Input() experience = {} as Experience;

}
