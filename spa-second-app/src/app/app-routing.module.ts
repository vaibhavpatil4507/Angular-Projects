import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCompoComponent } from './student/student-compo/student-compo.component';
import { StudentsCompoComponent } from './students/students-compo/students-compo.component';
import { AddStudentCompoComponent } from './addStudent/add-student-compo/add-student-compo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'studentList/student/:id',
    component:StudentCompoComponent
  },
  {
    path:'studentList',
    component:StudentsCompoComponent
  },
  {
    path:'addStudent',
    component:AddStudentCompoComponent
  },
  {
    //** is used when aboove path never matched to anyone,specially used for page not found */
    path:'**',
    component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
