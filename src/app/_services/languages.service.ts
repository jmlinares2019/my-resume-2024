import { Injectable } from '@angular/core';
import { Language } from '../_models/Languages';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  languages: Language[] = [
    {
      id: 1,
      language: "English",
      level: "Professional"
    },
    {
      id: 2,
      language: "Spanish",
      level: "Native"
    }, 
    {
      id: 3,
      language: "Italian",
      level: "Advanced"
    }, 
    {
      id: 4,
      language: "Catalan",
      level: "Native"
    },
    {
      id: 5,
      language: "Czech",
      level: "Basic"
    }

  ]

  constructor() { }

  getLanguages(){
    return this.languages;
  }
}
