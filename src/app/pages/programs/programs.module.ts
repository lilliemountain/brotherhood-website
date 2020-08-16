import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsRoutingModule } from './programs-module.routing';
import { ProgramsComponent } from './programs.component';
import { CrossfitComponent } from './crossfit/crossfit.component';
import { BrotherhodKidsComponent } from './brotherhod-kids/brotherhod-kids.component';
import { OutdoorSessionsComponent } from './outdoor-sessions/outdoor-sessions.component';
import { BortherhoodCorporateWellnessComponent } from './bortherhood-corporate-wellness/bortherhood-corporate-wellness.component';
import { OpenGymComponent } from './open-gym/open-gym.component';
import { ElementsComponent } from './elements/elements.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { BrotherMamasComponent } from './brother-mamas/brother-mamas.component';

@NgModule({
  declarations: [
    ProgramsComponent,
    CrossfitComponent,
    BrotherhodKidsComponent,
    OutdoorSessionsComponent,
    BortherhoodCorporateWellnessComponent,
    OpenGymComponent,
    ElementsComponent,
    TitleBarComponent,
    BrotherMamasComponent,
  ],
  imports: [CommonModule, ProgramsRoutingModule],
  exports: [
    TitleBarComponent,
  ]
})
export class ProgramsModule {}
