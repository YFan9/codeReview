import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { WebsiteComponent } from "./website.component";
import { NgxEchartsModule } from "ngx-echarts";
import { SpeakAreaModule } from "../../../component/speak-area/speak-area.module";
import {
  angularInfoService,
  frameInfoService,
  cssInfoService,
  speakInfoService,
  sourceInfoService
} from "../../../services/website/websiteInfo.service";
@NgModule({
  declarations: [WebsiteComponent],
  imports: [
    CommonModule,
    NgxEchartsModule,
    SpeakAreaModule,
    RouterModule.forChild([{ path: "", component: WebsiteComponent }])
  ],
  providers: [
    angularInfoService,
    frameInfoService,
    cssInfoService,
    speakInfoService,
    sourceInfoService
  ]
})
export class WebsiteModule {}
