import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MyselfComponent } from "./myself.component";
import { NgZorroAntdModule } from "../../../../../node_modules/ng-zorro-antd";

@NgModule({
  declarations: [MyselfComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild([{ path: "", component: MyselfComponent }])
  ],
  providers: []
})
export class MyselfModule {}
