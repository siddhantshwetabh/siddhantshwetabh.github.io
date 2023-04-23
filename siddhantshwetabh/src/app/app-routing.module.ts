import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/tabComponents/intro/intro.component';
import { WorkExComponent } from './components/tabComponents/work-ex/work-ex.component';
import { ProjectsComponent } from './components/tabComponents/projects/projects.component';
import { SkillsComponent } from './components/tabComponents/skills/skills.component';
import { EducationComponent } from './components/tabComponents/education/education.component';
import { ContactComponent } from './components/tabComponents/contact/contact.component';
import { InterestsComponent } from './components/tabComponents/interests/interests.component';
import { ResumeComponent } from './components/tabComponents/resume/resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'work-ex', component: WorkExComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
