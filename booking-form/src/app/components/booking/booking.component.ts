import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private router : Router) { }

  firstName: String;
  lastName: String;
  age:String;
  date:String;


  ngOnInit() {
  }

  //consol.log(this.firstname);
login(){
  /*console.log(this.firstName);
  console.log(this.lastName);
  console.log(this.age);
  console.log(this.date);
*/
this.router.navigate(['detailpage'],{queryParams: {name: this.firstName, surname: this.lastName, age: this.age, date: this.date}});
}


}
