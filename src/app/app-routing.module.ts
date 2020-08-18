import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Contact', component: ContactUsComponent },
  {
    path: 'Programs',
    loadChildren: () =>
      import('./pages/programs/programs.module').then((m) => m.ProgramsModule),
  },
  {
    path: 'About Us',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'Contact Us',
    component: ContactUsComponent,
  },
  {
    path: 'Get Started',
    loadChildren: () =>
      import('./pages/get-started/get-started.module').then((m) => m.GetStartedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
