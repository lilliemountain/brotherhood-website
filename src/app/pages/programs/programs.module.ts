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
import { BrotherMamasComponent } from './brother-mamas/brother-mamas.component';
import { TopImageTitleModule } from '../../shared/top-image-title/top-image-title.module';

@NgModule({
  declarations: [
    ProgramsComponent,
    CrossfitComponent,
    BrotherhodKidsComponent,
    OutdoorSessionsComponent,
    BortherhoodCorporateWellnessComponent,
    OpenGymComponent,
    ElementsComponent,
    BrotherMamasComponent,
  ],
  imports: [CommonModule, ProgramsRoutingModule, TopImageTitleModule],
})
export class ProgramsModule {}
