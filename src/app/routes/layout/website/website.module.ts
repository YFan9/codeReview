import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../../../node_modules/@angular/router';
import { WebsiteComponent } from './website.component';
import {NgxEchartsModule} from 'ngx-echarts'
@NgModule({
  declarations: [WebsiteComponent],
  imports: [
    CommonModule,
    NgxEchartsModule,
    RouterModule.forChild([{ path: '', component: WebsiteComponent }])
  ]
})
export class WebsiteModule { }
