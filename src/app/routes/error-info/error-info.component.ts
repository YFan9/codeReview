import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-error-info",
  templateUrl: "./error-info.component.html",
  styleUrls: ["./error-info.component.scss"]
})
export class ErrorInfoComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  goBackHome() {
    this.router.navigate(["overview"]);
  }
}
