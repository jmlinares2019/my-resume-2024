import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input } from '@angular/core';
import { Project } from '../../_models/Project';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent{
  @Input() project = {} as Project

  // if we want to use a component as the content of a modal, 
  // we need to inject BsModalRef
  constructor(public modalRef: BsModalRef){
  }

}
