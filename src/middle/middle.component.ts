import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css'],
})
export class MiddleComponent implements OnInit {
  bookId: number = 67;
  bookName: string = 'Wings of fire';
  author: string = 'APJ Kalam';
  bookstatus: string = 'available';

  btnToggle: boolean = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.btnToggle = false;
    }, 2000);
  }
  onToggle() {
    if (this.bookstatus == 'available') {
      this.bookstatus = 'not available';
      return 'green';
    } else {
      this.bookstatus = 'available';
      return 'red';
    }
  }
  // available() {
  //   return 'green';
  // }

  // not_available() {
  //   return 'red';
  // }
  // onEdit(){
  //   if(this.bookstatus=='not available'){
  //     style.
  //   }
}
