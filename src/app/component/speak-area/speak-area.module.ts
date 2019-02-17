import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpeakAreaComponent } from "./speak-area.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { speakInfo } from "src/app/services/website/websiteInfo";

@NgModule({
  declarations: [SpeakAreaComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [SpeakAreaComponent],
  providers: [speakInfo]
})
export class SpeakAreaModule {}
