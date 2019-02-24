import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShowTimePipe } from "./show-time.pipe";

@NgModule({
  declarations: [ShowTimePipe],
  exports: [ShowTimePipe],
  imports: [CommonModule]
})
export class CommomPipeModule {}
