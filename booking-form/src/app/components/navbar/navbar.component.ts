import { Router, } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() name;
  @Input() page;

  @Input() firstName;
  @Input() lastName;
  @Input() age;
  @Input() date;

  constructor(private Router: Router) { }

  ngOnInit() {
  }

  navigator(){
    if (this.name==='Events'){
      this.Router.navigate(['/detailpage/events']);
    }
      else if(this.name==='View'){
        this.Router.navigate(['/detailpage/view']);
      }
    
  }

}
