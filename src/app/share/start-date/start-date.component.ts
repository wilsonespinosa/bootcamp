import { Component, Input } from '@angular/core';

@Component({
  selector: 'date-icon',
  template: `<span [style.color]="startDateHandler()" class="glyphicon glyphicon-certificate"></span>`,
  styleUrls: ['./start-date.component.css']
})
export class StartDateIconComponent {

    @Input() public date: Date;
    private previousDate: Date;

  constructor() { }

   ngDoCheck() {
        if(this.date != this.previousDate) {
            this.startDateHandler();
            this.previousDate = this.date;
        }
    }

  startDateHandler(): string {
      let currentDate = new Date();
      let readDate = new Date(this.date); 
      let daysDiff = Math.ceil((readDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
    if (daysDiff > 30) {
      return 'green';
    } else if (daysDiff < 30 && daysDiff > 0) {
      return 'yellow'
    } else {
      return 'red'
    }
  }

}