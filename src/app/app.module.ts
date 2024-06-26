// Basics
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion'
import { FormsModule } from '@angular/forms';
import { MdoButtonModule } from '@ctrl/ngx-github-buttons';
import { UiSwitchModule } from 'ngx-ui-switch';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ExperienceComponent } from './pages/resume/experience/experience.component';
import { EducationComponent } from './pages/resume/education/education.component';
import { LanguagesComponent } from './pages/resume/languages/languages.component';
import { SkillsComponent } from './pages/resume/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ProjectCardComponent,
    ExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,
    MdoButtonModule,
    UiSwitchModule.forRoot({
      size: "small",
      color: '#F27BBD',
      defaultBgColor: '#874CCC',
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
