import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MyselfComponent } from "./myself.component";
import { NgZorroAntdModule } from "../../../../../node_modules/ng-zorro-antd";
import { authorInfoService } from "../../../services/myself/myself.service";

@NgModule({
  declarations: [MyselfComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild([{ path: "", component: MyselfComponent }])
  ],
  providers: [authorInfoService]
})
export class MyselfModule {}
