import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directive",
  templateUrl: "./directive.component.html"
})
export class DirectiveComponent implements OnInit {
  courseList: string[] = ["Typescript", "JavaScript", "Java", "C#", "PHP"];

  enable: boolean = true;

  constructor() {}

  setVisibility(): void {
    this.enable = this.enable === true ? false : true;
  }

  ngOnInit() {}
}
