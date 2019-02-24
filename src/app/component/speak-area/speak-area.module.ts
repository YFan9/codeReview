import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpeakAreaComponent } from "./speak-area.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { speakInfoService } from "../../services/website/websiteInfo.service";
import { CommomPipeModule } from "src/app/commom-pipe/commom-pipe.module";

@NgModule({
  declarations: [SpeakAreaComponent],
  imports: [CommonModule, NgZorroAntdModule, CommomPipeModule],
  exports: [SpeakAreaComponent],
  providers: [speakInfoService]
})
export class SpeakAreaModule {}
