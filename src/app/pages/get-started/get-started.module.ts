import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetStartedRoutingModule } from './get-started-routing.module';
import { TryFreeComponent } from './try-free/try-free.component';
import { TopImageTitleModule } from '../../shared/top-image-title/top-image-title.module';


@NgModule({
  declarations: [TryFreeComponent],
  imports: [
    CommonModule,
    GetStartedRoutingModule,
    TopImageTitleModule
  ]
})
export class GetStartedModule { }
