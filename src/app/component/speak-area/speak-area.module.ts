import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpeakAreaComponent } from "./speak-area.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { speakInfoService } from "../../services/website/websiteInfo.service";

@NgModule({
  declarations: [SpeakAreaComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [SpeakAreaComponent],
  providers: [speakInfoService]
})
export class SpeakAreaModule {}
