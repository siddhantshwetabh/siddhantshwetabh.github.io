import { Component } from '@angular/core';

@Component({
  selector: 'app-work-ex',
  templateUrl: './work-ex.component.html',
  styleUrls: ['./work-ex.component.scss']
})
export class WorkExComponent {
  DOJ = "2021-02-04 10:00:00";

  constructor(){
  }

  calculateDiff(){
    let currentDate = new Date();
    let dateOfJoining = new Date(this.DOJ);
    let numberOfDays =  Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateOfJoining.getFullYear(), dateOfJoining.getMonth(), dateOfJoining.getDate()) ) /(1000 * 60 * 60 * 24));
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);
    var yearsDisplay = years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
    var monthsDisplay = months > 0 ? (months+1) + (months == 1 ? " month. " : " months. ") : "";
    var daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "";
    return yearsDisplay + monthsDisplay; 
  }
}
