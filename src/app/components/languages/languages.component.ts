import { Component, Input } from '@angular/core';
import { Language } from '../../_models/Languages';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {

  @Input() language = {} as Language;
}
