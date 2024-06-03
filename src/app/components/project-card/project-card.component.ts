import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../_models/Project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})

export class ProjectCardComponent {
  @Input() project = {} as Project; 
  @Output() dataEvent = new EventEmitter<string>();

  constructor(){

  }

  filterProjects(tag: string){
    this.dataEvent.emit(tag)
  }
}
