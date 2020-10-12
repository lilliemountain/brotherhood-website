import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsComponent } from './programs.component';
import { CrossfitComponent } from './crossfit/crossfit.component';
import { BrotherhodKidsComponent } from './brotherhod-kids/brotherhod-kids.component';
import { OutdoorSessionsComponent } from './outdoor-sessions/outdoor-sessions.component';
import { BortherhoodCorporateWellnessComponent } from './bortherhood-corporate-wellness/bortherhood-corporate-wellness.component';
import { OpenGymComponent } from './open-gym/open-gym.component';
import { ElementsComponent } from './elements/elements.component';
import { BrotherMamasComponent } from './brother-mamas/brother-mamas.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramsComponent,
    children: [
      { path: 'Workout-of-the-day', component: CrossfitComponent },
      { path: 'Brotherhood Kids', component: BrotherhodKidsComponent },
      { path: 'Outdoor Sessions', component: OutdoorSessionsComponent },
      { path: 'Brotherhood Corporate Wellness', component: BortherhoodCorporateWellnessComponent },
      { path: 'Open Gym', component: OpenGymComponent },
      { path: 'Elements', component: ElementsComponent },
      { path: 'Brotherhood Mamas', component: BrotherMamasComponent }
  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramsRoutingModule {}
