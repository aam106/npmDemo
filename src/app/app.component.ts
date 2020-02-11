import { Component } from "@angular/core";

@Component({
  selector: "app-Start",
  // template: "<h1> Done angular...<h1>"
  templateUrl: "./app.component.html",
  styles: [
    `
      P {
        color: grey;
        display :inline:box;
      }
    `
  ]
})
export class AppComponent {
  title = " Angular";

  dummyArr = ["A", "B", "c"];
}
