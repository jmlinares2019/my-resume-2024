import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle("Juan Manuel Linares - Home");
  }

  // Download PDF file
  downloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/resume_2023.pdf');
    link.setAttribute('download', 'resume_2023.pdf');
    link.click();
    link.remove();
  }
  
}