import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../../../node_modules/@angular/router';
import { WebsiteComponent } from './website.component';

@NgModule({
  declarations: [WebsiteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebsiteComponent }])
  ]
})
export class WebsiteModule { }
