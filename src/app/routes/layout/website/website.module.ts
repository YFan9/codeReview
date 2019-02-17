import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../../../node_modules/@angular/router';
import { WebsiteComponent } from './website.component';
import {NgxEchartsModule} from 'ngx-echarts'
import { SpeakAreaModule } from 'src/app/component/speak-area/speak-area.module';
@NgModule({
  declarations: [WebsiteComponent],
  imports: [
    CommonModule,
    NgxEchartsModule,
    SpeakAreaModule,
    RouterModule.forChild([{ path: '', component: WebsiteComponent }])
  ]
})
export class WebsiteModule { }
