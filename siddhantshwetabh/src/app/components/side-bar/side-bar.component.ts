import { ViewportScroller } from "@angular/common";
import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent {
  currentRoute: any
  constructor(private router: Router, private scroller: ViewportScroller,) {

  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      event instanceof NavigationEnd ?
      this.currentRoute = event.url
      : null
    })
  }

  sidebarOptionClicked(option: any) {
    this.sideBarOptions.forEach((op: any) => {
      if (op == option) {
        op.isActive = true;
        // this.router.navigate([op.routeLink]);
        this.router.navigate(['.'], { fragment: op.routeLink });
      }
      else {
        op.isActive = false
      }
    })
    console.log(this.sideBarOptions)
  }

  sideBarOptions = [
    {
      "name": "About",
      "isActive": false,
      "routeLink": "intro"
    },
    // {
    //   "name": "Work Experience",
    //   "isActive": false,
    //   "routeLink": "workex"
    // },
    {
      "name": "Projects",
      "isActive": false,
      "routeLink": "projects"
    },
    {
      "name": "Skills",
      "isActive": false,
      "routeLink": "skills"
    },
    {
      "name": "Education",
      "isActive": false,
      "routeLink": "education"
    },
    {
      "name": "Contact",
      "isActive": false,
      "routeLink": "contact"
    },
    {
      "name": "Interests",
      "isActive": false,
      "routeLink": "interests"
    },
    {
      "name": "Resume",
      "isActive": false,
      "routeLink": "resume"
    }
  ]
}
