import { Component, Input } from '@angular/core';

@Component({
  selector: 'date-icon',
  template: `<span [style.color]="handleStartDateColor()" class="glyphicon glyphicon-record"></span>`,
  styleUrls: ['./start-date.component.css']
})
export class StartDateIconComponent {

    public colorState: string = "green";
    @Input() public date: Date;
    private _previousDate: Date;

  constructor() { }

   ngDoCheck() {
        if(this.date != this._previousDate) {
            this.handleStartDateColor();
            this._previousDate = this.date;
        }
    }

  handleStartDateColor(): string {
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