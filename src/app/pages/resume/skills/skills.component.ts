import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills: string[][] = [
    // languages
    [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "PHP"
    ],
    // frameworks
    [
      "Angular",
      "React",
      "NodeJS",
      "Laravel",
      "Wordpress"
    ],
    // others
    [
      "Source control (Git)",
      "MVC architecture",
      "Adobe Creative Suite"
    ]
  
  ]

}
