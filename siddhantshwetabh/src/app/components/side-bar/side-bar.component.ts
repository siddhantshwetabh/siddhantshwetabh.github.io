import { ViewportScroller } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent {
  currentRoute: any;
  isDesktopView: any;
  constructor(private router: Router, private scroller: ViewportScroller,) {

  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      event instanceof NavigationEnd ?
        this.currentRoute = event.url
        : null
    })

    this.isDesktopView = window.innerWidth > 768 ? true : false;
    console.log(this.isDesktopView, window.innerWidth)
  }

  @HostListener('window:resize', ['$event'])  
  onResize(event:any) {  
    this.isDesktopView = window.innerWidth > 768 ? true : false;
  }  

  sidebarOptionClicked(option: any) {
    if (option.name === 'Resume') {
      window.open('../../../assets/Siddhanta_Shwetabh_Resume.pdf', '_blank');
    }
    else {
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
  }

  sideBarOptions = [
    {
      "name": "About",
      "isActive": false,
      "routeLink": "intro"
    },
    {
      "name": "Work Experience",
      "isActive": false,
      "routeLink": "workex"
    },
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
    // {
    //   "name": "Contact",
    //   "isActive": false,
    //   "routeLink": "contact"
    // },
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
