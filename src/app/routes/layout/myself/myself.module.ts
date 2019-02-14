import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../../../node_modules/@angular/router';
import { MyselfComponent } from './myself.component';

@NgModule({
  declarations: [MyselfComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MyselfComponent }])
  ]
})
export class MyselfModule { }
