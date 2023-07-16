import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertComponent } from './components/convert/convert.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { component: ConvertComponent, path: "" },
  { path: 'about', component: AboutComponent },
  { path: 'converter', component: ConvertComponent },
  { path: '', component: ConvertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
