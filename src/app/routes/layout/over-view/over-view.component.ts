import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.scss']
})
export class OverViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  routeTo(param) {
    this.router.navigate([param]);
  }
}
